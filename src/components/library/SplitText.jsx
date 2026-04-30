import { useEffect, useRef, useState } from "react";
import "./splittext.css";

const SplitText = ({
  text = "",
  as: Tag = "span",
  split = "words",
  className = "",
  delayStart = 0,

  // tambahan
  stagger = 0.05,
  duration = 0.7,
  animation = "fadeUp",

  // 🔥 NEW: mode kontrol
  instant = false, // true = semua muncul bareng
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = split === "words" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref} className={className}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`split-item ${inView ? `animate-${animation}` : ""}`}
          style={{
            animationDelay: inView
              ? instant
                ? `${delayStart}s` // 🔥 semua sama
                : `${delayStart + index * stagger}s`
              : "0s",
            animationDuration: `${duration}s`,
          }}
        >
          {split === "words" ? item + "\u00A0" : item === " " ? "\u00A0" : item}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
