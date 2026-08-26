import { useState } from "react";

const ACCESS_KEY = "puls-regionu-preview-access";
const PREVIEW_PASSWORD = "pulsregionu2026";

function hasPreviewAccess() {
  try {
    return window.sessionStorage.getItem(ACCESS_KEY) === "granted";
  } catch {
    return false;
  }
}

export default function PreviewGate({ children }) {
  const [unlocked, setUnlocked] = useState(hasPreviewAccess);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== PREVIEW_PASSWORD) {
      setError("Nieprawidłowe hasło. Spróbuj ponownie.");
      setPassword("");
      return;
    }

    try {
      window.sessionStorage.setItem(ACCESS_KEY, "granted");
    } catch {
      // Access remains active for the current render if storage is unavailable.
    }

    setUnlocked(true);
  };

  if (unlocked) return children;

  return (
    <main className="pr-preview-gate">
      <div className="pr-preview-gate-shell">
        <img
          src="/puls-regionu-winieta.png"
          alt="Puls Regionu"
          className="pr-preview-gate-logo"
        />
        <section className="pr-preview-gate-card" aria-labelledby="pr-preview-title">
          <h1 id="pr-preview-title" className="pr-serif">
            Witaj na stronie Puls Regionu
          </h1>
          <p className="pr-preview-gate-lead">Zapraszamy wkrótce</p>
          <form className="pr-preview-gate-form" onSubmit={handleSubmit}>
            <label htmlFor="pr-preview-password">Hasło dostępu</label>
            <input
              id="pr-preview-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              autoComplete="current-password"
              aria-describedby="pr-preview-error"
              autoFocus
              required
            />
            <p id="pr-preview-error" className="pr-preview-gate-error" aria-live="polite">
              {error || "\u00a0"}
            </p>
            <button type="submit">Wejdź na stronę</button>
          </form>
        </section>
      </div>
    </main>
  );
}
