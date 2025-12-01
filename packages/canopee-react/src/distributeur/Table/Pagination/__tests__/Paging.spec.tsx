import { render } from "@testing-library/react";
import { Paging } from "../Paging";

describe("<Paging>", () => {
  it("renders Paging with specific labels correctly", () => {
    const { asFragment } = render(
      <Paging
        currentPage={2}
        elementsLabel="sinistres"
        items={[5, 10]}
        selectPageSizeLabel="Nombre de sinistres à afficher"
        numberPages={10}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
