import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Asteria Software',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-text">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <div className="not-found-actions">
            <Link href="/" className="not-found-button primary">
              Visit Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 