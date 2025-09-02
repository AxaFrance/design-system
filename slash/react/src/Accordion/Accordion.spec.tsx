import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Accordion } from "./Accordion";
import { CollapseCard } from "./CollapseCard";

describe("Accordion", () => {
  test("is closed by default", () => {
    render(
      <Accordion>
        <CollapseCard id="1" title="My title">
          My collapse content
        </CollapseCard>
      </Accordion>,
    );

    expect(screen.getByText("My collapse content")).not.toBeVisible();
    expect(screen.getByText("My title")).toBeVisible();
  });

  test("toggles when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <CollapseCard id="1" title="My title">
          My collapse content
        </CollapseCard>
        <CollapseCard id="2" title="My closed title" open>
          My closed collapse content
        </CollapseCard>
      </Accordion>,
    );

    await user.click(screen.getByText("My title"));
    await user.click(screen.getByText("My closed title"));

    expect(screen.getByText("My collapse content")).toBeVisible();
    expect(screen.getByText("My closed collapse content")).not.toBeVisible();
  });

  test("forced open by default", async () => {
    render(
      <Accordion>
        <CollapseCard id="1" title="My title" open>
          My collapse content
        </CollapseCard>
        <CollapseCard id="2" title="My second title" open>
          My second collapse content
        </CollapseCard>
      </Accordion>,
    );

    expect(screen.getByText("My collapse content")).toBeVisible();
    expect(screen.getByText("My second collapse content")).toBeVisible();
  });

  describe("onlyOne", () => {
    test("by default all open panes are open until the user interacts", () => {
      render(
        <Accordion onlyOne>
          <CollapseCard id="1" title="My title" open>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title" open>
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );

      expect(screen.getByText("My collapse content")).toBeVisible();
      expect(screen.getByText("My second collapse content")).toBeVisible();
    });

    /**
     * This test is a bit tricky because it's testing the behavior of the browser
     * JSDom doesnt seem to handle having a name on the details element and toggling the open attribute
     * of the other panes
     */
    test("should add the same name to all details elements when `onlyOne` is true", async () => {
      render(
        <Accordion onlyOne>
          <CollapseCard id="1" title="My title" open>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title" open>
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );

      const groups = screen.getAllByRole("group");
      const firstName = groups[0].getAttribute("name");
      for (const element of groups) {
        expect(element).toHaveAttribute("name", firstName);
      }
    });

    test("should not add a name to  details elements when `onlyOne` is false", async () => {
      render(
        <Accordion onlyOne={false}>
          <CollapseCard id="1" title="My title" open>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title" open>
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );

      const groups = screen.getAllByRole("group");
      for (const element of groups) {
        expect(element).not.toHaveAttribute("name");
      }
    });
  });

  describe("action", () => {
    const action1 = vi.fn();
    const action2 = vi.fn();
    const actions = [
      {
        key: "action-1",
        label: "Action 1",
        onClick: action1,
      },
      {
        key: "action-2",
        label: "Action 2",
        onClick: action2,
      },
    ] as const;
    test("renders action buttons", () => {
      render(
        <Accordion>
          <CollapseCard id="1" title="My title" actions={actions}>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title">
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );

      expect(screen.getByRole("button", { name: /action 1/i })).toBeVisible();
      expect(screen.getByRole("button", { name: /action 2/i })).toBeVisible();
    });

    test("action is clickable", async () => {
      render(
        <Accordion>
          <CollapseCard id="1" title="My title" actions={actions}>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title">
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );

      await userEvent.click(screen.getByRole("button", { name: /action 1/i }));
      expect(action1).toHaveBeenCalled();

      await userEvent.click(screen.getByRole("button", { name: /action 2/i }));
      expect(action2).toHaveBeenCalled();
    });
  });
  describe("light mode", () => {
    test("the light mode should display the correct elements", () => {
      render(
        <Accordion classModifier="lighter">
          <CollapseCard id="1" title="My title" open>
            My collapse content
          </CollapseCard>
          <CollapseCard id="2" title="My second title" open>
            My second collapse content
          </CollapseCard>
        </Accordion>,
      );
      expect(screen.getByText("My collapse content")).toBeVisible();
      expect(screen.getByText("My title")).toBeVisible();
      expect(screen.getByText("My second collapse content")).toBeVisible();
      expect(screen.getByText("My second title")).toBeVisible();
    });
  });
});
