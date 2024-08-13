import type { Meta, StoryObj } from "@storybook/html";
import "./Pagination.client.scss";
import "./PaginationDesktop.client.scss";
import "./PaginationMobile.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Pagination",
};

export default meta;

const TYPE_ECRAN = ["desktop", "mobile"];

export const Pagination: StoryObj = {
  render: (args) => {
    const div = document.createElement("div");
    div.className = "af-container-pagination";
    if (args.typeEcran === TYPE_ECRAN[0]) {
      const divDesktop = document.createElement("div");
      divDesktop.className = "af-pagination-desktop";
      const ul = document.createElement("ul");
      if (args.nbPage > 7) {
        if (args.pageSelect < 5) {
          ul.className = "first";

          for (let page = 1; page <= 5; page++) {
            const li = document.createElement("li");
            li.ariaLabel = `page-${page}`;
            li.innerHTML = `<button type="button">${page}</button>`;
            if (args.pageSelect === page) {
              li.ariaCurrent = "page";
            }
            ul.appendChild(li);
          }
          const liMax = document.createElement("li");
          liMax.ariaLabel = `page-${args.nbPage}`;
          liMax.innerHTML = `<button type="button">${args.nbPage}</button>`;

          ul.appendChild(liMax);
          divDesktop.appendChild(ul);
          div.appendChild(divDesktop);
          return div;
        }
        if (args.pageSelect > args.nbPage - 4) {
          ul.className = "last";

          const liMin = document.createElement("li");
          liMin.ariaLabel = `page-1`;
          liMin.innerHTML = `<button type="button">1</button>`;
          ul.appendChild(liMin);

          for (let page = args.nbPage - 4; page <= args.nbPage; page++) {
            const li = document.createElement("li");
            li.ariaLabel = `page-${page}`;
            li.innerHTML = `<button type="button">${page}</button>`;
            if (args.pageSelect === page) {
              li.ariaCurrent = "page";
            }
            ul.appendChild(li);
          }

          divDesktop.appendChild(ul);
          div.appendChild(divDesktop);
          return div;
        }
        ul.className = "between";
        const liMin = document.createElement("li");
        liMin.ariaLabel = `page-1`;
        liMin.innerHTML = `<button type="button">1</button>`;
        ul.appendChild(liMin);
        for (
          let page = args.pageSelect - 1;
          page <= args.pageSelect + 1;
          page++
        ) {
          const li = document.createElement("li");
          li.ariaLabel = `page-${page}`;
          li.innerHTML = `<button type="button">${page}</button>`;
          if (args.pageSelect === page) {
            li.ariaCurrent = "page";
          }
          ul.appendChild(li);
        }

        const liMax = document.createElement("li");
        liMax.ariaLabel = `page-${args.nbPage}`;
        liMax.innerHTML = `<button type="button">${args.nbPage}</button>`;

        ul.appendChild(liMax);
        divDesktop.appendChild(ul);
        div.appendChild(divDesktop);
        return div;
      }
      for (let page = 1; page <= args.nbPage; page++) {
        const li = document.createElement("li");
        li.ariaLabel = `page-${page}`;
        li.innerHTML = `<button type="button">${page}</button>`;
        if (args.pageSelect === page) {
          li.ariaCurrent = "page";
        }
        ul.appendChild(li);
        divDesktop.appendChild(ul);
        div.appendChild(divDesktop);
      }
      return div;
    }
    div.innerHTML = `
    <div class="af-pagination-mobile">
      <button type="button" aria-label="Page précédente" ${args.pageSelect === 1 && "disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-left"></i>
      </button>
      <span>${args.pageSelect} sur ${args.nbPage}</span>
      <button type="button" aria-label="Page suivant" ${args.pageSelect === args.nbPage && "disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-right"></i>
      </button>
    </div>
    `;

    return div;
  },
  args: {
    typeEcran: "desktop",
    nbPage: 20,
    pageSelect: 1,
  },
  argTypes: {
    typeEcran: {
      options: TYPE_ECRAN,
      control: { type: "select" },
    },
    nbPage: {
      control: { type: "number" },
    },
    pageSelect: {
      control: { type: "number" },
    },
  },
};
