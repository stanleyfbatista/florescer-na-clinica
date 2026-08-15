"use client";

import { useId, useState } from "react";

type FaqItemProps = { question: string; answer: string };

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <article className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{question}</span><span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={answerId} className="faq-answer" hidden={!open}><p>{answer}</p></div>
    </article>
  );
}

