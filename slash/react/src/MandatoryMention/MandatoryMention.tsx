import "@axa-fr/design-system-slash-css/dist/MandatoryMention/MandatoryMention.css";

const variantTexts = {
  all: "Tous les champs sont obligatoires",
  one: "Champs obligatoires *",
} as const;

type MandatoryVariant = keyof typeof variantTexts;

type TMandatoryMentionProps = {
  variant: MandatoryVariant;
  id?: string;
};

const MandatoryMention = ({ variant, id }: TMandatoryMentionProps) => {
  const text = variantTexts[variant];

  return (
    <p id={id} className={`af-mandatory--${variant}`}>
      {text}
    </p>
  );
};

export { MandatoryMention };
