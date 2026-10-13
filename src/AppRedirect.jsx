import { useEffect } from "react";
import "./AppRedirect.css";

function AppRedirect() {
  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    const redirectTimer = window.setTimeout(() => {
      if (isAndroid) {
        // Ask Android to open the installed Google Play Store app.
        window.location.replace(
          "intent://details?id=com.ranitalk#Intent;scheme=market;package=com.android.vending;end",
        );
      } else {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.ranitalk";
      }
    },300 );

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return (
    <main className="redirect-page">
      <section className="redirect-card" aria-labelledby="redirect-title">
        <div className="redirect-brand" aria-hidden="true">
          <span className="redirect-brand-mark">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M7 8.75A3.75 3.75 0 0 1 10.75 5h10.5A3.75 3.75 0 0 1 25 8.75v8.5A3.75 3.75 0 0 1 21.25 21H15l-6.5 5v-5.2A3.75 3.75 0 0 1 7 17.25v-8.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 11h8M12 15h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="redirect-brand-name">RaniTalk</span>
        </div>

        <div className="redirect-loader" role="status" aria-label="Loading">
          <span className="redirect-loader-ring" />
          <span className="redirect-loader-center">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3.5 18.5 12 7 20.5v-17Z" fill="currentColor" />
            </svg>
          </span>
        </div>

        <p className="redirect-eyebrow">ONE MOMENT PLEASE</p>
        <h1 id="redirect-title">Opening Google Play</h1>
        <p className="redirect-description">
          Hang tight, we’re taking you to the RaniTalk app page.
        </p>

        <a className="redirect-link" href="market://details?id=com.ranitalk">
          <span>Open in Play Store app</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className="redirect-note">If you aren’t redirected, tap the button above.</p>
      </section>
    </main>
  );
}

export default AppRedirect;
