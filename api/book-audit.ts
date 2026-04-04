import { findNextAvailableSlot, bookSlot, formatBookingTime, initializeSlots } from './bookings-storage';

type AuditRequest = {
  name?: string;
  email?: string;
  company?: string;
  revenue?: string;
  challenge?: string;
};

type ApiRequest = {
  method?: string;
  body?: AuditRequest | string;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

type BookingResponse = {
  ok: boolean;
  error?: string;
  booking?: {
    date: string;
    time: string;
    formattedTime: string;
    reference: string;
  };
};

const requiredFields: Array<keyof AuditRequest> = ['name', 'email', 'company', 'revenue', 'challenge'];

const parseBody = (body: ApiRequest['body']): AuditRequest => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as AuditRequest;
    } catch {
      return {};
    }
  }
  return body;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  const payload = parseBody(req.body);
  const missingField = requiredFields.find((field) => !payload[field]?.trim());
  if (missingField) {
    res.status(400).json({ ok: false, error: `Missing field: ${missingField}` });
    return;
  }

  try {
    // Initialize slots if needed
    initializeSlots();

    // Find next available slot
    const availableSlot = findNextAvailableSlot();
    if (!availableSlot) {
      res.status(503).json({ ok: false, error: 'No available slots at this time. Please try again later.' });
      return;
    }

    // Generate reference before booking
    const reference = `AUDIT-${Date.now().toString().slice(-8).toUpperCase()}`;

    // Book the slot
    bookSlot(availableSlot, {
      name: payload.name!,
      email: payload.email!,
      company: payload.company!
    });

    // Format the booking time for display
    const formattedTime = formatBookingTime(availableSlot);

    // Send webhook notification (optional - for your records)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            source: 'Irtiqa website booking',
            submittedAt: new Date().toISOString(),
            bookingTime: formattedTime,
            reference,
            ...payload
          })
        });
      } catch {
        // Webhook failure doesn't block the booking - user is still booked
      }
    }

    res.status(200).json({
      ok: true,
      booking: {
        date: availableSlot.date,
        time: availableSlot.time,
        formattedTime,
        reference
      }
    } as BookingResponse);
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Unexpected server error.' });
  }
}
