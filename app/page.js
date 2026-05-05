import Image from 'next/image';

const TF_LOGO =
  'https://www.texasflange.com/wp-content/uploads/2025/11/tf_logo_black@4x.webp';

export default function Home() {
  return (
    <>
      {/* ---------- Top utility bar ---------- */}
      <div className="utility-bar">
        <div className="container">
          <div className="socials" aria-label="Social links">
            <a
              href="https://www.facebook.com/TexasFlangeandFitting/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon name="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/texas-flange/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon name="linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHeKP7nuVLBXXEC_qXZ8VVg"
              aria-label="YouTube"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon name="youtube" />
            </a>
            <a
              href="https://www.instagram.com/texasflange/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href="https://x.com/TexasFlange"
              aria-label="X / Twitter"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon name="x" />
            </a>
          </div>
          <div className="contact-quick">
            <a href="tel:281-484-8325">
              <PhoneIcon /> 281-484-8325
            </a>
            <a href="mailto:sales@texasflange.com">
              <EmailIcon /> sales@texasflange.com
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="container">
          <a href="/" className="logo" aria-label="Texas Flange Supply home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TF_LOGO} alt="Texas Flange Supply" />
          </a>
          <nav aria-label="Primary">
            <ul>
              <li>
                <a href="https://www.texasflange.com/flange-types-basics/">
                  Flange Types
                </a>
              </li>
              <li>
                <a href="https://www.texasflange.com/flange-dims-weights/">
                  Dimensions
                </a>
              </li>
              <li>
                <a href="https://www.texasflange.com/cad-3d-flange-drawings/">
                  CAD Drawings
                </a>
              </li>
              <li>
                <a href="https://www.texasflange.com/about/">About</a>
              </li>
              <li>
                <a href="/quote" className="btn-cta-header">
                  Request a Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-eyebrow">Manufacturer & Distributor Since 1986</span>
            <h1>
              Forged Steel Flanges. <span className="accent">Shipped When You Need Them.</span>
            </h1>
            <p className="lede">
              Texas Flange has supplied precision pipe flanges to the oil and
              gas, waterworks, chemical, food, and industrial sectors for nearly
              four decades. Direct from the source, no middleman markup.
            </p>
            <div className="hero-ctas">
              <a href="/quote" className="btn-primary">
                Request a Quote <ArrowRight />
              </a>
              <a href="/catalog" className="btn-secondary">
                View Catalog
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-card">
              <div className="stat">40+</div>
              <div className="stat-label">Years In Business</div>
              <hr />
              <ul>
                <li>ANSI B16.5 Class 150 to 2500</li>
                <li>ANSI B16.47 Series A & B</li>
                <li>Carbon, Stainless, Alloy, Exotic</li>
                <li>Custom & Plate Flanges</li>
                <li>Domestic & Import Stock</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Urgency band ---------- */}
      <section className="urgency">
        <div className="container">
          <h2>
            When your operation stops, <strong>every second counts.</strong>
          </h2>
          <p>
            Emergency flange manufacturing and rush shipping available to keep
            your project on schedule. Call us, and we will get to work.
          </p>
        </div>
      </section>

      {/* ---------- We Offer ---------- */}
      <section className="offerings">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Offer</span>
            <h2>Built, Stocked, and Shipped to Spec</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <ForgedIcon />
              </div>
              <h3>Forged Pipe Flanges</h3>
              <p>
                Weld neck, slip-on, blind, threaded, socket weld, and lap joint
                in classes 150 through 2500. Ready to ship from stock.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <CustomIcon />
              </div>
              <h3>Custom & Plate Flanges</h3>
              <p>
                Drilled to spec, machined to your dimensions, and produced in
                the materials your job requires. Domestic when you need it.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <InventoryIcon />
              </div>
              <h3>Stocked Inventory</h3>
              <p>
                Carbon steel, stainless, chrome, duplex, high yield, alloy, and
                titanium. The parts you need, when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Closer ---------- */}
      <section className="closer">
        <div className="container">
          <h2>The Parts You Need, When You Need Them</h2>
          <p>
            Since 1986, Texas Flange has delivered precision flange solutions
            with speed, accuracy, and direct-source pricing. Let us talk about
            your project today.
          </p>
          <a href="/quote" className="btn-primary">
            Request a Quote <ArrowRight />
          </a>
        </div>
      </section>

      {/* ---------- Contact strip ---------- */}
      <section className="contact-strip">
        <div className="container">
          <div className="grid">
            <div className="item">
              <div className="icon">
                <PhoneIcon />
              </div>
              <span className="label">Local & Fax</span>
              <span className="value">
                <a href="tel:281-484-8325">281-484-8325</a>
              </span>
              <span className="value" style={{ fontWeight: 400, color: 'var(--tf-gray-700)' }}>
                Fax: <a href="tel:281-484-8730">281-484-8730</a>
              </span>
            </div>
            <div className="item">
              <div className="icon">
                <EmailIcon />
              </div>
              <span className="label">Sales</span>
              <span className="value">
                <a href="mailto:sales@texasflange.com">sales@texasflange.com</a>
              </span>
            </div>
            <div className="item">
              <div className="icon">
                <PinIcon />
              </div>
              <span className="label">Mail</span>
              <span className="value">P.O. Box 2889</span>
              <span className="value" style={{ fontWeight: 400, color: 'var(--tf-gray-700)' }}>
                Pearland, TX 77588
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <div className="container">
          <div className="grid">
            <div className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TF_LOGO}
                alt="Texas Flange Supply"
                style={{ height: 48, filter: 'brightness(0) invert(1)' }}
              />
              <p>
                Pipe flange manufacturer and distributor serving North America
                since 1986. Forged, custom, and stocked inventory across all
                ANSI classes and material grades.
              </p>
              <div className="socials" aria-label="Social links">
                <a
                  href="https://www.facebook.com/TexasFlangeandFitting/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <SocialIcon name="facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/company/texas-flange/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <SocialIcon name="linkedin" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHeKP7nuVLBXXEC_qXZ8VVg"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener"
                >
                  <SocialIcon name="youtube" />
                </a>
                <a
                  href="https://www.instagram.com/texasflange/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <SocialIcon name="instagram" />
                </a>
              </div>
              <a
                href="https://www.bbb.org/us/tx/pearland/profile/flanges/texas-flange-0915-90024226/#sealclick"
                target="_blank"
                rel="noopener"
                className="bbb"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://seal-houston.bbb.org/seals/blue-seal-200-65-bbb-90024226.png"
                  alt="Texas Flange BBB Business Review"
                  width="200"
                  height="65"
                />
              </a>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="https://www.texasflange.com/">Home</a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/what-we-do/">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/blog/">Blog</a>
                </li>
                <li>
                  <a href="/cad">CAD/3D Drawings</a>
                </li>
                <li>
                  <a href="/dimensions">Dimensions</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Flange Types</h4>
              <ul>
                <li>
                  <a href="https://www.texasflange.com/blind-flanges/">
                    Blind Flanges
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/weld-neck-flanges/">
                    Weld Neck
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/slip-on-flanges/">
                    Slip-On
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/threaded-flanges/">
                    Threaded
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/lap-joint-flanges/">
                    Lap Joint
                  </a>
                </li>
                <li>
                  <a href="https://www.texasflange.com/socket-weld-flanges/">
                    Socket Weld
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>
              Copyright {new Date().getFullYear()} Texas Flange & Fitting Supply.
              All Rights Reserved.
            </span>
            <span>
              <a href="https://www.texasflange.com/privacy-policy/">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="https://www.texasflange.com/terms-and-conditions/">
                Terms & Conditions
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ---------- Inline icon components ---------- */
function ArrowRight() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path
        d="M10 1l5 5-5 5M0 6h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ForgedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="4.5" r="1" fill="currentColor" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" />
      <circle cx="19.5" cy="12" r="1" fill="currentColor" />
      <circle cx="6.7" cy="6.7" r="1" fill="currentColor" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      <circle cx="6.7" cy="17.3" r="1" fill="currentColor" />
      <circle cx="17.3" cy="17.3" r="1" fill="currentColor" />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3l3 3M3 21l3.5-1 13-13-2.5-2.5-13 13L3 21z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7l9-4 9 4v10l-9 4-9-4V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7l9 4 9-4M12 11v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ name }) {
  const paths = {
    facebook: (
      <path
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
        fill="currentColor"
      />
    ),
    linkedin: (
      <path
        d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73a1.74 1.74 0 110-3.49 1.74 1.74 0 010 3.49zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"
        fill="currentColor"
      />
    ),
    youtube: (
      <path
        d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"
        fill="currentColor"
      />
    ),
    instagram: (
      <path
        d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 01-1.38.9c-.42.16-1.06.36-2.23.41-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.07-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.07 1.65-.07 4.85-.07M12 0C8.74 0 8.33 0 7.05.07 5.78.13 4.9.34 4.14.63a5.85 5.85 0 00-2.13 1.38A5.85 5.85 0 00.63 4.14C.34 4.9.13 5.78.07 7.05 0 8.33 0 8.74 0 12s0 3.67.07 4.95c.06 1.27.27 2.15.56 2.91a5.85 5.85 0 001.38 2.13c.66.66 1.32 1.07 2.13 1.38.76.29 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c1.27-.06 2.15-.27 2.91-.56a5.85 5.85 0 002.13-1.38 5.85 5.85 0 001.38-2.13c.29-.76.5-1.64.56-2.91.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.85 5.85 0 00-1.38-2.13A5.85 5.85 0 0019.86.63C19.1.34 18.22.13 16.95.07 15.67 0 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
        fill="currentColor"
      />
    ),
    x: (
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
        fill="currentColor"
      />
    ),
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
