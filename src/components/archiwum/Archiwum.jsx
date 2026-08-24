import { Download, Calendar } from "lucide-react";

const PDF_FILES = [
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2026/02/Puls-153TV.pdf",
    title: "Puls Regionu 153",
    date: "Luty 2026",
    number: 153
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2024/12/Puls-Regionu152_TV.pdf",
    title: "Puls Regionu 152",
    date: "Grudzień 2024",
    number: 152
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2023/12/Puls-Regionu-151_TV.pdf",
    title: "Puls Regionu 151",
    date: "Grudzień 2023",
    number: 151
  },
  {
    url: "Puls-Regionu-150.pdf",
    title: "Puls Regionu 150",
    date: "Czerwiec 2023",
    number: 150
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-149TV.pdf",
    title: "Puls Regionu 149",
    date: "Styczeń 2023",
    number: 149
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-148TV.pdf",
    title: "Puls Regionu 148",
    date: "Styczeń 2023",
    number: 148
  },
  {
    url: "Puls-Regionu-147.pdf",
    title: "Puls Regionu 147",
    date: "Październik 2021 r.",
    number: 147
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2021/08/PulsTV146.pdf",
    title: "Puls Regionu 146",
    date: "Sierpień 2021",
    number: 146
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2020/12/Puls-Regionu-145TV.pdf",
    title: "Puls Regionu 145",
    date: "Grudzień 2020",
    number: 145
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2020/10/Puls-Regionu-144-TV.pdf",
    title: "Puls Regionu 144",
    date: "Październik 2020",
    number: 144
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2019/12/Puls-Regionu-143TV.pdf",
    title: "Puls Regionu 143",
    date: "Grudzień 2019",
    number: 143
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2019/10/Puls-Regionu-142.pdf",
    title: "Puls Regionu 142",
    date: "Październik 2019",
    number: 142
  },
  {
    url: "http://www.warmiamazury.tv/wp-content/uploads/2019/07/Puls-Regionu-141_TV.pdf",
    title: "Puls Regionu 141",
    date: "Lipiec 2019",
    number: 141
  },
];

export default function Archiwum() {
  return (
    <section className="pr-section">
      <div className="pr-section-head pr-page-section-head">
        <div className="pr-section-title pr-page-section-title">
          <h1 className="pr-serif pr-page-title">ARCHIWUM</h1>
          <span className="pr-page-separator" aria-hidden="true">|</span>
          <p className="pr-serif pr-page-subtitle">
            Wszystkie numery "Puls Regionu" dostępne do pobrania w formacie PDF
          </p>
        </div>
      </div>

      <div className="pr-archive-grid">
        {PDF_FILES.map((pdf) => (
          <a
            key={pdf.number}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-archive-item"
          >
            <div className="pr-archive-icon">
              <Download size={24} />
            </div>
            <div className="pr-archive-content">
              <h3 className="pr-archive-title">{pdf.title}</h3>
              <div className="pr-archive-meta">
                <span className="pr-archive-date">
                  <Calendar size={14} />
                  {pdf.date}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
