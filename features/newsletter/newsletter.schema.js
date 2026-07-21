export function validateNewsletterPayload(payload) {
  const email = (payload?.email ?? '').toString().trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return { valid: false, errors: { email: 'Please enter a valid email address.' } };
  }

  return { valid: true, data: { email } };
}
