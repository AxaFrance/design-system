import { useId, type ComponentProps, type ReactNode } from "react";
import arrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import "@axa-fr/canopee-css/prospect/CardMarketing/CardMarketingAll.css";
import type { CardCommon, CardCommonProps } from "../Card/CardCommon";
import type { Icon } from "../Icon/IconCommon";
import type { Link, LinkProps } from "../Link/LinkCommon";
import { getClassName } from "../utilities/getClassName";

const DEFAULT_CLASS_NAME = "af-card-marketing";

export type CardMarketingProps = Omit<
  CardCommonProps<"div">,
  "children" | "title" | "variant"
> & {
  /** Fallback image and native image attributes. Use an empty alt for decorative images. */
  image: Omit<ComponentProps<"img">, "src" | "alt" | "className"> & {
    src: string;
    alt: string;
  };
  /** Responsive picture sources, ordered from most preferred to fallback. */
  sources?: ComponentProps<"source">[];
  /** Title displayed above the description. */
  title: ReactNode;
  /** Description displayed between the title and link. */
  text: ReactNode;
  /** Link destination and native attributes. Its accessible name combines title and label unless `aria-label` is provided. */
  linkProps: LinkProps & { href: string; children: ReactNode };
  /** Image above the content by default; horizontal places it on the left on desktop. */
  variant?: "vertical" | "horizontal";
};

type CardMarketingCommonProps = CardMarketingProps & {
  CardComponent: typeof CardCommon;
  LinkComponent: typeof Link;
  IconComponent: typeof Icon;
};

export const CardMarketingCommon = ({
  image,
  sources = [],
  title,
  text,
  linkProps,
  variant = "vertical",
  className,
  CardComponent,
  LinkComponent,
  IconComponent,
  ...cardProps
}: CardMarketingCommonProps) => {
  const titleId = useId();
  const linkLabelId = useId();
  const linkLabelledBy = linkProps["aria-label"]
    ? linkProps["aria-labelledby"]
    : [linkProps["aria-labelledby"], titleId, linkLabelId]
        .filter(Boolean)
        .join(" ");

  return (
    <CardComponent
      {...cardProps}
      className={getClassName({
        baseClassName: DEFAULT_CLASS_NAME,
        modifiers: [variant],
        className,
      })}
    >
      <picture className={`${DEFAULT_CLASS_NAME}__picture`}>
        {sources.map((source) => (
          <source
            key={`${source.media ?? ""}-${source.type ?? ""}-${source.srcSet}`}
            {...source}
          />
        ))}
        <img
          {...image}
          alt={image.alt}
          className={`${DEFAULT_CLASS_NAME}__image`}
        />
      </picture>
      <div className={`${DEFAULT_CLASS_NAME}__content`}>
        <strong id={titleId} className={`${DEFAULT_CLASS_NAME}__title`}>
          {title}
        </strong>
        <div className={`${DEFAULT_CLASS_NAME}__text`}>{text}</div>
        <LinkComponent
          rightIcon={<IconComponent src={arrowForward} size="S" />}
          {...linkProps}
          aria-labelledby={linkLabelledBy}
        >
          <span id={linkLabelId}>{linkProps.children}</span>
        </LinkComponent>
      </div>
    </CardComponent>
  );
};
