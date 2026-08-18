import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function ArticleImage({ src, alt = "", className = "", loading = "lazy" }) {
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  const classes = ["pr-article-image", className].filter(Boolean).join(" ");

  if (hasError) {
    return (
      <div className={`${classes} pr-article-image-placeholder`}>
        <ImageIcon size={34} aria-hidden="true" />
        <span>Zdjęcie w przygotowaniu</span>
      </div>
    );
  }

  return (
    <div className={classes}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
