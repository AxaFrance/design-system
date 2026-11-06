export type DataRow = {
  id: number;
  libelle: string;
  date: string;
  statut: "Remboursé" | "En attente" | "Refusé" | "En cours";
  montant: number;
};

export const ALL_DATA: DataRow[] = [
  {
    id: 1,
    libelle: "Consultation médecin généraliste",
    date: "25/10/2026",
    statut: "En cours",
    montant: 9,
  },
  {
    id: 2,
    libelle: "Soins dentaires",
    date: "22/10/2026",
    statut: "En attente",
    montant: 36,
  },
  {
    id: 3,
    libelle: "Consultation ophtalmologue",
    date: "18/10/2026",
    statut: "Remboursé",
    montant: 25,
  },
  {
    id: 4,
    libelle: "Analyses de laboratoire",
    date: "15/10/2026",
    statut: "Remboursé",
    montant: 18.5,
  },
  {
    id: 5,
    libelle: "Séance d'ostéopathie",
    date: "12/10/2026",
    statut: "Refusé",
    montant: 50,
  },
  {
    id: 6,
    libelle: "Médicaments en pharmacie",
    date: "08/10/2026",
    statut: "Remboursé",
    montant: 7.8,
  },
  {
    id: 7,
    libelle: "Séance de kinésithérapie",
    date: "05/10/2026",
    statut: "Remboursé",
    montant: 16.13,
  },
  {
    id: 8,
    libelle: "Consultation dermatologue",
    date: "28/09/2026",
    statut: "Remboursé",
    montant: 30,
  },
  {
    id: 9,
    libelle: "Équipement optique",
    date: "22/09/2026",
    statut: "Remboursé",
    montant: 150,
  },
  {
    id: 10,
    libelle: "Radiographie",
    date: "15/09/2026",
    statut: "Remboursé",
    montant: 24.5,
  },
  {
    id: 11,
    libelle: "Consultation médecin généraliste",
    date: "10/09/2026",
    statut: "Remboursé",
    montant: 9,
  },
  {
    id: 12,
    libelle: "Détartrage dentaire",
    date: "03/09/2026",
    statut: "Remboursé",
    montant: 12.68,
  },
  {
    id: 13,
    libelle: "Consultation cardiologue",
    date: "25/08/2026",
    statut: "Remboursé",
    montant: 35,
  },
  {
    id: 14,
    libelle: "Soins infirmiers",
    date: "18/08/2026",
    statut: "Remboursé",
    montant: 8.5,
  },
  {
    id: 15,
    libelle: "Médicaments en pharmacie",
    date: "10/08/2026",
    statut: "Remboursé",
    montant: 5.2,
  },
];

export const STATUS_VARIANTS: Record<
  DataRow["statut"],
  "success" | "warning" | "error" | "info"
> = {
  Remboursé: "success",
  "En attente": "warning",
  Refusé: "error",
  "En cours": "info",
};
