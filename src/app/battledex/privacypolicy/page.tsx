import Link from 'next/link';

export default function BattleDexPrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <div className="back-button">
          <Link href="/battledex" className="back-link">
            ← Back to BattleDex
          </Link>
        </div>
        
        <header className="privacy-header">
          <h1>Privacy Policy for BattleDex</h1>
          <div className="dates">
            <p><strong>Effective Date:</strong> June 22, 2025</p>
            <p><strong>Last Updated:</strong> June 22, 2025</p>
          </div>
        </header>

        <main className="privacy-content">
          <section>
            <h2>Introduction</h2>
            <p>
              BattleDex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application BattleDex (the &quot;App&quot;).
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Analytics Data (Not Linked to You)</h3>
            <p>
              We collect anonymous usage data through Apple&apos;s built-in App Analytics to help us improve the App. This data is automatically collected by Apple and shared with us in an aggregated, anonymous format. This may include:
            </p>
            <ul>
              <li>App launch frequency</li>
              <li>App usage duration</li>
              <li>Feature usage statistics</li>
              <li>Device performance metrics</li>
              <li>Crash reports and technical diagnostics</li>
              <li>General geographic region (country/region level only)</li>
            </ul>
            <p>
              <strong>Important:</strong> This analytics data is completely anonymous and cannot be linked to your identity or personal information.
            </p>
          </section>

          <section>
            <h2>Information We Do NOT Collect</h2>
            <p>We do not collect, store, or process:</p>
            <ul>
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Location data beyond general region analytics</li>
              <li>User accounts or login information</li>
              <li>In-app behavior tracking linked to individuals</li>
              <li>Device identifiers that could identify you personally</li>
              <li>Any data that could be used to contact or identify you</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Information</h2>
            <p>The anonymous analytics data helps us:</p>
            <ul>
              <li>Understand how users interact with the App</li>
              <li>Identify and fix technical issues</li>
              <li>Improve App performance and stability</li>
              <li>Make informed decisions about new features</li>
              <li>Optimize user experience</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing and Disclosure</h2>
            <ul>
              <li>We do not sell, rent, or trade any user data</li>
              <li>We do not share data with third parties for marketing purposes</li>
              <li>The only data sharing occurs through Apple&apos;s Analytics platform, which provides us with anonymous, aggregated usage statistics</li>
              <li>We may disclose information if required by law or to protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2>Data Storage and Security</h2>
            <ul>
              <li>All Pokémon type data and app functionality is stored locally on your device</li>
              <li>No personal data is transmitted to our servers</li>
              <li>Analytics data is processed and stored by Apple according to their privacy standards</li>
              <li>We implement appropriate security measures to protect any data we do receive</li>
            </ul>
          </section>

          <section>
            <h2>Your Privacy Rights</h2>
            <p>Since we do not collect personal information:</p>
            <ul>
              <li>There is no personal data to access, modify, or delete</li>
              <li>You can opt out of analytics sharing through your device&apos;s privacy settings</li>
              <li>You can delete the App at any time to remove all local data</li>
            </ul>
          </section>

          <section>
            <h2>How to Opt Out of Analytics</h2>
            <p>To disable analytics sharing:</p>
            <ol>
              <li>Go to Settings → Privacy & Security → Analytics & Improvements</li>
              <li>Turn off Share iPhone Analytics or Share iPad Analytics</li>
            </ol>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              BattleDex is suitable for users of all ages. We do not knowingly collect personal information from children under 13. Since our App only uses anonymous analytics data provided by Apple, no personal information from users of any age is collected.
            </p>
          </section>

          <section>
            <h2>International Users</h2>
            <p>
              BattleDex is available worldwide. The anonymous analytics data may be processed in the United States where Apple&apos;s servers are located, but this data cannot be linked to individual users.
            </p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of any material changes by:</p>
            <ul>
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Providing notice through the App Store listing</li>
              <li>Including update information in app release notes</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>BattleDex uses:</p>
            <ul>
              <li>Apple App Analytics: For anonymous usage statistics (covered by Apple&apos;s Privacy Policy)</li>
              <li>No other third-party services that collect user data</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:hello@asteria.software">hello@asteria.software</a><br />
              <strong>Subject:</strong> BattleDex Privacy Policy Inquiry
            </p>
          </section>

          <section>
            <h2>Legal Basis for Processing (GDPR)</h2>
            <p>
              For users in the European Union, our legal basis for processing anonymous analytics data is legitimate interest in improving our App&apos;s functionality and user experience.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <ul>
              <li><strong>Local Data:</strong> Stored on your device until you delete the App</li>
              <li><strong>Analytics Data:</strong> Retained by Apple according to their data retention policies (typically aggregated and anonymized)</li>
            </ul>
          </section>

          <section className="summary">
            <h2>Summary</h2>
            <p>
              <strong>BattleDex prioritizes your privacy.</strong> We only receive anonymous, aggregated usage statistics from Apple to help improve the App. No personal information is collected, stored, or shared. All Pokémon data and app functionality works entirely offline on your device.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
} 