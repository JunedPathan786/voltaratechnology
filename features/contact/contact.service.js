import { SITE } from '@/constants/site';
import { logger } from '@/lib/logger';

/**
 * Sends the contact inquiry to the studio inbox.
 * Uses Resend (already a project dependency) when RESEND_API_KEY is configured.
 * Falls back to logging the submission so nothing is silently lost in development.
 */
export async function sendContactInquiry({ name, email, requirements, company, projectType, nda }) {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_INBOX_EMAIL || SITE.email;
  
  if (!apiKey) {
    logger.warn('RESEND_API_KEY is not set — logging contact submission instead of sending email.');
    logger.info('Contact submission', { name, email, company, projectType, requirements, nda });
    return { delivered: false, reason: 'not_configured' };
  }

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const { error } = await resend.emails.send({
    from: `${SITE.shortName} Website <${fromAddress}>`,
    to: toAddress,
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      projectType ? `Project type: ${projectType}` : null,
      `NDA requested: ${nda ? 'Yes' : 'No'}`,
      '',
      requirements,
    ]
      .filter(Boolean)
      .join('\n'),
  });

  if (error) {
    logger.error('Failed to send contact email', error);
    throw new Error('Email delivery failed');
  }

  return { delivered: true };
}
