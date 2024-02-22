import type { Meta, StoryObj } from "@storybook/html";
import "./Accordion.agent.scss";

const meta: Meta = {
  title: "Agent/Components/Accordion",
};

export default meta;

const MODIFIERS = ["", "light", "arrow-right"];

export const Accordion: StoryObj = {
  render: ({ classModifier }) => {
    const accordion = document.createElement("div");
    accordion.setAttribute("role", "tablist");
    accordion.setAttribute("aria-multiselectable", "true");

    accordion.className = "af-accordion";

    if (classModifier)
      accordion.classList.add(`af-accordion--${classModifier}`);

    accordion.innerHTML = `
    <div class="af-accordion__item af-accordion__item--open">
        <div class="af-accordion__item-header" role="tab" id="headingOne">
            <h3 class="af-accordion__item-title" role="intera">
                <svg class="glyphicon glyphicon-menu-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M1.625,83.803c-0.727-0.329-1.092-1.025-1.092-2.086V65.821c0-0.86,0.295-1.622,0.893-2.28l46.785-46.79
	c0.531-0.466,1.126-0.699,1.789-0.699s1.259,0.233,1.792,0.699l46.785,46.79c0.596,0.662,0.891,1.422,0.891,2.28v15.896
	c0,1.061-0.363,1.757-1.092,2.086c-0.727,0.331-1.484,0.099-2.281-0.697l-46.09-46.092L3.914,83.105
	c-0.797,0.796-1.553,1.028-2.281,0.697H1.625z"></path>
                </svg><span class="af-accordion__item-toggle" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Socle de garantie</span>
            </h3>
        </div>
        <div class="af-accordion__collapse af-accordion__collapse--open" role="tabpanel" aria-labelledby="headingOne" id="collapseOne">
            <div class="af-accordion__block">
                <ul class="af-check__list">
                    <li class="af-check__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="af-accordion__item">
        <div class="af-accordion__item-header" role="tab" id="headingTwo">
            <h3 class="af-accordion__item-title" role="intera">
                <svg class="glyphicon glyphicon-menu-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M98.4,16.2c0.7,0.3,1.1,1,1.1,2.1v15.9c0,0.9-0.3,1.6-0.9,2.3L51.8,83.2c-0.5,0.5-1.1,0.7-1.8,0.7
	s-1.3-0.2-1.8-0.7L1.4,36.5c-0.6-0.7-0.9-1.4-0.9-2.3V18.3c0-1.1,0.4-1.8,1.1-2.1c0.7-0.3,1.5-0.1,2.3,0.7L50,63l46.1-46.1
	C96.9,16.1,97.6,15.9,98.4,16.2L98.4,16.2z"></path>
                </svg><span class="af-accordion__item-toggle" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Socle de garantie 2</span>
            </h3>
        </div>
        <div class="af-accordion__collapse" role="tabpanel" aria-labelledby="headingTwo" id="collapseTwo">
            <div class="af-accordion__block">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
    <div class="af-accordion__item">
        <div class="af-accordion__item-header" role="tab" id="headingThree">
            <h3 class="af-accordion__item-title" role="intera">
                <svg class="glyphicon glyphicon-menu-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M98.4,16.2c0.7,0.3,1.1,1,1.1,2.1v15.9c0,0.9-0.3,1.6-0.9,2.3L51.8,83.2c-0.5,0.5-1.1,0.7-1.8,0.7
	s-1.3-0.2-1.8-0.7L1.4,36.5c-0.6-0.7-0.9-1.4-0.9-2.3V18.3c0-1.1,0.4-1.8,1.1-2.1c0.7-0.3,1.5-0.1,2.3,0.7L50,63l46.1-46.1
	C96.9,16.1,97.6,15.9,98.4,16.2L98.4,16.2z"></path>
                </svg><span class="af-accordion__item-toggle" data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Socle de garantie 3</span>
            </h3>
        </div>
        <div class="af-accordion__collapse" role="tabpanel" aria-labelledby="headingThree" id="collapseThree">
            <div class="af-accordion__block">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>`;

    return accordion;
  },
  args: {
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};
