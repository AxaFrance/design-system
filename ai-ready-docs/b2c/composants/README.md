# Fiches des composants

Une fiche par composant de Canopée, pour qu'un humain comme une IA sache s'en servir sans autre explication. Chaque fiche a deux parties : un JSON généré depuis Figma, pour l'aspect graphique, les propriétés et les états, et un Markdown écrit à la main, pour l'usage et le fonctionnel. Le Markdown fait foi.

Le Markdown suit la [trame de la fiche d'un composant](trame-fiche-composant.md). Le JSON suit le [format du JSON d'un composant](format-json-composant.md).

## Règles communes à toutes les fiches

- Quand aucun composant ne convient à un besoin, l'IA le signale au lieu d'en inventer un.
- Quand une fiche ne répond pas, l'IA le signale au lieu de deviner. La consigne est écrite à la fin de chaque fiche, parce qu'une IA peut n'en lire qu'une.
- Les propriétés et leurs valeurs portent les noms de la nomenclature. Les noms du code n'apparaissent que dans la rubrique Code de chaque fiche.

## Les fiches

| Composant | Markdown | JSON | Changelog |
|---|---|---|---|
| Button | [button.md](button/button.md) | [button.json](button/button.json) | [button-changelog.md](button/button-changelog.md) |
| IconButton | [iconbutton.md](iconbutton/iconbutton.md) | [iconbutton.json](iconbutton/iconbutton.json) | [iconbutton-changelog.md](iconbutton/iconbutton-changelog.md) |
| Divider | [divider.md](divider/divider.md) | [divider.json](divider/divider.json) | [divider-changelog.md](divider/divider-changelog.md) |
| Spinner | [spinner.md](spinner/spinner.md) | [spinner.json](spinner/spinner.json) | [spinner-changelog.md](spinner/spinner-changelog.md) |
