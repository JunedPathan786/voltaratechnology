import { validateContactPayload } from './contact.schema';
import { sendContactInquiry } from './contact.service';
import { apiSuccess, apiError } from '@/lib/api-response';

export async function handleContactSubmission(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return apiError('Invalid JSON body', 400);
  }

  const result = validateContactPayload(body);
  if (!result.valid) {
    return apiError('Validation failed', 422, result.errors);
  }

  try {
    const outcome = await sendContactInquiry(result.data);
    return apiSuccess({ message: 'Thanks — we received your message and will be in touch soon.', ...outcome });
  } catch {
    return apiError('Something went wrong while sending your message. Please try again shortly.', 502);
  }
}
