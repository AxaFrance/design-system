/* empty css               *//* empty css              */const o={title:"Components/Form/Input/File"},e={render:()=>{const n=document.createElement("div");return n.innerHTML=`
    <div class="row af-form__group af-form__group--label-top">
    <div class="col-md-2">
        <label class="af-form__group-label" for="inputtext1">Input File *</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__file-input">
            <div class="drop-box hidden-mobile" id="uniqueid" style="position: relative;" aria-disabled="false">
                <div>Glissez/d&eacute;posez vos fichiers</div>
                <input accept="image/jpeg, image/png, application/*" type="file" style="position: absolute; inset: 0px; opacity: 0.00001; pointer-events: none;" autocomplete="off" name="placeImage" />
            </div>
            <button class="af-btn af-btn--file af-btn--hasiconLeft" type="button">
                <svg class="glyphicon glyphicon-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M3.125 101.875v-22.917q0-0.917 0.583-1.5t1.5-0.583h87.333q0.917 0 1.583 0.625t0.667 1.458v22.917h-91.667zM11.458 43.542h25v25h25v-25h24.583l-37.083-41.667zM78.125 89.375h8.333v-4.167h-8.333v4.167z"></path>
                </svg> Parcourir
            </button>
        </div><small class="af-form__help">Enter the place name, ex : Webcenter</small>
        <div class="custom-table-file af-file-table">
            <div class="af-form__file-errors"><span>Le chargement de certains fichiers a &eacute;chou&eacute; :</span>
                <ul class="af-form__file-errors-list">
                    <li>refused-extension-file.svg (100ko)</li>
                    <li>too-big-file.jpg (100Mo)</li>
                    <li>error-file.jpg (100Mo)</li>
                </ul>
            </div>
            <ul class="af-form__file-list">
                <li class="af-form__file-line"><span>
                        <div class="af-popover__container">
                            <div class="af-popover__container-over" role="presentation">
                                <svg class="glyphicon glyphicon-picture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <path d="M0 91.958v-84.333q0-1.5 1.083-2.583t2.583-1.083h92.667q1.583 0 2.625 1.083t1.042 2.583v84.333q0 1.5-1.042 2.583t-2.625 1.083h-92.667q-1.5 0-2.583-1.083t-1.083-2.583zM8.333 73.708l20.583-15.167 24.833 10.917-6.167-13 24.417-26.5 19.667 24v-41.667h-83.333v61.417zM17.333 33.125q0-4.667 3.25-7.917t7.917-3.25 7.917 3.25 3.25 7.917-3.25 7.917-7.917 3.25-7.917-3.25-3.25-7.917z"></path>
                                </svg>
                            </div>
                        </div>
                    </span><span>error-file.jpg</span><span>100Mo</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
                <li class="af-form__file-line"><span>
                        <div class="af-popover__container">
                            <div class="af-popover__container-over" role="presentation">
                                <svg class="glyphicon glyphicon-picture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <path d="M0 91.958v-84.333q0-1.5 1.083-2.583t2.583-1.083h92.667q1.583 0 2.625 1.083t1.042 2.583v84.333q0 1.5-1.042 2.583t-2.625 1.083h-92.667q-1.5 0-2.583-1.083t-1.083-2.583zM8.333 73.708l20.583-15.167 24.833 10.917-6.167-13 24.417-26.5 19.667 24v-41.667h-83.333v61.417zM17.333 33.125q0-4.667 3.25-7.917t7.917-3.25 7.917 3.25 3.25 7.917-3.25 7.917-7.917 3.25-7.917-3.25-3.25-7.917z"></path>
                                </svg>
                            </div>
                        </div>
                    </span><span>fichier.png</span><span>100Mo</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
                <li class="af-form__file-line">
                    <svg class="glyphicon glyphicon-file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M9.635 96.722v-92.838q0-0.888 0.565-1.453t1.453-0.565h38.346v40.365h32.292v54.492q0 0.888-0.565 1.453t-1.453 0.565h-68.62q-0.888 0-1.453-0.565t-0.565-1.453zM58.073 34.157v-24.219l24.219 24.219h-24.219z"></path>
                    </svg><span>fichier.csv</span><span>100ko</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
            </ul>
        </div>
    </div>
</div>`,n},args:{},argTypes:{}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
    <div class="row af-form__group af-form__group--label-top">
    <div class="col-md-2">
        <label class="af-form__group-label" for="inputtext1">Input File *</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__file-input">
            <div class="drop-box hidden-mobile" id="uniqueid" style="position: relative;" aria-disabled="false">
                <div>Glissez/d&eacute;posez vos fichiers</div>
                <input accept="image/jpeg, image/png, application/*" type="file" style="position: absolute; inset: 0px; opacity: 0.00001; pointer-events: none;" autocomplete="off" name="placeImage" />
            </div>
            <button class="af-btn af-btn--file af-btn--hasiconLeft" type="button">
                <svg class="glyphicon glyphicon-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M3.125 101.875v-22.917q0-0.917 0.583-1.5t1.5-0.583h87.333q0.917 0 1.583 0.625t0.667 1.458v22.917h-91.667zM11.458 43.542h25v25h25v-25h24.583l-37.083-41.667zM78.125 89.375h8.333v-4.167h-8.333v4.167z"></path>
                </svg> Parcourir
            </button>
        </div><small class="af-form__help">Enter the place name, ex : Webcenter</small>
        <div class="custom-table-file af-file-table">
            <div class="af-form__file-errors"><span>Le chargement de certains fichiers a &eacute;chou&eacute; :</span>
                <ul class="af-form__file-errors-list">
                    <li>refused-extension-file.svg (100ko)</li>
                    <li>too-big-file.jpg (100Mo)</li>
                    <li>error-file.jpg (100Mo)</li>
                </ul>
            </div>
            <ul class="af-form__file-list">
                <li class="af-form__file-line"><span>
                        <div class="af-popover__container">
                            <div class="af-popover__container-over" role="presentation">
                                <svg class="glyphicon glyphicon-picture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <path d="M0 91.958v-84.333q0-1.5 1.083-2.583t2.583-1.083h92.667q1.583 0 2.625 1.083t1.042 2.583v84.333q0 1.5-1.042 2.583t-2.625 1.083h-92.667q-1.5 0-2.583-1.083t-1.083-2.583zM8.333 73.708l20.583-15.167 24.833 10.917-6.167-13 24.417-26.5 19.667 24v-41.667h-83.333v61.417zM17.333 33.125q0-4.667 3.25-7.917t7.917-3.25 7.917 3.25 3.25 7.917-3.25 7.917-7.917 3.25-7.917-3.25-3.25-7.917z"></path>
                                </svg>
                            </div>
                        </div>
                    </span><span>error-file.jpg</span><span>100Mo</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
                <li class="af-form__file-line"><span>
                        <div class="af-popover__container">
                            <div class="af-popover__container-over" role="presentation">
                                <svg class="glyphicon glyphicon-picture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <path d="M0 91.958v-84.333q0-1.5 1.083-2.583t2.583-1.083h92.667q1.583 0 2.625 1.083t1.042 2.583v84.333q0 1.5-1.042 2.583t-2.625 1.083h-92.667q-1.5 0-2.583-1.083t-1.083-2.583zM8.333 73.708l20.583-15.167 24.833 10.917-6.167-13 24.417-26.5 19.667 24v-41.667h-83.333v61.417zM17.333 33.125q0-4.667 3.25-7.917t7.917-3.25 7.917 3.25 3.25 7.917-3.25 7.917-7.917 3.25-7.917-3.25-3.25-7.917z"></path>
                                </svg>
                            </div>
                        </div>
                    </span><span>fichier.png</span><span>100Mo</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
                <li class="af-form__file-line">
                    <svg class="glyphicon glyphicon-file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M9.635 96.722v-92.838q0-0.888 0.565-1.453t1.453-0.565h38.346v40.365h32.292v54.492q0 0.888-0.565 1.453t-1.453 0.565h-68.62q-0.888 0-1.453-0.565t-0.565-1.453zM58.073 34.157v-24.219l24.219 24.219h-24.219z"></path>
                    </svg><span>fichier.csv</span><span>100ko</span>
                    <button class="af-link af-link--delete-file" type="button"><span class="af-link__text">Supprimer</span></button>
                </li>
            </ul>
        </div>
    </div>
</div>\`;
    return container;
  },
  args: {},
  argTypes: {}
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,o as default};
