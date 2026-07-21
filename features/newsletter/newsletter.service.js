import { logger } from '@/lib/logger';

/**
 * Records a newsletter signup. There's no mailing-list provider wired up yet,
 * so this currently just logs the signup — swap in your provider of choice
 * (Resend Audiences, Mailchimp, ConvertKit, etc.) when ready.
 */
export async function subscribeToNewsletter({ email }) {
  logger.info('Newsletter signup', { email });
  return { subscribed: true };
}
