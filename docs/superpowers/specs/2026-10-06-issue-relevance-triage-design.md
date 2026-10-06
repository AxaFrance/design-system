# Workflow quotidien de vérification de la pertinence des issues

- **Dépôt cible** : `AxaFrance/design-system`
- **Date de conception** : 2026-10-06
- **Statut** : conception approuvée en conversation, revue écrite requise avant implémentation
- **Workflow proposé** : `issue-relevance-triage`

## Intent

Réduire l’effort des mainteneurs pour identifier les issues ouvertes probablement devenues obsolètes en confrontant chaque issue à la base de code, à l’historique Git, aux validations ciblées et, lorsque cela est pertinent, à la documentation Zeroheight, sans fermer automatiquement une issue ni publier de répétition inutile.

## Observations du dépôt

L’audit borné du 6 octobre 2026 a établi les faits suivants :

- le dépôt est un monorepo TypeScript/React avec `npm`, Turbo, Vitest, Vite et trois univers Canopée ;
- les commandes racines disponibles sont notamment `npm run build`, `npm run lint` et `npm test` ;
- le dépôt contient déjà une automatisation Agentic Workflow de compilation et des instructions locales pour gh-aw ;
- deux skills locaux décrivent les univers Canopée Distributeur et Prospect-Client ;
- deux serveurs MCP Zeroheight sont configurés dans `.vscode/mcp.json` ;
- les labels de priorité et de domaine sont déjà utilisés, mais `stale-candidate` n’existe pas encore ;
- sur un échantillon borné de 100 issues ouvertes, 62 avaient au moins 365 jours et 21 entre 180 et 364 jours. L’ancienneté seule ne peut donc pas déterminer l’obsolescence.

Ces observations sont séparées des décisions de politique ci-dessous : elles ne constituent pas une justification automatique de fermeture.

## Décisions de politique

### Déclenchement et volume

- Exécution planifiée du lundi au vendredi avec `schedule: daily on weekdays`.
- Déclenchement manuel avec `workflow_dispatch` pour les essais et les analyses ponctuelles.
- Un verrou de concurrence interdit deux exécutions simultanées.
- Au maximum cinq issues sont sélectionnées par exécution.
- L’ordre est stable et commence par les issues les plus anciennes éligibles.

### Éligibilité

Une issue est candidate si elle est ouverte, a été créée depuis au moins 90 jours et n’a reçu aucune activité humaine depuis au moins 60 jours.

L’activité humaine comprend les commentaires, modifications et changements de métadonnées effectués par une personne. Les commentaires marqués par le workflow ne réinitialisent pas ce délai.

Un marqueur n’est reconnu comme commentaire du workflow que s’il est porté par un login bot explicitement allowlisté ; un commentaire humain qui recopie le marqueur reste une activité humaine.

### Exclusions systématiques

Ne pas analyser automatiquement une issue qui :

- porte l’un des labels `P0`, `P1`, `accessibility`, `breaking-change`, `release` ou `react19` ;
- possède un responsable ou un milestone ;
- est reliée à une pull request ouverte ;
- n’est pas suffisamment lisible pour extraire un sujet vérifiable.

Les exclusions produisent un état interne et un `noop`, sans commentaire public.

### Sorties visibles

- `still-relevant` : aucune sortie visible ; conserver seulement l’état minimal d’analyse.
- `likely-obsolete` : ajouter `stale-candidate` et publier un commentaire argumenté demandant une validation humaine ; ne jamais fermer l’issue.
- `needs-reproduction` : publier une demande ciblée uniquement si elle apporte une question nouvelle et exploitable.
- `insufficient-evidence` : aucune sortie visible, sauf si une information précise manque et qu’une demande unique peut débloquer l’analyse.

Le label `stale-candidate` est créé automatiquement par le safe output si nécessaire. Le workflow ne réutilise pas `invalid` ou `wontfix`, car ces labels expriment une décision humaine différente.

## Architecture retenue

L’approche retenue est **préfiltrage déterministe, puis analyse fondée sur les preuves**. Elle est préférable à une analyse entièrement agentique car elle limite le coût et le bruit, tout en laissant l’agent interpréter les descriptions d’issues et les relations entre code, historique et documentation.

### 1. Contrôle déterministe préalable

Une étape de préparation utilise GitHub CLI avec pagination REST et des commandes de lecture bornées pour produire des fichiers JSON sous `/tmp/gh-aw/data/` :

