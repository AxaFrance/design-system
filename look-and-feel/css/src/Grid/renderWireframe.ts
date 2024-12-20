import { div, h3, p, h1, h2, plorem, grid } from "../utils";
import { MAX_OFFSET, renderDebugGrid } from "./renderDebugGrid";

export function card({
  title = "title",
  content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus
    dolor ratione, ab natus reprehenderit itaque corporis officia ad
    necessitatibus enim et voluptatem reiciendis rem optio laudantium iure esse
    vero.`,
  className = "box-card",
}: {
  title?: string;
  content?: string;
  className?: string;
}): HTMLElement {
  const cardTitle = h3([title]);
  const cardContent = p([content]);
  const cardElement = div([cardTitle, cardContent], { class: className });

  return cardElement;
}

const renderOffsetsExamples = () =>
  [...Array(MAX_OFFSET).keys()].map((start) => {
    const offset = start + 1;
    const maxCols = MAX_OFFSET - offset + 1;
    return [...Array(maxCols).keys()].map((col) =>
      div([], {
        class: `box box-offset box-offset-${offset}-${col + 1}`,
      }),
    );
  });

export const render = () => {
  const mainTitle = h1(["Bonjour, Samuel G."], { class: "box" });

  const titleEx1 = h2(["Mes contrats"], { class: "box" });
  const contractsList = [0, 1, 2, 4].map((_, i) =>
    card({ title: `contrat ${i + 1}` }),
  );
  const ex1 = div([titleEx1, ...contractsList], {
    class: "box box-example-1 subgrid",
  });

  const titleEx2 = h2(["Profil"], { class: "box" });
  const card2 = card({ title: "Mes coordonnées" });
  const ex2 = div([titleEx2, card2], {
    class: "box box-example-2 subgrid",
  });

  const titleEx3 = h2(["Mes infos"], { class: "box" });
  const infosList = [0, 1, 2, 4].map(() => div([], { class: "box box-half" }));
  const ex3 = div([titleEx3, ...infosList], {
    class: "box box-example-3 subgrid",
  });

  const titleEx4 = h2(["Custom (no follow grid system)"], { class: "box" });
  const customList = [0, 1].map((_, i) =>
    div([plorem()], { class: `box box-content${i + 1}` }),
  );
  const ex4 = div([titleEx4, ...customList], {
    class: "box box-custom",
  });

  const gridContainer = grid({
    children: [
      mainTitle,
      ex1,
      ex2,
      ex3,
      ex4,
      ...renderOffsetsExamples().flat(),
    ],
  });

  const demo = div([...renderDebugGrid(), gridContainer]);

  return demo;
};
