# Automatisation de la Collecte de Métriques Zeroheight

## Status

Proposed (2026-07-23)

## Context

### Problématique

L'équipe Design System AXA souhaite mesurer l'adoption et l'utilisation du Design System Canopée à travers le SI. Zeroheight propose des fonctionnalités de tracking ([Package version monitoring](https://help.zeroheight.com/hc/en-us/articles/35887048538523-Package-version-monitoring) et [Component usage](https://help.zeroheight.com/hc/en-us/articles/35887034128795-Measure-usage-of-Angular-and-React-components)) qui permettent de collecter :

- **Versions de packages utilisées** : Identifier quels projets utilisent quelles versions de `@axa-fr/canopee-react`, `@axa-fr/canopee-css`, et les packages legacy (slash/apollo)
- **Utilisation des composants React** : Analyser quels composants sont utilisés, avec quelles props, et leur fréquence

### Contraintes Actuelles

À l'heure actuelle, la collecte s'effectue **manuellement** sur chaque projet :

- Exécution manuelle de `@zeroheight/adoption-cli` sur chaque projet
- Nécessite que chaque projet ait accès aux credentials Zeroheight (ClientId et AccessToken)
- **Non industrialisable** pour un SI conséquent avec des dizaines/centaines de projets
- Risque de sécurité : credentials exposés à tous les projets

### Environnement Technique

- **Projets consommateurs** : Hébergés sur **Azure DevOps** avec pipelines CI/CD actifs
- **Design System** : Monorepo GitHub `AxaFrance/design-system`
- **Packages à tracker** :
  - `@axa-fr/canopee-react` (distributeur/prospect/client)
  - `@axa-fr/canopee-css`
  - Legacy : `@axa-fr/slash-react`, `@axa-fr/slash-css`, `@axa-fr/apollo-react`, `@axa-fr/apollo-css`
- **Credentials Zeroheight** : ClientId et AccessToken générés, ne doivent **pas** être visibles par les projets consommateurs

### Objectifs

