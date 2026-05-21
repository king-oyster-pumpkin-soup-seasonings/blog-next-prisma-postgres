import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="panel">
      <h1>Authentication error</h1>
      <p>Sign in could not be completed.</p>
      <p>
        In production, confirm these environment variables are set in Vercel:
        NEXT_PUBLIC_VERCEL_APP_CLIENT_ID, VERCEL_APP_CLIENT_SECRET, and
        DATABASE_URL.
      </p>
      <Link className="button" href="/api/auth/authorize">
        Sign in with Vercel
      </Link>
    </div>
  );
}
