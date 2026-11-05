// Messages exchanged between the plugin (src/code.ts) and its interface
// (src/ui/main.ts). Both sides import these types: a message type renamed on
// one side only no longer compiles. The types of the messages keep their
// names in French, as the interface and the tests write them.

import type { IssueDetail } from "./types";

// A sentence of the Changements tab: a text, or the touched variants as a title then their changes.
export type Sentence = string | { title: string; lines: string[] };

// The component card: name, variants, properties and last stored version.
export interface Card {
  id: string;
  name: string;
  variants: number;
  properties: number;
  viaInstance: boolean;
  latestVersion: string | null;
}

// The version as the interface displays it.
export interface VersionView {
  first: boolean;
  none: boolean;
  current: string | null;
  version: string;
  level: string | null;
  detected: string | null;
  tokensVersion: string | null;
  kept: boolean;
  next: string | null;
}

// Key figures of the generated JSON.
export interface Summary {
  variants: number;
  properties: number;
  variables: number;
  textStylesCount: number;
  overrides: number;
  kb: number;
}

// ------------------------------------------------------- interface to plugin

export type UiToPluginMessage =
  | { type: "ui-pret" }
  | { type: "controler" }
  | { type: "generer" }
  | { type: "memoriser"; id: string | null }
  | {
      type: "choisir-version";
      id: string | null;
      keep: boolean;
      overhaul: boolean;
      sheetMd: boolean;
    }
  | { type: "selectionner"; ids: string[]; id?: string | null }
  | { type: "redimensionner"; height: number }
  | { type: "redimensionner-manuel"; width: number; height: number }
  | { type: "taille-auto" };

// ------------------------------------------------------- plugin to interface

export type PluginToUiMessage =
  | { type: "init"; version: string; format: string }
  | { type: "regles"; warning: string }
  | { type: "selection"; name: null }
  | ({ type: "selection" } & Card)
  | { type: "controle"; id: string | null; issues: IssueDetail[] }
  | { type: "progression"; done: number; total: number }
  | {
      type: "fiche";
      id: string;
      json: string;
      file: string;
      changelogFile: string;
      issues: IssueDetail[];
      summary: Summary;
      changes: { sentences: Sentence[] } | null;
      version: VersionView;
      changelog: string;
    }
  | { type: "perime"; id: string }
  | ({ type: "carte" } & Card)
  | {
      type: "version";
      id: string;
      json: string;
      version: VersionView;
      changelog: string;
    }
  | { type: "recalculer-hauteur" }
  | { type: "erreur"; message: string };
