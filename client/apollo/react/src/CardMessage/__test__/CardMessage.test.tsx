import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  CardMessage,
  cardMessageVariants,
  type CardMessageVariants,
} from "../CardMessageCommon";

describe("CardMessage component", () => {
  it.each(Object.keys(cardMessageVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(
        <CardMessage
          aria-label="test"
          text="This is a test"
          variant={variant as CardMessageVariants}
        />,
      );
      const container = screen.getByLabelText("test");
      expect(container).toHaveClass(`af-card-message--${variant}`);
    },
  );
});
