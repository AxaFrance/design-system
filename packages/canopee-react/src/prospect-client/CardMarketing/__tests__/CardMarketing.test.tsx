import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CardMarketing as ProspectCardMarketing } from "../CardMarketingApollo";
import { CardMarketing as ClientCardMarketing } from "../CardMarketingLF";

describe.each([
  ["Prospect", ProspectCardMarketing],
  ["Client", ClientCardMarketing],
] as const)("CardMarketing %s", (_, CardMarketing) => {
  const props = {
    image: { src: "/offer.jpg", alt: "Our insurance offer" },
    title: "Insurance",
    text: "Cover tailored to your needs.",
    linkProps: { href: "/offer", children: "Discover the offer" },
  };

  it("renders a Card with the default vertical layout and a Link", () => {
    render(<CardMarketing {...props} data-testid="card" />);

    expect(screen.getByTestId("card")).toHaveClass(
      "af-card",
      "af-card-marketing",
      "af-card-marketing--vertical",
    );
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.text)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Discover the offer" }),
    ).toHaveAttribute("href", "/offer");
    expect(screen.getByRole("img", { name: props.image.alt })).toHaveAttribute(
      "src",
      props.image.src,
    );
  });

  it("renders React nodes for the title and description", () => {
    render(
      <CardMarketing
        {...props}
        title={
          <span>
            Offer <strong>title</strong>
          </span>
        }
        text={
          <span>
            More <em>details</em>
          </span>
        }
      />,
    );

    expect(screen.getByText("title").tagName).toBe("STRONG");
    expect(screen.getByText("details").tagName).toBe("EM");
  });

  it("forwards root props and merges classes without duplicates", () => {
    const ref = createRef<HTMLDivElement>();
    const onClick = vi.fn();
    render(
      <CardMarketing
        {...props}
        ref={ref}
        id="offer"
        variant="horizontal"
        className="custom af-card-marketing"
        style={{ opacity: 0.8 }}
        onClick={onClick}
        data-testid="card"
      />,
    );

    const card = screen.getByTestId("card");
    expect(ref.current).toBe(card);
    expect(card).toHaveAttribute("id", "offer");
    expect(card).toHaveClass("custom", "af-card-marketing--horizontal");
    expect(
      card.className.split(" ").filter((name) => name === "af-card-marketing"),
    ).toHaveLength(1);
    expect(card).toHaveStyle({ opacity: "0.8" });
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders picture sources and preserves responsive image attributes", () => {
    render(
      <CardMarketing
        {...props}
        image={{ ...props.image, srcSet: "/offer-2x.jpg 2x", sizes: "50vw" }}
        sources={[
          { srcSet: "/offer.avif", type: "image/avif" },
          {
            srcSet: "/offer.webp",
            type: "image/webp",
            media: "(min-width: 768px)",
          },
        ]}
      />,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("srcset", "/offer-2x.jpg 2x");
    expect(image).toHaveAttribute("sizes", "50vw");
    const sources = image.parentElement?.querySelectorAll("source");
    expect(sources).toHaveLength(2);
    expect(sources?.[0]).toHaveAttribute("type", "image/avif");
    expect(sources?.[1]).toHaveAttribute("media", "(min-width: 768px)");
  });

  it("preserves custom link properties and new tab behavior", () => {
    render(
      <CardMarketing
        {...props}
        linkProps={{
          ...props.linkProps,
          openInNewTab: true,
          className: "custom-link",
        }}
      />,
    );

    const link = screen.getByRole("link", { name: /Discover the offer/ });
    expect(link).toHaveClass("af-link", "custom-link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
