import Link from 'next/link';
import ProjectNavigation from '../../components/ProjectNavigation';

export default function BattleDexSupport() {
  return (
    <div className="project-container">
      <ProjectNavigation 
        backLink={{
          href: "/battledex",
          label: "← Back to BattleDex"
        }}
        navigationLinks={[
          { href: "/battledex/privacypolicy", label: "Privacy Policy" }
        ]}
      />
      
      <div className="privacy-policy-content">
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