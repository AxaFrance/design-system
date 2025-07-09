import closeSmall from "@material-symbols/svg-400/outlined/close.svg";
import type { HTMLAttributes, JSX, MouseEvent, KeyboardEvent } from "react";
import { Button } from "../../Button/Button";
import { Svg } from "../../Svg";
import type { TitleLevel } from "../../Title";

export type ModalCoreHeaderProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title: string;
  subtitle?: string;
  iconTitle?: string;
  levelTitle?: TitleLevel;
  onCancel: (event: MouseEvent | KeyboardEvent) => void;
  closeButtonAriaLabel?: string;
};

/** @deprecated Use ModalCoreHeader from \@axa-fr/design-system-apollo-react/lf instead */
export const ModalCoreHeader = ({
  className,
  title,
  subtitle,
  iconTitle,
  levelTitle = 2,
  onCancel,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  ...props
}: ModalCoreHeaderProps) => {
  const HLevel = `h${levelTitle}` as keyof JSX.IntrinsicElements;
  return (
    <header
      className={["af-modal__header", className].filter(Boolean).join(" ")}
      {...props}
    >
      <Button
        variant="ghost"
        iconLeft={
          <Svg
            src={closeSmall}
            width={32}
            height={32}
            role="graphics-document"
          />
        }
        aria-label={closeButtonAriaLabel}
        onClick={onCancel}
      />
      <div className="af-modal__header-title">
        {iconTitle ? (
          <Svg
            src={iconTitle}
            width={32}
            height={32}
            role="graphics-document"
          />
        ) : null}
        <HLevel className="af-modal__header-title-heading">{title}</HLevel>
        {subtitle ? (
          <span className="af-modal__header-title-subtitle">{subtitle}</span>
        ) : null}
      </div>
    </header>
  );
};
