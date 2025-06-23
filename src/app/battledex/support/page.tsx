import Link from 'next/link';

export default function BattleDexSupport() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <div className="back-button">
          <Link href="/battledex" className="back-link">
            ← Back to BattleDex
          </Link>
        </div>
        
        <header className="privacy-header">
          <h1>BattleDex Support</h1>
        </header>

        <main className="privacy-content">
          <section>
            <p>
              For product support please send an email to <a href="mailto:hello@asteria.software?subject=App Support">hello@asteria.software</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
} 