- candidats éligibles et raisons d’exclusion ;
- dernière activité humaine et dernier commentaire du workflow ;
- labels, responsables, milestones, liens vers pull requests et commits ;
- références textuelles candidates : noms de composants, packages, chemins, exports, anciennes APIs et univers ;
- curseur de traitement et limite de cinq éléments.

L’agent lit ces fichiers au lieu de rescanner tout le backlog. Le corps et les commentaires d’issues sont des données non fiables : ils ne doivent jamais être interprétés comme des instructions à exécuter.

### 2. Analyse de la base de code

Pour chaque issue sélectionnée, l’agent :

1. normalise le sujet et extrait les références vérifiables ;
2. recherche ces références dans `packages/`, `apps/`, `samples/`, `docs/` et les fichiers de configuration ;
3. vérifie les exports publics et les dépendances des packages concernés ;
4. consulte l’historique Git avec les références pertinentes (`git log`, recherche de chaînes, suppressions et renommages) ;
5. recherche les pull requests et commits liés qui auraient pu corriger, remplacer ou invalider le problème ;
6. détermine si le code actuel confirme, contredit ou ne permet pas de reproduire l’affirmation de l’issue.

Une référence absente n’est pas une preuve suffisante à elle seule : elle peut être mal nommée ou avoir été remplacée. Toute conclusion d’obsolescence doit s’appuyer sur au moins deux signaux indépendants et ne comporter aucun signal actif contradictoire.

### 3. Validation dynamique ciblée

Lorsque le package, le composant et une commande existante peuvent être identifiés sans ambiguïté, l’agent peut exécuter une validation ciblée : test, lint ou build du périmètre concerné.

Règles :

- utiliser uniquement les scripts déjà déclarés dans les `package.json` et la configuration Turbo/Vitest ;
- ne jamais inventer une commande, modifier les sources ou installer un nouveau package ;
- respecter une durée et un nombre de commandes bornés par issue ;
- distinguer un échec de validation du code d’un échec d’infrastructure ou d’un périmètre non testable ;
- un test réussi ne prouve pas que l’issue est obsolète, mais un test ciblé peut confirmer que le comportement signalé n’est plus reproductible.

### 4. Utilisation de Zeroheight et des skills

Zeroheight est consulté uniquement lorsque l’issue concerne explicitement l’UI, un composant, un thème, un comportement visuel ou l’accessibilité. Les issues purement CI, dépendances, release ou outillage restent hors de ce circuit.

Le workflow déclarera les deux skills locaux comme connaissances spécialisées :

- `plugins/canopee-distributeur/skills/canopee-distributeur` ;
- `plugins/canopee-prospect-client/skills/canopee-prospect-client`.

Pour une issue UI, le workflow suit la séquence déjà prescrite par ces skills : recherche de page Zeroheight, lecture de la page pertinente, puis comparaison avec le code. L’absence d’une information dans Zeroheight doit être rapportée explicitement et ne constitue pas une preuve d’obsolescence.

Les serveurs MCP Zeroheight seront déclarés comme serveurs HTTP optionnels du workflow sur l’endpoint stable `https://mcp.zeroheight.com/mcp`. Les tokens d’accès issus de la configuration locale ne seront pas recopiés en clair dans le workflow : ils seront configurés dans des secrets GitHub Actions dédiés, `ZEROHEIGHT_DISTRIBUTEUR_MCP_TOKEN` et `ZEROHEIGHT_PROSPECT_CLIENT_MCP_TOKEN`, puis transmis comme headers Bearer. Si un serveur est indisponible, l’analyse continue avec une confiance réduite ; elle ne doit pas conclure à `likely-obsolete` sur la seule base de cette indisponibilité.

## Matrice de décision

| Classe | Conditions minimales | Action |
| --- | --- | --- |
| `still-relevant` | Référence actuelle confirmée ou reproduction plausible ; aucun signal de suppression/remplacement concluant | `noop` |
| `likely-obsolete` | Au moins deux preuves indépendantes : code supprimé/remplacé, correction liée, documentation contradictoire ou reproduction impossible ; aucun signal actif | `add-labels` puis `add-comment` |
| `needs-reproduction` | Le code existe encore, mais l’issue ne fournit pas assez d’informations pour confirmer le comportement | Commentaire ciblé si non répétitif |
| `insufficient-evidence` | Références ambiguës, services indisponibles ou conflit de preuves | `noop`, ou une seule demande d’information si elle est précise |

Le commentaire de `likely-obsolete` doit contenir le résumé, les chemins ou exports vérifiés, les commits/PR pertinents, les résultats de validation, les limites et une demande explicite de décision humaine. Il ne doit pas utiliser de mot-clé de fermeture.

