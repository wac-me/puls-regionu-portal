import { ArrowUpRight } from "lucide-react";

export default function PillarGrid({ filary, active, setActive, filarGradient }) {
  return (
    <div className="pr-filary-strip">
      {(filary || []).map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.id}
            className={`pr-filar-tab ${active === f.id ? "is-active" : ""}`}
            style={{ background: active === f.id ? f.tint : "transparent" }}
            onClick={() => setActive(f.id)}
          >
            <div className="pr-ficon" style={{ background: filarGradient(f.color) }}>
              {Icon ? <Icon size={16} color="#16586b" /> : null}
            </div>
            <div className="pr-flabel">{f.label}</div>
            <div className="pr-flead">{f.lead}</div>
          </div>
        );
      })}
    </div>
  );
}
