import type { ReactNode } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

export type ExperimentalRestitutionHeaderProps = {
  /**
   * The title of the restitution, which will be displayed in the header. This prop is required and should be a ReactNode, allowing for flexibility in the content that can be displayed as the title (e.g., string, JSX elements, etc.).
   * If this prop is not provided, the header will not be displayed, and the restitution will only consist of its content without a header section.
   */
  title: ReactNode;

  /** An optional subtitle to provide additional context or information about the restitution. It is displayed below the title in a smaller font size. */
  subtitle?: ReactNode;
  /**
   * An optional element to display on the right side of the header. It can be used for actions, links, or any other content that complements the title and subtitle.
   */
  rightElement?: React.ReactNode;
};

type ExperimentalRestitutionHeaderPropsWithId =
  ExperimentalRestitutionHeaderProps & {
    id: string;
  } & React.ComponentProps<"div">;

export const ExperimentalRestitutionHeader = ({
  title,
  rightElement,
  subtitle,
  id,
  className,
  ...props
}: ExperimentalRestitutionHeaderPropsWithId) => {
  const componentClassName = getClassName({
    baseClassName: "experimental-af-restitution__header",
    className,
  });

  return (
    <div className={componentClassName} {...props}>
      <header className="experimental-af-restitution__header-left" id={id}>
        <h3 className="experimental-af-restitution__title">{title}</h3>
        {subtitle ? (
          <p className="experimental-af-restitution__subtitle">{subtitle}</p>
        ) : null}
      </header>
      {rightElement ? (
        <div className="experimental-af-restitution__header-right">
          {rightElement}
        </div>
      ) : null}
    </div>
  );
};
