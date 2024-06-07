import type { Meta, StoryObj } from "@storybook/html";
import "./List.scss";

const meta: Meta = {
  title: "Client/Components/List",
};

export default meta;

const getItem = (text: string, startIconSvg?: string, endIconSvg?: string) => {
  const item = document.createElement("li");
  item.className = "af-list__item";
  item.style.display = "flex";
  item.style.flexDirection = "row";
  item.style.alignItems = "center";
  item.style.gap = "4rem";

  const itemContent = document.createElement("div");
  itemContent.style.display = "flex";
  itemContent.style.flexDirection = "row";
  itemContent.style.alignItems = "center";
  itemContent.style.gap = "0.5rem";

  if (startIconSvg) {
    const startIcon = document.createElement("span");
    startIcon.innerHTML = startIconSvg;

    itemContent.appendChild(startIcon);
  }

  const content = document.createElement("span");
  content.textContent = text;
  itemContent.appendChild(content);

  item.appendChild(itemContent);

  if (endIconSvg) {
    const endIcon = document.createElement("span");
    endIcon.innerHTML = endIconSvg;

    item.appendChild(endIcon);
  }

  return item;
};

export const Default: StoryObj = {
  render: () => {
    const list = document.createElement("ul");

    list.className = "af-list";

    const modifyIconSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 19.9508C7.55 19.8008 6.42917 19.4424 5.3875 18.8758C4.34583 18.3091 3.44583 17.5883 2.6875 16.7133C1.92917 15.8383 1.33333 14.8299 0.9 13.6883C0.466667 12.5466 0.25 11.3174 0.25 10.0008C0.25 8.53411 0.595833 7.13411 1.2875 5.80078C1.97917 4.46745 2.90833 3.28411 4.075 2.25078H1.025V0.750781H6.75V6.47578H5.25V3.25078C4.18333 4.10078 3.33333 5.11328 2.7 6.28828C2.06667 7.46328 1.75 8.70078 1.75 10.0008C1.75 12.2008 2.41667 14.0799 3.75 15.6383C5.08333 17.1966 6.75 18.1258 8.75 18.4258V19.9508ZM8.575 14.2508L4.7 10.3758L5.75 9.32578L8.575 12.1508L14.25 6.47578L15.3 7.52578L8.575 14.2508ZM13.25 19.2508V13.5258H14.75V16.7508C15.8167 15.8841 16.6667 14.8674 17.3 13.7008C17.9333 12.5341 18.25 11.3008 18.25 10.0008C18.25 7.80078 17.5833 5.92161 16.25 4.36328C14.9167 2.80495 13.25 1.87578 11.25 1.57578V0.0507812C13.6833 0.350781 15.7083 1.42578 17.325 3.27578C18.9417 5.12578 19.75 7.36745 19.75 10.0008C19.75 11.4674 19.4042 12.8674 18.7125 14.2008C18.0208 15.5341 17.0917 16.7174 15.925 17.7508H18.975V19.2508H13.25Z" fill="#00008F"/>
</svg>`;
    const arrowIconSvg = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#00008F"/>
</svg>`;
    const deleteIconSvg = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#A11028"/>
</svg>
`;

    const modifyItem = getItem(
      "Modifier le profil",
      modifyIconSvg,
      arrowIconSvg,
    );

    const nameItem = getItem("Prénom NOM");

    const emailItem = getItem("npm.prénom@mail.fr");

    const deleteItem = getItem("Supprimer le profil", deleteIconSvg);

    list.appendChild(nameItem);
    list.appendChild(emailItem);
    list.appendChild(modifyItem);
    list.appendChild(deleteItem);

    return list;
  },
};
