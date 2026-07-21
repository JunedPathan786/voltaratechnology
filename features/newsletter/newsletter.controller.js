import { validateNewsletterPayload } from './newsletter.schema';
import { subscribeToNewsletter } from './newsletter.service';
import { apiSuccess, apiError } from '@/lib/api-response';

export async function handleNewsletterSubmission(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return apiError('Invalid JSON body', 400);
  }

  const result = validateNewsletterPayload(body);
  if (!result.valid) {
    return apiError('Validation failed', 422, result.errors);
  }

  const outcome = await subscribeToNewsletter(result.data);
  return apiSuccess({ message: "You're subscribed. Watch your inbox.", ...outcome });
}