1. **Automatiser** la collecte de métriques (intégration CI/CD)
2. **Sécuriser** les credentials (pas d'exposition aux projets)
3. **Faciliter** l'adoption (déploiement simple pour les projets)
4. **Centraliser** la maintenance (updates sans intervention sur chaque projet)

---

## Decision

Nous proposons une **solution hybride en 3 composants** :

### 1. Gestion des Secrets : Azure Key Vault + Variable Groups

**Choix** : Option A (recommandée parmi 4 options analysées)

**Architecture** :

```
Azure Key Vault (central AXA)
    ↓ (Link)
Variable Group "DesignSystem-Metrics" (Azure DevOps)
    ↓ (Référence)
Pipeline projet consommateur
```

**Implémentation** :

- Stocker `zeroheight-client-id` et `zeroheight-access-token` dans Azure Key Vault
- Créer Variable Group `DesignSystem-Metrics` lié au Key Vault
- Projets référencent le Variable Group sans voir les secrets

**Alternatives considérées** :

- **Option B** : Package npm privé avec credentials (❌ Rejeté : sécurité faible, non-compliance)
- **Option C** : Service Proxy centralisé (🟡 Overkill : complexité élevée, pertinent si 100+ projets)
- **Option D** : Package npm public + ENV variables (✅ Bon compromis, retenu comme fallback)

### 2. Déploiement : Template YAML Azure Pipeline Réutilisable

**Choix** : Option A (recommandée parmi 4 options analysées)

**Architecture** :

```yaml
# Template dans repo GitHub design-system
.azure-pipelines/templates/zeroheight-metrics.yml

# Projet consommateur (3 lignes)
resources:
  repositories:
    - repository: design-system
      type: github
      endpoint: AxaFranceGitHub
      name: AxaFrance/design-system
      ref: refs/tags/metrics-v1.0.0

variables:
  - group: DesignSystem-Metrics

steps:
  - template: .azure-pipelines/templates/zeroheight-metrics.yml@design-system
```

**Implémentation** :

- Template exécute `@zeroheight/adoption-cli auth` + `monitor-repo` + `analyze`
- Variables injectées via Variable Group
- Maintenance centralisée dans le repo design-system

**Alternatives considérées** :

- **Option B** : Package npm avec script (✅ Retenu comme complément pour tests locaux)
- **Option C** : Azure DevOps Extension/Task custom (🟡 Overkill : développement complexe)
- **Option D** : Documentation copy-paste (⚠️ Fallback uniquement : aucune maintenance centralisée)

### 3. Distribution du Template : GitHub Repository Resources

**Choix** : Option 1 (recommandée parmi 5 options analysées)

**Architecture** :

- Template hébergé dans repo GitHub `AxaFrance/design-system`
- Projets Azure DevOps y accèdent via **Service Connection GitHub**
- Versioning via tags Git (`refs/tags/metrics-v1.0.0`)

**Implémentation** :

1. Créer Service Connection GitHub `AxaFranceGitHub` dans Azure DevOps (une fois)
2. Créer tags Git pour versioning du template
3. Projets référencent le template via `resources.repositories`

**Alternatives considérées** :

- **Option 2** : Azure Repos dédié (✅ Alternative si Service Connection bloquée)
- **Option 3** : Package npm avec templates (🟡 Pas optimal : génération dynamique non-standard)
- **Option 4** : Copy-paste documentation (⚠️ Fallback uniquement)
- **Option 5** : Hybride - Sync GitHub → Azure Repos (✅ Alternative si politique stricte)

### 4. Package npm Wrapper (Composant Complémentaire)

**Création de `@axa-fr/canopee-metrics`** (package npm public) :

- Wrapper CLI autour de `@zeroheight/adoption-cli`
- Commandes : `auth`, `monitor`, `analyze`, `collect` (all-in-one)
- Lecture credentials depuis variables ENV
- **Usages** :
  - Tests locaux en développement
  - Fallback pour plateformes non-Azure
  - Exécution manuelle ponctuelle

---

## Consequences

### Positif

#### Sécurité

- ✅ **Credentials centralisés** : Azure Key Vault = rotation facile, audit trails, conformité
- ✅ **Zero-trust** : Projets ne voient jamais les secrets
- ✅ **Permissions granulaires** : Contrôle d'accès par projet/équipe

#### Adoption et Maintenance

- ✅ **Déploiement minimal** : 3-5 lignes YAML pour intégrer un projet
- ✅ **Maintenance centralisée** : Update template → propagation automatique à tous projets
- ✅ **Versioning flexible** : Projets choisissent `latest` ou version stable via tags Git
- ✅ **Documentation intégrée** : YAML auto-documenté + guide INTEGRATION.md
- ✅ **Non-bloquant** : Échecs de collecte métriques ne cassent jamais les builds projets

#### Scalabilité

- ✅ **Industrialisable** : Déploiement sur dizaines/centaines de projets sans effort
- ✅ **Automatisation complète** : Métriques collectées à chaque build sans intervention
- ✅ **Multi-plateforme** : Package npm fonctionne aussi sur GitHub Actions/GitLab

#### Visibilité

- ✅ **Métriques fraîches** : Collecte à chaque build = données à jour
- ✅ **Tracking complet** : Tous packages Canopée + legacy Apollo/Slash
- ✅ **Adoption visible** : Dashboard Zeroheight centralisant toutes les données

### Négatif

#### Infrastructure

- ⚠️ **Configuration initiale Azure requise** :
  - Azure Key Vault (peut être existant)
  - Service Connection GitHub dans Azure DevOps
  - Permissions à configurer
- ⚠️ **Dépendance Azure** : Key Vault et Variable Groups spécifiques à l'écosystème Azure
- ⚠️ **Dépendance GitHub** : Si GitHub down, nouveaux pipelines ne peuvent pas charger le template (rare)

#### Maintenance

- ⚠️ **Nouvelle responsabilité** : L'équipe Design System doit maintenir :
  - Template Azure Pipeline (`.azure-pipelines/templates/zeroheight-metrics.yml`)
  - Package npm wrapper (`@axa-fr/canopee-metrics`)
  - Documentation INTEGRATION.md
  - Support projets consommateurs
  - **Monitoring erreurs silencieuses** : Dashboard pour identifier projets avec échecs collecte
- ⚠️ **Versioning à gérer** : Tags Git pour releases template + versions npm package
- ⚠️ **Breaking changes** : Updates template peuvent nécessiter migration projets (minimisé par versioning)
- ⚠️ **Erreurs silencieuses** : `continueOnError: true` peut masquer problèmes (mitigation : monitoring centralisé)

#### Complexité

- ⚠️ **Architecture multi-composants** : Template + Package npm + Azure infra
- ⚠️ **Courbe d'apprentissage** : Équipes doivent comprendre :
  - Syntaxe Azure Pipelines (déjà connue chez AXA)
  - Référencement template depuis autre repo
  - Variable Groups
- ⚠️ **Debugging distribué** : Erreurs peuvent venir du template, des credentials, ou de Zeroheight

#### Coûts

- ⚠️ **Temps pipeline** : Ajout ~30s-1min par build (acceptable)
- ⚠️ **Appels API Zeroheight** : Possible rate limiting si builds très fréquents (monitoring requis)

### Risques Identifiés et Mitigations

| Risque                                                | Probabilité | Impact   | Mitigation                                                              |
| ----------------------------------------------------- | ----------- | -------- | ----------------------------------------------------------------------- |
| Service Connection GitHub refusée par politique AXA   | Moyen       | Élevé    | Fallback : Option 2 (Azure Repos) ou Option 5 (Sync hybride)            |
| Credentials Zeroheight exposés dans logs pipeline     | Faible      | Critique | Variables masquées par défaut dans Azure DevOps, tests automatisés      |
| Template incompatible avec certains projets           | Moyen       | Moyen    | Parameters configurables, documentation troubleshooting, support        |
| Zeroheight API rate limiting                          | Faible      | Moyen    | Monitoring, throttling intelligent dans wrapper                         |
| Projets ne veulent pas ajouter étape                  | Moyen       | Élevé    | Communication bénéfices, déploiement progressif, assistance             |
| Erreurs collecte passent inaperçues (continueOnError) | Moyen       | Faible   | Dashboard monitoring erreurs, alertes si échecs répétés sur même projet |

### Métriques de Succès

**Phase Pilote (3 projets, 1 semaine)** :

- ✅ Template intégré sans erreur
- ✅ Temps ajouté < 1 minute
- ✅ Métriques visibles dans Zeroheight
- ✅ 0 incident sécurité

**Rollout (1 mois)** :

- ✅ 80%+ projets actifs intégrés
- ✅ 100% packages trackés visibles
- ✅ Métriques à jour à chaque build

---

## Plan d'Implémentation

### Phase 1 : Infrastructure Secrets (1-2 jours)

**Responsable** : Équipe Design System + Infra Azure

1. **Azure Key Vault**
   - Créer/identifier Key Vault AXA existant
   - Ajouter secrets : `zeroheight-client-id`, `zeroheight-access-token`
   - Permissions lecture pour Service Principal Azure DevOps

2. **Variable Group**
   - Organisation AXA → Library → New Variable Group `DesignSystem-Metrics`
   - Link to Azure Key Vault
   - Mapping : `ZEROHEIGHT_CLIENT_ID` → `zeroheight-client-id`, `ZEROHEIGHT_ACCESS_TOKEN` → `zeroheight-access-token`
   - Permissions : Autoriser accès pipelines

3. **Test**
   - Pipeline test Azure DevOps
   - Vérifier variables disponibles (masquées dans logs)

### Phase 2 : Template Azure Pipeline (2-3 jours)

**Responsable** : Équipe Design System

1. **Structure**

   ```
   .azure-pipelines/
     templates/
       zeroheight-metrics.yml
     docs/
       INTEGRATION.md
   ```

2. **Template `zeroheight-metrics.yml`**
   - Parameters : `variableGroup` (default), `packagesToTrack` (optionnel)
   - Steps :
     1. Setup Node.js 20+
     2. Auth Zeroheight CLI
     3. `monitor-repo --send` (versions packages)
     4. `analyze --send` (usage composants)
     5. **Gestion erreurs : `continueOnError: true`** — Erreurs loggées mais build continue
   - Outputs : Logs avec résumé métriques envoyées (succès) ou erreur détaillée (échec)
   - **Criticité** : Step non-bloquant, ne fait jamais échouer le pipeline parent

3. **Documentation `INTEGRATION.md`**
   - Guide copy-paste pour projets
   - Pré-requis, troubleshooting, FAQ

4. **Tests**
   - Repo test Azure DevOps
   - Intégration template → vérif métriques Zeroheight
   - **Tests erreurs** : Credentials invalides, timeout Zeroheight, repo sans design system
   - **Vérifier continueOnError** : Build réussit même si collecte échoue, erreur visible dans logs

### Phase 3 : Package npm Wrapper (2-3 jours, parallèle Phase 2)

**Responsable** : Équipe Design System

1. **Créer `packages/canopee-metrics/`**

   ```
   package.json
   src/
     index.ts       # CLI Commander.js
     auth.ts        # Wrapper auth
     monitor.ts     # Wrapper monitor-repo
     analyze.ts     # Wrapper analyze
     config.ts      # Config optionnelle
   bin/
     canopee-metrics.js
   __tests__/
     cli.test.ts
   ```

2. **Fonctionnalités**
   - Commandes : `auth`, `monitor`, `analyze`, `collect`
   - Lecture ENV : `ZEROHEIGHT_CLIENT_ID`, `ZEROHEIGHT_ACCESS_TOKEN`
   - Validation, logs, config optionnelle

3. **Publication**
   - Build TypeScript → ESM + CJS
   - `npm publish @axa-fr/canopee-metrics@1.0.0` (public)

4. **Documentation README.md**
   - Installation : `npx @axa-fr/canopee-metrics collect`
   - Variables ENV, intégration CI/CD, examples

### Phase 4 : Déploiement Pilote (1 semaine)

**Responsable** : Équipe Design System + 3 équipes pilotes

1. **Identifier 3 projets pilotes**
   - 1 Distributeur, 1 Prospect/Client, 1 legacy Apollo/Slash
   - Diversité : tailles, équipes différentes

2. **Intégrer template**
   - Référence repo design-system
   - Ajout template dans pipeline
   - Permissions Variable Group

3. **Feedback & Itération**
   - Temps pipeline, problèmes, suggestions
   - Ajustements template/documentation
   - Fix bugs

### Phase 5 : Rollout AXA-wide (2-4 semaines)

**Responsable** : Équipe Design System

1. **Communication**
   - Email annonce + bénéfices
   - Guide intégration (lien INTEGRATION.md)
   - Session Q&A Teams
   - Channel support Slack/Teams

2. **Déploiement par vagues**
   - Semaine 1 : Early adopters (~10 projets)
   - Semaine 2 : Projets actifs DS (~30 projets)
   - Semaine 3-4 : Tous projets restants

3. **Monitoring**
   - Dashboard Zeroheight métriques agrégées
   - Identification projets non-intégrés
   - **Dashboard erreurs collecte** : Identifier projets avec échecs répétés (query logs Azure DevOps)
   - Alertes automatiques si projet échoue collecte > 3 builds consécutifs
   - Follow-up individuel si blocage ou erreurs persistantes

4. **Finalisation ADR**
   - Update status : Proposed → Accepted
   - Retours d'expérience rollout
   - Lessons learned

---

## Fichiers Concernés

### À créer

- `.azure-pipelines/templates/zeroheight-metrics.yml` — Template Azure Pipeline réutilisable
- `.azure-pipelines/docs/INTEGRATION.md` — Guide intégration projets consommateurs
- `packages/canopee-metrics/` — Package npm wrapper CLI
  - `package.json`, `src/`, `bin/`, `__tests__/`, `README.md`

### À modifier

- `package.json` (racine) — Ajouter workspace `packages/canopee-metrics`
- `turbo.json` — Ajouter task `metrics` (optionnel, pour local)
- `docs/decision-records/0006-zeroheight-metrics-automation.md` — Ce fichier (status update)

---

## Alternatives Complètes Analysées

### Gestion des Secrets (4 options)

| Option                                   | Avantages                                             | Inconvénients                                                    | Verdict                       |
| ---------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------- |
| **A. Azure Key Vault + Variable Groups** | ✅ Sécurité max<br>✅ Standard AXA<br>✅ Audit trails | ⚠️ Config Azure requise<br>⚠️ Dépendance infra                   | ⭐ **RECOMMANDÉ**             |
| **B. Package npm privé**                 | ✅ Simple déploiement<br>✅ Pas config Azure          | ❌ Sécurité faible<br>❌ Rotation difficile<br>❌ Non-compliance | ⛔ **REJETÉ**                 |
| **C. Service Proxy**                     | ✅ Sécurité max<br>✅ Contrôle total                  | ⚠️ Complexité élevée<br>⚠️ Coût infra<br>⚠️ Délai dev            | 🟡 Overkill (si 100+ projets) |
| **D. Package npm public + ENV**          | ✅ Équilibre sécurité/simplicité<br>✅ Transparent    | ⚠️ Credentials logs si mal config                                | ✅ Bon compromis (fallback)   |

### Mode de Déploiement (4 options)

| Option                            | Avantages                                                                          | Inconvénients                                           | Verdict                          |
| --------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------- |
| **A. Template YAML réutilisable** | ✅ Adoption minimale (3 lignes)<br>✅ Maintenance centralisée<br>✅ Standard Azure | ⚠️ Syntaxe Azure Pipelines                              | ⭐ **RECOMMANDÉ**                |
| **B. Package npm**                | ✅ Multi-plateforme<br>✅ Testable localement                                      | ⚠️ Versioning manuel projets                            | ✅ Complémentaire (tests locaux) |
| **C. Extension Azure DevOps**     | ✅ UX maximale GUI<br>✅ Validation inputs                                         | ❌ Dev complexe<br>❌ Lock-in Azure<br>❌ Délai         | 🟡 Overkill MVP                  |
| **D. Documentation copy-paste**   | ✅ Zéro infra<br>✅ Flexibilité                                                    | ❌ Maintenance dispersée<br>❌ Divergence<br>❌ Erreurs | ⚠️ Fallback uniquement           |

### Distribution Template (5 options)

| Option                             | Avantages                                                                  | Inconvénients                                         | Verdict                            |
| ---------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| **1. GitHub Repository Resources** | ✅ Maintenance centralisée<br>✅ Versioning Git<br>✅ Source unique vérité | ⚠️ Service Connection requise<br>⚠️ Dépendance GitHub | ⭐ **RECOMMANDÉ**                  |
| **2. Azure Repos dédié**           | ✅ Natif Azure<br>✅ Pas Service Connection                                | ⚠️ Repo supplémentaire<br>⚠️ Sync manuelle            | ✅ Alternative (si SC bloquée)     |
| **3. Package npm + templates**     | ✅ Distribution npm                                                        | ❌ Pattern non-standard<br>❌ Génération dynamique    | 🟡 Pas optimal                     |
| **4. Copy-paste documentation**    | ✅ Zéro infra                                                              | ❌ Maintenance dispersée<br>❌ Divergence garantie    | ⚠️ Fallback uniquement             |
| **5. Hybride Sync GitHub → Azure** | ✅ Source unique<br>✅ Consommation native                                 | ⚠️ Complexité archi<br>⚠️ PAT à maintenir             | ✅ Alternative (politique stricte) |

**Tableau comparatif détaillé (Distribution)** :

| Critère                   | Option 1<br>(GitHub)  | Option 2<br>(Azure Repos) | Option 3<br>(npm)       | Option 4<br>(Copie) | Option 5<br>(Hybride) |
| ------------------------- | --------------------- | ------------------------- | ----------------------- | ------------------- | --------------------- |
| Maintenance centralisée   | ✅✅✅                | ✅✅✅                    | ✅                      | ❌                  | ✅✅✅                |
| Facilité setup initial    | ⚠️ Service Connection | ✅✅                      | ✅✅                    | ✅✅✅              | ⚠️ Workflow sync      |
| Facilité adoption projets | ✅✅                  | ✅✅✅                    | ⚠️                      | ✅                  | ✅✅✅                |
| Versioning                | ✅✅✅ Git tags       | ✅✅✅ Git tags           | ✅✅ npm semver         | ❌                  | ✅✅✅ Git tags       |
| Standard Azure            | ✅✅✅                | ✅✅✅                    | ⚠️                      | ❌                  | ✅✅✅                |
| Source de vérité          | GitHub                | Azure Repos               | Package                 | Dispersé            | GitHub (sync)         |
| Complexité infra          | ⚠️ Service Connection | Repo dédié                | ❌ Génération dynamique | ✅ Aucune           | ⚠️⚠️ Sync workflow    |
| Lock-in Azure             | ❌ Portable           | ✅✅ Fort                 | ❌ Portable             | ❌ Portable         | ⚠️ Hybride            |

---

## Considérations Futures

### Si Scaling Massif (100+ projets)

- Envisager **Service Proxy centralisé** (Option C secrets) pour :
  - Contrôle centralisé et rate limiting
  - Enrichissement données (metadata projets, propriétaires)
  - Dashboard custom AXA agrégeant Zeroheight + npm stats + GitHub traffic

### Si Adoption GitHub Actions

- Créer **GitHub Action réutilisable** (équivalent template Azure)
- Secrets via GitHub Organization Secrets
- Même package npm wrapper compatible

### Si Analytics Avancés

- Exporter données Zeroheight → Data Lake AXA
- Corrélation métriques : adoption × incidents × satisfaction utilisateurs × vélocité
- BI/Reporting avec Power BI ou équivalent

### Maintenance Long-Terme

- **Responsable** : Équipe Design System
- **Fréquence review** : Trimestrielle
- **Updates** : Suivre releases `@zeroheight/adoption-cli`
- **Monitoring** :
  - Dashboard projets non-intégrés
  - **Dashboard erreurs collecte** : Projets avec échecs répétés (query logs Azure DevOps)
  - Alertes automatiques : Échecs > 3 builds consécutifs sur même projet
  - Métriques adoption globales
  - **Taux de succès collecte** : Cible > 95% des builds avec métriques envoyées

---

## Références

- [Zeroheight Package Version Monitoring](https://help.zeroheight.com/hc/en-us/articles/35887048538523-Package-version-monitoring)
- [Zeroheight Component Usage](https://help.zeroheight.com/hc/en-us/articles/35887034128795-Measure-usage-of-Angular-and-React-components)
- [Zeroheight Adoption CLI (@zeroheight/adoption-cli)](https://www.npmjs.com/package/@zeroheight/adoption-cli)
- [Azure DevOps Template Resources](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates)
- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
- [Azure DevOps Variable Groups](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups)
- [GitHub Service Connections](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml#github-service-connection)
