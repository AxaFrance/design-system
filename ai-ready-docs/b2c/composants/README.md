# Fiches des composants

Une fiche par composant de Canopée, pour qu'un humain comme une IA sache s'en servir sans autre explication. Chaque fiche a deux parties : un JSON généré depuis Figma, pour l'aspect graphique, les propriétés et les états, et un Markdown écrit à la main, pour l'usage et le fonctionnel. Le Markdown fait foi.

Le Markdown suit la [trame de la fiche d'un composant](trame-fiche-composant.md). Le JSON suit le [format du JSON d'un composant](format-json-composant.md).

## Règles communes à toutes les fiches

- Quand aucun composant ne convient à un besoin, l'IA le signale au lieu d'en inventer un.
- Quand une fiche renvoie vers un composant ou un template qui n'a pas encore de fiche, l'IA le signale au lieu de deviner son usage.
- Quand une fiche ne répond pas, l'IA le signale au lieu de deviner. La consigne est écrite à la fin de chaque fiche, parce qu'une IA peut n'en lire qu'une.
- Les propriétés et leurs valeurs portent les noms de la nomenclature. Les noms du code n'apparaissent que dans les rubriques Code, Noms à ne pas employer, Décisions et Points ouverts de chaque fiche.
- Un sous-composant qui ne sert qu'à un seul composant n'a pas de Markdown à lui. Son JSON est rangé dans le dossier de ce composant, et le Markdown de ce composant porte ses règles. Exemple : _SelectList, dans le dossier de Select. Un sous-composant partagé par plusieurs composants a sa propre fiche, pour que ses règles ne soient écrites qu'une fois. Exemple : _FormLabel, partagé par tous les champs.

## Les fiches

