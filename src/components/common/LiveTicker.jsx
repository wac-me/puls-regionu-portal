import { useEffect, useRef } from "react";

export default function LiveTicker({ tickerData }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let raf;
    const step = () => {
      pos -= 0.5;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pr-ticker-wrapper">
      <div className="pr-ticker-track" ref={trackRef}>
        {[...tickerData, ...tickerData].map((item, i) => (
          <div key={i} className="pr-ticker-item">
            <strong>{item.gmina}</strong>: {item.stat} <span className="pr-trend">{item.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
