import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { AccordionCore } from "../AccordionCoreApollo";

describe("AccordionCore", () => {
  it("Verify correct rendering with all visual properties applied", () => {
    const title = "Title";
    const children = "Content";

    render(<AccordionCore summary={title}>{children}</AccordionCore>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText("Content").closest("details")).toHaveClass(
      "af-apollo-accordion",
    );

    // test that the accordion is closed by default
    const details = screen.getByText(children).closest("details");
    expect(details).not.toHaveAttribute("open");

    // test native Accordion behavior
    const summary = screen.getByText("Title");
    summary.click();
    expect(details).toHaveAttribute("open");
    summary.click();
    expect(details).not.toHaveAttribute("open");
  });

  it("renders Accordion with open details", () => {
    render(
      <AccordionCore summary="Accordion Title" isOpen>
        This is a Content
      </AccordionCore>,
    );

    const details = screen.getByText("This is a Content").closest("details");
    expect(details).toHaveAttribute("open");
  });

  it("renders Accordion with close details", () => {
    render(
      <AccordionCore summary="Title" isOpen={false}>
        Content
      </AccordionCore>,
    );

    const details = screen.getByText("Content").closest("details");
    expect(details).not.toHaveAttribute("open");
  });

  it("use onClick prop when summary click", () => {
    const onClick = vi.fn();
    render(
      <AccordionCore summary="Title" onClick={onClick}>
        Accordion Content
      </AccordionCore>,
    );

    const summary = screen.getByText("Title");
    summary.click();
    expect(onClick).toHaveBeenCalled();

    const details = screen.getByText("Accordion Content").closest("details");
    expect(details).not.toHaveAttribute("open");
  });

  it("renders with custom title summary", () => {
    render(
      <AccordionCore summary={<p className="custom-title">Custom Title</p>}>
        Accordion Content
      </AccordionCore>,
    );

    expect(screen.getByText("Custom Title")).toHaveClass("custom-title");
  });

  it("should open accordion on keyboard Enter", async () => {
    render(
      <div data-testid="main-content">
        <AccordionCore summary="Accordion Title">
          This is a Content
        </AccordionCore>
        ,
      </div>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    const allEvents = [
      "click",
      "keyPress",
      "keyup",
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchend",
      "input",
      "change",
      "submit",
      "focus",
      "blur",
      "keypress",
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const main = screen.getByText("Accordion Title") as any;
    console.log("xxx");
    function captureAllEvents() {
      allEvents.forEach((eventType) => {
        main.addEventListener(
          eventType,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (event: any) {
            console.log(
              "Event triggered on:",
              event.target.tagName,
              "id:",
              event.target.id,
              "class:",
              event.target.className,
            );
            console.log("Key pressed:", event.code);
          },
          true, // capture phase
        );
      });
    }

    captureAllEvents();
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    const details = screen.getByText("This is a Conntent").closest("details");

    expect(details).toHaveAttribute("open");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <AccordionCore summary={<p className="custom-title">Custom Title</p>}>
        Accordion Content
      </AccordionCore>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
