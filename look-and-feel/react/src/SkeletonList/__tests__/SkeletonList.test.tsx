import { render, screen } from "@testing-library/react";
import { SkeletonList } from "../SkeletonList";

const defaultProps = {
  lists: [{ grid: [[3, 9]], lines: 10 }],
};

describe("SkeletonList", () => {
  it("should display loaders if is fetching", () => {
    render(
      <SkeletonList {...defaultProps} isLoading>
        <div>Chargement terminé</div>
      </SkeletonList>,
    );

    const skeletons = screen.getAllByRole("status");
    expect(skeletons.length).toEqual(10);
    expect(skeletons[0]).toHaveAccessibleName();
    expect(skeletons[0]).toHaveClass("af-skeleton-container");
  });

  it("should display component if not loading and not error", () => {
    render(
      <SkeletonList {...defaultProps} isLoading={false}>
        <div>Chargement terminé</div>
      </SkeletonList>,
    );

    expect(screen.getByText("Chargement terminé")).toBeInTheDocument();
  });
});
