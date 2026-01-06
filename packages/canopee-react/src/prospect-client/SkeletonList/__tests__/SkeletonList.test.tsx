import { render, screen } from "@testing-library/react";
import { SkeletonListCommon } from "../SkeletonListCommon";
import { Skeleton } from "../../Skeleton/SkeletonCommon";
import { CardCommon as Card } from "../../Card/CardCommon";
import { ListCommon as List, type ListProps } from "../../List/List/ListCommon";

const defaultProps = {
  SkeletonComponent: Skeleton,
  ListComponent: (props: ListProps) => <List CardComponent={Card} {...props} />,
  lists: [{ grid: [[3, 9]], lines: 10 }],
};

describe("SkeletonList", () => {
  it("should display loaders if is fetching", () => {
    render(
      <SkeletonListCommon {...defaultProps} isLoading>
        <div>Chargement terminé</div>
      </SkeletonListCommon>,
    );

    const skeletons = screen.getAllByRole("status");
    expect(skeletons.length).toEqual(10);
    expect(skeletons[0]).toHaveAccessibleName("Chargement");
    expect(skeletons[0]).toHaveClass("af-skeleton-container");
    expect(screen.queryByText("Chargement terminé")).not.toBeInTheDocument();
  });

  it("should display component if not loading and not error", () => {
    render(
      <SkeletonListCommon {...defaultProps} isLoading={false}>
        <div>Chargement terminé</div>
      </SkeletonListCommon>,
    );
    const skeletons = screen.queryAllByRole("status");
    expect(skeletons.length).toEqual(0);
    expect(screen.getByText("Chargement terminé")).toBeInTheDocument();
  });
});
