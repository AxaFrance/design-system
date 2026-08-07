import { Skeleton } from "../../Skeleton/Skeleton";

/**
 * Props controlling which placeholder areas are displayed in `ExitLayoutSkeleton`.
 */
export type ExitLayoutSkeletonProps = {
  hasAgent?: boolean;
  hasIcon?: boolean;
  hasAction?: boolean;
  hasContent?: boolean;
  hasHeading?: boolean;
};

/**
 * Renders skeleton placeholders matching the visual structure of `ExitLayout`.
 *
 * @component
 * @param {ExitLayoutSkeletonProps} props - ExitLayoutSkeleton props.
 * @param {boolean} [props.hasAgent] - Displays the agent placeholder block.
 * @param {boolean} [props.hasIcon] - Displays the icon placeholder.
 * @param {boolean} [props.hasAction] - Displays the action area placeholder.
 * @param {boolean} [props.hasContent] - Displays the main content placeholder.
 * @param {boolean} [props.hasHeading] - Displays the heading placeholder.
 * @returns {JSX.Element} The rendered ExitLayoutSkeleton component.
 */
export const ExitLayoutSkeleton = ({
  hasAgent,
  hasIcon,
  hasAction,
  hasContent,
  hasHeading,
}: ExitLayoutSkeletonProps) => {
  return (
    <section className="af-exit-page subgrid">
      <article className="af-exit-page__content subgrid">
        {hasIcon ? <Skeleton variant="circle" size="L" /> : null}

        {hasHeading ? <Skeleton colSize={12} /> : null}

        {hasContent ? <Skeleton size="XL" colSize={12} /> : null}
      </article>
      {hasAgent ? (
        <Skeleton className="af-exit-page__agent" size="XXL" colSize={12} />
      ) : null}
      {hasAction ? (
        <div className="af-exit-page__actions subgrid">
          <Skeleton variant="action" colSize={12} />
        </div>
      ) : null}
    </section>
  );
};
