import { handleContactSubmission } from '@/features/contact/contact.controller';

export async function POST(request) {
  return handleContactSubmission(request);
}