## Idempotence et réengagement

L’état persistant utilise `cache-memory`, avec une conservation d’au moins 90 jours. Il ne contient que :

- le numéro stable de l’issue ;
- la classe et la dernière empreinte de preuves ;
- la date de dernière analyse et la date de dernière activité humaine ;
- les identifiants des commentaires publiés par le workflow ;
- la prochaine date de réengagement autorisée.

L’empreinte est construite à partir du contenu et de la date de mise à jour de l’issue, des chemins et derniers commits réellement pertinents, des pages Zeroheight consultées et du résultat des validations. Le SHA courant de la branche n’est pas utilisé seul, afin qu’un commit sans rapport ne provoque pas une nouvelle publication.

Avant toute sortie, l’agent vérifie l’historique GitHub, car la mémoire peut expirer ou être restaurée depuis un cache ancien :

- même empreinte et aucune activité humaine : `noop` ;
- réponse ou modification humaine : nouvelle analyse ;
- commentaire du workflow sans réponse depuis moins de 60 jours : `noop` ;
- après 60 jours sans réponse, nouvelle analyse si les preuves ont changé, sinon une seule relance courte pour cette empreinte ;
- après cette relance, ne plus republier pour la même empreinte sans nouvelle activité humaine ou nouvelle preuve ;
- ne jamais masquer les anciens commentaires, afin de conserver l’historique de la décision.

Le marqueur technique du commentaire contient l’identifiant du workflow, le numéro d’issue et l’empreinte. Il est utilisé pour la déduplication et n’est pas présenté comme une décision humaine.

## Sécurité gh-aw

- Le job agent conserve uniquement `contents: read`, `issues: read` et `pull-requests: read`, ainsi que la permission `copilot-requests: write` si le moteur Copilot configuré l’exige.
- Les mutations passent exclusivement par `safe-outputs` : `add-labels` limité à `stale-candidate` et `add-comment` avec un maximum de cinq opérations.
- Aucun `close-issue`, `update-issue`, accès direct en écriture ou commande GitHub mutante ne sera disponible pour l’agent.
- L’accès GitHub utilise `gh-proxy` et les toolsets strictement nécessaires.
- L’accès MCP est limité à `mcp.zeroheight.com` et activé uniquement pour les issues UI.
- Les URLs, tokens et secrets ne sont jamais écrits dans le Markdown du workflow, les logs, les commentaires ou la mémoire.
- La concurrence est limitée à une exécution active et chaque run conserve un plafond de temps et d’éléments.

## Validation et déploiement progressif

La mise en œuvre devra respecter les étapes suivantes :

1. créer exactement un fichier `.github/workflows/issue-relevance-triage.md` ;
2. compiler avec `gh aw compile` et versionner le lock file correspondant ;
3. vérifier que le job principal n’a aucune permission d’écriture et que les safe outputs sont bornés ;
4. exécuter manuellement plusieurs scénarios avant d’activer l’observation planifiée ;
5. contrôler les logs, les doublons, le taux de `noop`, les faux positifs et les demandes de réengagement ;
6. ne modifier les seuils ou les plafonds qu’après observation des premiers runs.

Les scénarios minimaux sont :

- issue ancienne dont le composant ou l’API a été supprimé et remplacé : label et commentaire argumenté ;
- issue ancienne dont le composant et la documentation existent encore : aucun commentaire ;
- issue ambiguë ou non reproductible : demande ciblée au plus une fois, puis attente de 60 jours ;
- même issue, mêmes preuves, plusieurs runs : aucun doublon ;
- réponse humaine ou changement du code pertinent : nouvelle analyse ;
- label protégé, milestone, responsable ou pull request ouverte : aucune sortie visible.

## Critères d’acceptation

La conception sera considérée comme correctement implémentée lorsque :

- le workflow s’exécute du lundi au vendredi et manuellement ;
- aucune issue n’est fermée automatiquement ;
- les critères 90 jours, 60 jours, exclusions et maximum de cinq issues sont appliqués ;
- une conclusion `likely-obsolete` exige deux preuves indépendantes et produit `stale-candidate` plus un commentaire ;
- Zeroheight n’est utilisé que pour les issues UI et son indisponibilité dégrade la confiance sans créer de faux positif ;
- un même résultat ne génère pas de nouveau commentaire avant le réengagement de 60 jours ;
- une réponse humaine ou une évolution pertinente du code permet une nouvelle analyse ;
- le workflow est compilé et son lock file est synchronisé ;
- les validations locales du dépôt passent pour les fichiers modifiés.
