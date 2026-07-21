import { NextResponse } from 'next/server';

export function apiSuccess(data = {}, status = 200) {
  return NextResponse.json({ ok: true, ...data }, { status });
}

export function apiError(message, status = 400, errors = null) {
  return NextResponse.json({ ok: false, message, errors }, { status });
}
