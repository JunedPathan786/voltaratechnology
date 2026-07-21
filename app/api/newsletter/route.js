import { handleNewsletterSubmission } from '@/features/newsletter/newsletter.controller';

export async function POST(request) {
  return handleNewsletterSubmission(request);
}
