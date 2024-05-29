import { useId, useState } from "react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="af-accordion-client__item">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`accordion-section-${id}`}
          id={`accordion-title-${id}`}
          onClick={onClick}
        >
          {title}
        </button>
      </h3>
      <div
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        id={`accordion-section-${id}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};
