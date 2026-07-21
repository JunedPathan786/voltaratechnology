/**
 * Validates a raw contact form payload.
 * Returns { valid: true, data } or { valid: false, errors }.
 */
export function validateContactPayload(payload) {
  const errors = {};
  const name = (payload?.name ?? '').toString().trim();
  const email = (payload?.email ?? '').toString().trim();
  const requirements = (payload?.requirements ?? '').toString().trim();
  const company = (payload?.company ?? '').toString().trim(); // optional
  const projectType = (payload?.projectType ?? '').toString().trim(); // optional
  const nda = Boolean(payload?.nda);

  if (!name || name.length < 2) {
    errors.name = 'Please enter your name.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!requirements || requirements.length < 10) {
    errors.requirements = 'Please tell us a bit more about your project (10+ characters).';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, data: { name, email, requirements, company, projectType, nda } };
}
