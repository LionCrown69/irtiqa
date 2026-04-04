import { defineConfig, type Connect } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const readBody = (req: NodeJS.ReadableStream) =>
  new Promise<string>((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })

interface BookingSlot {
  date: string
  time: string
  booked: boolean
  bookedBy?: { name: string; email: string; company: string }
  reference?: string
}

const BOOKINGS_FILE = path.join(process.cwd(), 'bookings-data.json')

const loadBookings = (): BookingSlot[] => {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.warn('Error loading bookings:', error)
  }
  return []
}

const saveBookings = (bookings: BookingSlot[]): void => {
  try {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2))
  } catch (error) {
    console.error('Error saving bookings:', error)
  }
}

const initializeSlots = (): BookingSlot[] => {
  let bookings = loadBookings()

  if (bookings.length === 0) {
    bookings = []
    const today = new Date()
    const times = ['10:00', '11:30', '13:00', '14:30', '16:00']

    for (let day = 1; day <= 30; day++) {
      const slotDate = new Date(today)
      slotDate.setDate(slotDate.getDate() + day)

      // Skip weekends
      if (slotDate.getDay() !== 0 && slotDate.getDay() !== 6) {
        const dateStr = slotDate.toISOString().split('T')[0]
        for (const time of times) {
          bookings.push({
            date: dateStr,
            time,
            booked: false
          })
        }
      }
    }

    saveBookings(bookings)
  }

  return bookings
}

const findNextAvailableSlot = (bookings: BookingSlot[]): BookingSlot | null => {
  return bookings.find((slot) => !slot.booked) || null
}

const bookSlot = (bookings: BookingSlot[], slot: BookingSlot, userData: Record<string, string>): string => {
  const slotIndex = bookings.findIndex((s) => s.date === slot.date && s.time === slot.time)
  if (slotIndex !== -1) {
    const reference = `AUDIT-${Date.now()}`
    bookings[slotIndex] = {
      ...slot,
      booked: true,
      bookedBy: { name: userData.name, email: userData.email, company: userData.company },
      reference
    }
    saveBookings(bookings)
    return reference
  }
  return ''
}

const formatBookingTime = (date: string, time: string): string => {
  const dateObj = new Date(date + 'T' + time)
  return dateObj.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const attachBookAuditHandler = (middlewares: Connect.Server) => {
  middlewares.use('/api/book-audit', async (req, res, next) => {
    if (req.method !== 'POST') {
      next()
      return
    }

    try {
      const rawBody = await readBody(req)
      const payload = JSON.parse(rawBody || '{}') as Record<string, string>
      const requiredFields = ['name', 'email', 'company', 'revenue', 'challenge']
      const missingField = requiredFields.find((field) => !payload[field]?.trim())

      res.setHeader('Content-Type', 'application/json')

      if (missingField) {
        res.statusCode = 400
        res.end(JSON.stringify({ ok: false, error: `Missing field: ${missingField}` }))
        return
      }

      // Initialize slots if needed
      const bookings = initializeSlots()

      // Find next available slot
      const availableSlot = findNextAvailableSlot(bookings)
      if (!availableSlot) {
        res.statusCode = 503
        res.end(JSON.stringify({ ok: false, error: 'No slots available' }))
        return
      }

      // Book the slot
      const reference = bookSlot(bookings, availableSlot, payload)
      const formattedTime = formatBookingTime(availableSlot.date, availableSlot.time)

      res.statusCode = 200
      res.end(
        JSON.stringify({
          ok: true,
          booking: {
            date: availableSlot.date,
            time: availableSlot.time,
            formattedTime,
            reference
          }
        })
      )
    } catch (error) {
      console.error('Booking error:', error)
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ ok: false, error: 'Unexpected server error.' }))
    }
  })
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'book-audit-dev-api',
      configureServer(server) {
        attachBookAuditHandler(server.middlewares)
      },
      configurePreviewServer(server) {
        attachBookAuditHandler(server.middlewares)
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: false
  },
  preview: {
    host: 'localhost',
    port: 4173,
    strictPort: true
  }
})
