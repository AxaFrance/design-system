import type { Meta, StoryObj } from "@storybook/html";
import "../Button/Button.agent.scss";
import "./Pager.agent.scss";
import "./Paging.agent.scss";
import "./Table.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Table",
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<table class="af-table">
    <thead class="af-table__thead">
    
        <tr class="af-table__tr">
            <th class="af-table__th" colspan="4">
                <span class="af-table__th-content">
                    Contrat
                </span>
            </th>
            <th class="af-table__th" colspan="4">
                <span class="af-table__th-content">
                    Dossier
                </span>
            </th>
        </tr>
        <tr class="af-table__tr">
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting af-btn--table-sorting--active" role="button"><span>N° de contrat</span>
                        <svg class="glyphicon glyphicon-arrow-xs-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M86.799 36.75h-73.299l36.654 35.636 36.645-35.636z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">N° de dossier
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">N° de demande
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">Site
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">Date de mise à jour
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">Décision
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th af-table__th--sortable"><span class="af-table__th-content">
                    <button class="af-btn af-btn--table-sorting" role="button">Statut du dossier
                        <svg class="glyphicon glyphicon-sorting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M87.477 42.738H12.523L50 5.262zM12.523 59.262h74.954L50 96.738z"></path>
                        </svg>
                    </button></span></th>
            <th class="af-table__th"><span class="af-table__th-content">Action</span></th>
        </tr>
    </thead>
    <tbody class="af-table__body">
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487696</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458644</a></td>
            <td class="af-table__cell">7359</td>
            <td class="af-table__cell">BellBoeuf</td>
            <td class="af-table__cell">01/03/2017</td>
            <td class="af-table__cell">Acceptation totale</td>
            <td class="af-table__cell">
                En cours
                
            </td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458044</a></td>
            <td class="af-table__cell">7059</td>
            <td class="af-table__cell">Toulouse</td>
            <td class="af-table__cell">01/06/2007</td>
            <td class="af-table__cell">Acceptation partielle</td>
            <td class="af-table__cell">Transmis</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">22487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594428044</a></td>
            <td class="af-table__cell">7052</td>
            <td class="af-table__cell">NA</td>
            <td class="af-table__cell">11/06/2000</td>
            <td class="af-table__cell">Refus</td>
            <td class="af-table__cell">Clos</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487696</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458644</a></td>
            <td class="af-table__cell">7359</td>
            <td class="af-table__cell">BellBoeuf</td>
            <td class="af-table__cell">01/03/2017</td>
            <td class="af-table__cell">Acceptation totale</td>
            <td class="af-table__cell">En cours</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458044</a></td>
            <td class="af-table__cell">7059</td>
            <td class="af-table__cell">Toulouse</td>
            <td class="af-table__cell">01/06/2007</td>
            <td class="af-table__cell">Acceptation partielle</td>
            <td class="af-table__cell">Transmis</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">22487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594428044</a></td>
            <td class="af-table__cell">7052</td>
            <td class="af-table__cell">NA</td>
            <td class="af-table__cell">11/06/2000</td>
            <td class="af-table__cell">Refus</td>
            <td class="af-table__cell">Clos</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487696</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458644</a></td>
            <td class="af-table__cell">7359</td>
            <td class="af-table__cell">BellBoeuf</td>
            <td class="af-table__cell">01/03/2017</td>
            <td class="af-table__cell">Acceptation totale</td>
            <td class="af-table__cell">En cours</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458044</a></td>
            <td class="af-table__cell">7059</td>
            <td class="af-table__cell">Toulouse</td>
            <td class="af-table__cell">01/06/2007</td>
            <td class="af-table__cell">Acceptation partielle</td>
            <td class="af-table__cell">Transmis</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">22487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594428044</a></td>
            <td class="af-table__cell">7052</td>
            <td class="af-table__cell">NA</td>
            <td class="af-table__cell">11/06/2000</td>
            <td class="af-table__cell">Refus</td>
            <td class="af-table__cell">Clos</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
        <tr class="af-table__tr">
            <td class="af-table__cell"><a class="af-link" href="">25487296</a></td>
            <td class="af-table__cell"><a class="af-link" href="">1594458044</a></td>
            <td class="af-table__cell">7059</td>
            <td class="af-table__cell">Toulouse</td>
            <td class="af-table__cell">01/06/2007</td>
            <td class="af-table__cell">Acceptation partielle</td>
            <td class="af-table__cell">Transmis</td>
            <td class="af-table__cell">Consulter</td>
        </tr>
    </tbody>
</table>`;

    return container;
  },
  args: {},
  parameters: {
    controls: { disable: true },
  },
};

export const Pagination: StoryObj = {
  name: "Pagination",
  render: () => {
    const container = document.createElement("div");
    container.className = "af-paging";
    container.innerHTML = `    <div class="af-paging__limit">
    <form class="af-paging__form">
        <div class="af-form__group">
            <div class="col col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <label class="af-form__group-label" for="pagination">Afficher</label>
            </div>
            <div class="col col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div class="af-form__select">
                    <div class="af-form__select-container">
                        <select class="af-form__input-select">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <svg class="glyphicon glyphicon-menu-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M98.4,16.2c0.7,0.3,1.1,1,1.1,2.1v15.9c0,0.9-0.3,1.6-0.9,2.3L51.8,83.2c-0.5,0.5-1.1,0.7-1.8,0.7
s-1.3-0.2-1.8-0.7L1.4,36.5c-0.6-0.7-0.9-1.4-0.9-2.3V18.3c0-1.1,0.4-1.8,1.1-2.1c0.7-0.3,1.5-0.1,2.3,0.7L50,63l46.1-46.1
C96.9,16.1,97.6,15.9,98.4,16.2L98.4,16.2z"></path>
                        </svg>
                    </div><span class="af-form__input-cmplt">éléments</span>
                </div>
            </div>
        </div>
    </form>
</div>
<div class="af-paging__pager">
    <nav class="af-pager">
        <ul class="af-pager__pagination">
            <li class="af-pager__item"><a class="af-pager__item-link" href="#"><span class="af-pager__item-icon">&laquo;</span><span class="af-pager__item-text">Pr&eacute;c&eacute;dent</span></a></li>
            <li class="af-pager__item"><a class="af-pager__item-link" href="#">1</a></li>
            <li class="af-pager__item af-pager__item--disabled"><span class="af-pager__item-link">&mldr;</span></li>
            <li class="af-pager__item"><a class="af-pager__item-link" href="#">4</a></li>
            <li class="af-pager__item af-pager__item--active"><a class="af-pager__item-link" href="#">5</a></li>
            <li class="af-pager__item"><a class="af-pager__item-link" href="#">6</a></li>
            <li class="af-pager__item af-pager__item--disabled">&mldr;</li>
            <li class="af-pager__item"><a class="af-pager__item-link" href="#">23</a></li>
            <li class="af-pager__item"><a class="af-pager__item-link" href="#"><span class="af-pager__item-text">Suivant</span><span class="af-pager__item-icon">&raquo;</span></a></li>
        </ul>
    </nav>
</div>`;

    return container;
  },
  args: {},
  parameters: {
    controls: { disable: true },
  },
};
