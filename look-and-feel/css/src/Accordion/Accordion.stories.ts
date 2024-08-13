import type { Meta, StoryObj } from "@storybook/html";
import "./Accordion.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Accordion",
};

export default meta;

export const Accordion: StoryObj = {
  render: ({ numberOfItems, activeItem }) => {
    let items = "";
    for (let i = 1; i <= numberOfItems; i++) {
      items += `
        <div class="af-accordion-client__item">
          <h3>
            <button type="button" aria-expanded="${activeItem === i}" aria-controls="accordion-section-${i}" id="accordion-title-${i}">
              Title ${i}
            </button>
          </h3>
          <div role="region" aria-labelledby="accordion-title-${i}" id="accordion-section-${i}" ${activeItem !== i ? "hidden" : ""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra tincidunt libero sed rhoncus. Nulla ut mattis eros, sit amet ornare magna. Integer leo lorem, porta ut mattis at, dapibus commodo justo. Fusce et lacinia est. Cras mattis ut velit in fringilla. Praesent bibendum, erat ut efficitur viverra, tortor velit laoreet odio, eget rhoncus nulla massa eget arcu. Etiam sollicitudin nulla in nulla porttitor ullamcorper. Suspendisse potenti. Nulla faucibus varius arcu sit amet ultricies. Sed et rhoncus enim, vel elementum sapien.
          </div>
        </div>
      `;
    }

    return `
      <div class="af-accordion-client">
        ${items}
      </div>
    `;
  },

  args: {
    numberOfItems: 3,
    activeItem: 1,
  },
  argTypes: {
    numberOfItems: {
      control: { type: "range", min: 1, max: 10 },
    },
    activeItem: {
      control: { type: "number", min: 1, max: 10 },
    },
  },
};
