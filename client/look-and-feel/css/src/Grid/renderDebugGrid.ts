import { div, label, checkbox, svg } from "../utils";

export const MAX_OFFSET = 12;

const renderLabelDebugGrid = () => {
  const svgUnchecked = svg({
    class: "af-checkbox__unchecked",
    path: "M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2",
  });
  const svgChecked = svg({
    class: "af-checkbox__checked",
    path: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z",
  });
  const checkboxElement = checkbox({
    name: "debuggrid",
    id: "debuggrid",
    checked: "true",
  });

  const iconContainer = div([svgUnchecked, svgChecked], {
    class: "af-checkbox__icons",
  });

  return label([checkboxElement, iconContainer, "Grid"]);
};

export const renderDebugGrid = () => {
  const debugColsGrid = [...Array(MAX_OFFSET).keys()].map(() =>
    div([], { class: "cols" }),
  );
  const debugGrid = div(
    [
      div([...debugColsGrid], {
        class: "grid",
      }),
    ],
    { class: "debug-grid" },
  );

  const labelDebugGrid = renderLabelDebugGrid();

  const toggleDebugGrid = div([], {
    class: "af-checkbox af-checkbox-select af-checkbox-select--debuggrid",
  });

  toggleDebugGrid.innerHTML = `${labelDebugGrid.outerHTML}`;

  return [toggleDebugGrid, debugGrid];
};
