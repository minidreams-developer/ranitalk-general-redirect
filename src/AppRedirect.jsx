import { useEffect } from "react";
import "./AppRedirect.css";

const appStoreUrl =
  "https://play.google.com/store/apps/details?id=com.ranitalk";

function PhonePreview({ className, image, title, copy, action }) {
  return (
    <div className={`phone-preview ${className}`}>
      <div className="phone-screen">
        <div className="phone-speaker" />
        <div
          className="phone-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <span className="skip">SKIP</span>
          <div className="phone-actions">
            <span>▮◀</span>
            <b>●</b>
            <span>◉</span>
          </div>
        </div>
        <div className="phone-copy">
          <span className="phone-kicker">RANITALK</span>
          <h3>{title}</h3>
          <p>{copy}</p>
          <button type="button">{action}</button>
        </div>
      </div>
    </div>
  );
}

function AppRedirect() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      const isAndroid = /Android/i.test(navigator.userAgent);

      if (isAndroid) {
        window.location.replace(
          "intent://details?id=com.ranitalk#Intent;scheme=market;package=com.android.vending;end",
        );
      } else {
        window.location.replace(appStoreUrl);
      }
    }, 1000);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return (
    <main className="landing-page">
      {/* <nav className="landing-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="RaniTalk home">
          <img src="/favicon.svg" alt="" />
          <span>
            Rani<span>Talk</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#features">Why RaniTalk</a>
          <a href="#about">About us</a>
        </div>
        <a className="nav-download" href={appStoreUrl}>
          Download app <span>↗</span>
        </a>
      </nav> */}
      <section className="hero-section" id="top">
        <div className="hero-copy">
          {/* <div className="eyebrow">
            <span>✦</span> Talk. Connect. Belong.
          </div> */}
          <h1>
            Real conversations.
            <br />
            <em>Real connections.</em>
          </h1>
          <p className="hero-description">
            Meet kind, interesting people and make genuine connections through
            live audio and video conversations.
          </p>
          <div className="hero-actions">
            <a className="store-badge" href={appStoreUrl} aria-label="Download on Google Play">
              <img src="/playstoreBtn.svg" alt="Get it on Google Play" />
            </a>
            <a className="store-badge" href={appStoreUrl} aria-label="Download on the App Store">
              <img src="/appstoreBtn.svg" alt="Download on the App Store" />
            </a>
          </div>
          {/* <div className="trust-row">
            <div className="avatar-stack">
              <span>R</span>
              <span>✦</span>
              <span>♡</span>
            </div>
            <p>
              <strong>50,000+</strong> people are already talking
            </p>
          </div> */}
        </div>
        <div
          className="hero-visual"
          id="features"
          aria-label="RaniTalk app previews"
        >
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <PhonePreview
            className="phone-back"
          image="/image2.png"
            title="Always stay anonymous"
            copy="Talk freely and enjoy real conversations — no need to share your identity."
            action="Get started"
          />
          <PhonePreview
            className="phone-front"
          image="/image1.png"
            title="Meet real people"
            copy="Discover verified, genuine people and start real conversations in seconds."
            action="Next"
          />
          <div className="floating-pill pill-top">
            ♡ <span>Good vibes only</span>
          </div>
          <div className="floating-pill pill-bottom">
            ✦ <span>Private &amp; safe</span>
          </div>
        </div>
      </section>
      <footer id="about">
        <span>© 2026 RaniTalk</span>
        <span>Made for meaningful conversations</span>
      </footer>
    </main>
  );
}

export default AppRedirect;
