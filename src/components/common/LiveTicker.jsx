import { useEffect, useRef } from "react";

export default function LiveTicker({ tickerData }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let raf;
    const step = () => {
      pos -= 1;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [tickerData]);

  return (
    <div className="pr-ticker-wrapper">
      <span className="pr-ticker-prefix">Pobierz Nr. archiwalne:</span>
      <div className="pr-ticker-track-container">
        <div className="pr-ticker-track" ref={trackRef}>
          {[...tickerData, ...tickerData].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-ticker-item"
            >
              <strong>{item.title}</strong> - {item.date}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
