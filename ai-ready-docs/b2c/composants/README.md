# Fiches des composants

Une fiche par composant de Canopée, pour qu'un humain comme une IA sache s'en servir sans autre explication. Chaque fiche a deux parties : un JSON généré depuis Figma, pour l'aspect graphique, les propriétés et les états, et un Markdown écrit à la main, pour l'usage et le fonctionnel. Le Markdown fait foi.

Le Markdown suit la [trame de la fiche d'un composant](trame-fiche-composant.md). Le JSON suit le [format du JSON d'un composant](format-json-composant.md).

## Règles communes à toutes les fiches

- Quand aucun composant ne convient à un besoin, l'IA le signale au lieu d'en inventer un.
- Quand une fiche ne répond pas, l'IA le signale au lieu de deviner. La consigne est écrite à la fin de chaque fiche, parce qu'une IA peut n'en lire qu'une.
- Les propriétés et leurs valeurs portent les noms de la nomenclature. Les noms du code n'apparaissent que dans les rubriques Code, Noms à ne pas employer, Décisions et Points ouverts de chaque fiche.
- Un sous-composant qui ne sert qu'à un seul composant n'a pas de fiche. Son JSON est rangé dans le dossier de ce composant, et la fiche de ce composant le cite. Exemple : _SelectList, dans le dossier de Select. Un sous-composant partagé par plusieurs composants garde sa fiche, pour que ses règles ne soient écrites qu'une fois. Exemple : _FormLabel, partagé par tous les champs.

## Les fiches

| Composant | Markdown | JSON | Changelog |
|---|---|---|---|
| Button | [button.md](button/button.md) | [button.json](button/button.json) | [button-changelog.md](button/button-changelog.md) |
| IconButton | [iconbutton.md](iconbutton/iconbutton.md) | [iconbutton.json](iconbutton/iconbutton.json) | [iconbutton-changelog.md](iconbutton/iconbutton-changelog.md) |
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
| Tabs | [tabs.md](tabs/tabs.md) | [tabs.json](tabs/tabs.json) | [tabs-changelog.md](tabs/tabs-changelog.md) |
