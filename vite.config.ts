import { defineConfig, type Connect } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'


import matter from 'gray-matter'

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

const BLOGS_DIR = path.join(process.cwd(), 'content/blog')

const getBlogs = () => {
  if (!fs.existsSync(BLOGS_DIR)) return []
  try {
    const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.mdx'))
    const posts = files.map(file => {
      const filePath = path.join(BLOGS_DIR, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title || '',
        description: data.description || data.excerpt || '',
        date: data.date || data.publishedAt || '',
        publishedAt: data.publishedAt || data.date || '',
        excerpt: data.excerpt || '',
        category: data.category || 'Insights',
        tags: data.tags || [],
        author: data.author || 'Irtiqa AI Team',
        authorRole: data.authorRole || 'Revenue Operations',
        readingTime: data.readingTime || '5 min read',
        featured: data.featured || false,
        content
      }
    })
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    console.error('Error loading blogs for Vite middleware:', error)
    return []
  }
}

const attachBlogsApiHandler = (middlewares: Connect.Server) => {
  middlewares.use('/api/blogs', (req, res, next) => {
    if (req.method !== 'GET') {
      next()
      return
    }

    const url = new URL(req.url || '', `http://${req.headers.host}`)
    const pathname = url.pathname.replace(/\/$/, '')

    res.setHeader('Content-Type', 'application/json')

    if (pathname === '/latest') {
      res.statusCode = 200
      const blogs = getBlogs().slice(0, 3).map(post => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        readingTime: post.readingTime,
        date: post.date,
        author: post.author
      }))
      res.end(JSON.stringify(blogs))
      return
    }

    if (pathname === '/post') {
      const slug = url.searchParams.get('slug')
      if (!slug) {
        res.statusCode = 400
        res.end(JSON.stringify({ error: 'Missing slug parameter' }))
        return
      }
      const blogs = getBlogs()
      const post = blogs.find(p => p.slug === slug)
      if (!post) {
        res.statusCode = 404
        res.end(JSON.stringify({ error: 'Post not found' }))
        return
      }
      res.statusCode = 200
      res.end(JSON.stringify(post))
      return
    }

    if (pathname === '' || pathname === '/') {
      res.statusCode = 200
      const blogs = getBlogs().map(post => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        readingTime: post.readingTime,
        date: post.date,
        author: post.author,
        featured: post.featured
      }))
      res.end(JSON.stringify(blogs))
      return
    }

    next()
  })
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dev-api-endpoints',
      configureServer(server) {
        attachBookAuditHandler(server.middlewares)
        attachBlogsApiHandler(server.middlewares)
      },
      configurePreviewServer(server) {
        attachBookAuditHandler(server.middlewares)
        attachBlogsApiHandler(server.middlewares)
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