| Composant | Markdown | JSON | Changelog |
|---|---|---|---|
| Button | [button.md](button/button.md) | [button.json](button/button.json) | [button-changelog.md](button/button-changelog.md) |
| IconButton | [iconbutton.md](iconbutton/iconbutton.md) | [iconbutton.json](iconbutton/iconbutton.json) | [iconbutton-changelog.md](iconbutton/iconbutton-changelog.md) |
| Link | [link.md](link/link.md) | [link.json](link/link.json) | [link-changelog.md](link/link-changelog.md) |
| ClickItem | [clickitem.md](clickitem/clickitem.md) | [clickitem.json](clickitem/clickitem.json) | [clickitem-changelog.md](clickitem/clickitem-changelog.md) |
| Divider | [divider.md](divider/divider.md) | [divider.json](divider/divider.json) | [divider-changelog.md](divider/divider-changelog.md) |
| Spinner | [spinner.md](spinner/spinner.md) | [spinner.json](spinner/spinner.json) | [spinner-changelog.md](spinner/spinner-changelog.md) |
| Avatar | [avatar.md](avatar/avatar.md) | [avatar.json](avatar/avatar.json) | [avatar-changelog.md](avatar/avatar-changelog.md) |
| ProgressBar | [progressbar.md](progressbar/progressbar.md) | [progressbar.json](progressbar/progressbar.json) | [progressbar-changelog.md](progressbar/progressbar-changelog.md) |
| Tag | [tag.md](tag/tag.md) | [tag.json](tag/tag.json) | [tag-changelog.md](tag/tag-changelog.md) |
| _FormLabel | [_formlabel.md](_formlabel/_formlabel.md) | [_formlabel.json](_formlabel/_formlabel.json) | [_formlabel-changelog.md](_formlabel/_formlabel-changelog.md) |
| _FormHelperText | [_formhelpertext.md](_formhelpertext/_formhelpertext.md) | [_formhelpertext.json](_formhelpertext/_formhelpertext.json) | [_formhelpertext-changelog.md](_formhelpertext/_formhelpertext-changelog.md) |
| Stepper | [stepper.md](stepper/stepper.md) | [stepper.json](stepper/stepper.json) | [stepper-changelog.md](stepper/stepper-changelog.md) |
| Switch | [switch.md](switch/switch.md) | [switch.json](switch/switch.json) | [switch-changelog.md](switch/switch-changelog.md) |
| TextInput | [textinput.md](textinput/textinput.md) | [textinput.json](textinput/textinput.json) | [textinput-changelog.md](textinput/textinput-changelog.md) |
| Radio | [radio.md](radio/radio.md) | [radio.json](radio/radio.json) | [radio-changelog.md](radio/radio-changelog.md) |
| TextArea | [textarea.md](textarea/textarea.md) | [textarea.json](textarea/textarea.json) | [textarea-changelog.md](textarea/textarea-changelog.md) |
| PhoneInput | [phoneinput.md](phoneinput/phoneinput.md) | [phoneinput.json](phoneinput/phoneinput.json) | [phoneinput-changelog.md](phoneinput/phoneinput-changelog.md) |
| DateInput | [dateinput.md](dateinput/dateinput.md) | [dateinput.json](dateinput/dateinput.json) | [dateinput-changelog.md](dateinput/dateinput-changelog.md) |
| Checkbox | [checkbox.md](checkbox/checkbox.md) | [checkbox.json](checkbox/checkbox.json) | [checkbox-changelog.md](checkbox/checkbox-changelog.md) |
| Select | [select.md](select/select.md) | [select.json](select/select.json) | [select-changelog.md](select/select-changelog.md) |
| LevelSelector | [levelselector.md](levelselector/levelselector.md) | [levelselector.json](levelselector/levelselector.json) | [levelselector-changelog.md](levelselector/levelselector-changelog.md) |
| FileInput | [fileinput.md](fileinput/fileinput.md) | [fileinput.json](fileinput/fileinput.json) | [fileinput-changelog.md](fileinput/fileinput-changelog.md) |
| Tabs | [tabs.md](tabs/tabs.md) | [tabs.json](tabs/tabs.json) | [tabs-changelog.md](tabs/tabs-changelog.md) |
| Pagination | [pagination.md](pagination/pagination.md) | [pagination.json](pagination/pagination.json) | [pagination-changelog.md](pagination/pagination-changelog.md) |
| Skeleton | [skeleton.md](skeleton/skeleton.md) | [skeleton.json](skeleton/skeleton.json) | [skeleton-changelog.md](skeleton/skeleton-changelog.md) |
| Alert | [alert.md](alert/alert.md) | [alert.json](alert/alert.json) | [alert-changelog.md](alert/alert-changelog.md) |
| Banner | [banner.md](banner/banner.md) | [banner.json](banner/banner.json) | [banner-changelog.md](banner/banner-changelog.md) |
| Modal | [modal.md](modal/modal.md) | [modal.json](modal/modal.json) | [modal-changelog.md](modal/modal-changelog.md) |
| Dialog | [dialog.md](dialog/dialog.md) | [dialog.json](dialog/dialog.json) | [dialog-changelog.md](dialog/dialog-changelog.md) |
| Table | [table.md](table/table.md) | [table.json](table/table.json) | [table-changelog.md](table/table-changelog.md) |
| TableMobileCard | [tablemobilecard.md](tablemobilecard/tablemobilecard.md) | [tablemobilecard.json](tablemobilecard/tablemobilecard.json) | [tablemobilecard-changelog.md](tablemobilecard/tablemobilecard-changelog.md) |
| DropdownMenu | [dropdownmenu.md](dropdownmenu/dropdownmenu.md) | [dropdownmenu.json](dropdownmenu/dropdownmenu.json) | [dropdownmenu-changelog.md](dropdownmenu/dropdownmenu-changelog.md) |
| _MenuItem | [_menuitem.md](_menuitem/_menuitem.md) | [_menuitem.json](_menuitem/_menuitem.json) | [_menuitem-changelog.md](_menuitem/_menuitem-changelog.md) |
| Accordion | [accordion.md](accordion/accordion.md) | [accordion.json](accordion/accordion.json) | [accordion-changelog.md](accordion/accordion-changelog.md) |
| ContentItem | [contentitem.md](contentitem/contentitem.md) | [contentitem.json](contentitem/contentitem.json) | [contentitem-changelog.md](contentitem/contentitem-changelog.md) |
| ContentItemDuo | [contentitemduo.md](contentitemduo/contentitemduo.md) | [contentitemduo.json](contentitemduo/contentitemduo.json) | [contentitemduo-changelog.md](contentitemduo/contentitemduo-changelog.md) |
