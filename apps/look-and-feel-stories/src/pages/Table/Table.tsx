/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable-next-line import/no-extraneous-dependencies */
import React, {
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  Button,
  DebugGrid,
  Dropdown,
  Pagination,
  Table,
  TableMobileCard,
  Tag,
  Heading,
} from "@axa-fr/canopee-react/client";

const useIsSmallScreen = (breakPointToCheck: number) => {
  const subscribe = useCallback((listener: () => void) => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    return window.innerWidth <= breakPointToCheck;
  }, [breakPointToCheck]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

interface DataRow {
  id: number;
  reference: string;
  societe: string;
  contact: string;
  email: string;
  telephone: string;
  montant: number;
  statut: "Validé" | "En attente" | "Rejeté" | "En cours";
  date: string;
}

const ALL_DATA: DataRow[] = [
  {
    id: 1,
    reference: "CON-2024-001",
    societe: "Société ABC",
    contact: "Jean Dupont",
    email: "jean.dupont@abc.fr",
    telephone: "06 12 34 56 78",
    montant: 1250.0,
    statut: "Validé",
    date: "15/01/2024",
  },
  {
    id: 2,
    reference: "CON-2024-002",
    societe: "Entreprise XYZ",
    contact: "Marie Martin",
    email: "marie.martin@xyz.fr",
    telephone: "06 98 76 54 32",
    montant: 2500.0,
    statut: "En attente",
    date: "22/03/2024",
  },
  {
    id: 3,
    reference: "CON-2024-003",
    societe: "Groupe DEF",
    contact: "Pierre Bernard",
    email: "pierre.bernard@def.fr",
    telephone: "06 11 22 33 44",
    montant: 3750.0,
    statut: "Rejeté",
    date: "10/06/2024",
  },
  {
    id: 4,
    reference: "CON-2024-004",
    societe: "Industries GHI",
    contact: "Sophie Dubois",
    email: "sophie.dubois@ghi.fr",
    telephone: "06 55 66 77 88",
    montant: 890.0,
    statut: "En cours",
    date: "05/09/2024",
  },
  {
    id: 5,
    reference: "CON-2024-005",
    societe: "Services JKL",
    contact: "Luc Moreau",
    email: "luc.moreau@jkl.fr",
    telephone: "06 22 33 44 55",
    montant: 1780.0,
    statut: "Validé",
    date: "12/11/2024",
  },
  {
    id: 6,
    reference: "CON-2024-006",
    societe: "Tech MNO",
    contact: "Claire Petit",
    email: "claire.petit@mno.fr",
    telephone: "06 77 88 99 00",
    montant: 4200.0,
    statut: "En attente",
    date: "28/12/2024",
  },
  {
    id: 7,
    reference: "CON-2024-007",
    societe: "Solutions PQR",
    contact: "Marc Lefebvre",
    email: "marc.lefebvre@pqr.fr",
    telephone: "06 33 44 55 66",
    montant: 920.0,
    statut: "Validé",
    date: "03/01/2025",
  },
  {
    id: 8,
    reference: "CON-2024-008",
    societe: "Digital STU",
    contact: "Anne Rousseau",
    email: "anne.rousseau@stu.fr",
    telephone: "06 44 55 66 77",
    montant: 1560.0,
    statut: "En cours",
    date: "18/02/2025",
  },
  {
    id: 9,
    reference: "CON-2024-009",
    societe: "Consulting VWX",
    contact: "Thomas Garnier",
    email: "thomas.garnier@vwx.fr",
    telephone: "06 88 99 00 11",
    montant: 3100.0,
    statut: "Validé",
    date: "25/03/2025",
  },
  {
    id: 10,
    reference: "CON-2024-010",
    societe: "Innovation YZ",
    contact: "Julie Faure",
    email: "julie.faure@yz.fr",
    telephone: "06 99 00 11 22",
    montant: 2890.0,
    statut: "En attente",
    date: "07/04/2025",
  },
  {
    id: 11,
    reference: "CON-2024-011",
    societe: "Partners AB",
    contact: "Vincent Leroux",
    email: "vincent.leroux@ab.fr",
    telephone: "06 00 11 22 33",
    montant: 1450.0,
    statut: "Rejeté",
    date: "14/05/2025",
  },
  {
    id: 12,
    reference: "CON-2024-012",
    societe: "Business CD",
    contact: "Isabelle Simon",
    email: "isabelle.simon@cd.fr",
    telephone: "06 11 22 33 44",
    montant: 3680.0,
    statut: "Validé",
    date: "22/06/2025",
  },
  {
    id: 13,
    reference: "CON-2024-013",
    societe: "Global EF",
    contact: "Nicolas Laurent",
    email: "nicolas.laurent@ef.fr",
    telephone: "06 22 33 44 55",
    montant: 2100.0,
    statut: "En cours",
    date: "30/07/2025",
  },
  {
    id: 14,
    reference: "CON-2024-014",
    societe: "Pro GH",
    contact: "Sandrine Michel",
    email: "sandrine.michel@gh.fr",
    telephone: "06 33 44 55 66",
    montant: 1890.0,
    statut: "En attente",
    date: "08/08/2025",
  },
  {
    id: 15,
    reference: "CON-2024-015",
    societe: "Expert IJ",
    contact: "Julien Leroy",
    email: "julien.leroy@ij.fr",
    telephone: "06 44 55 66 77",
    montant: 4500.0,
    statut: "Validé",
    date: "15/09/2025",
  },
];

const STATUS_VARIANTS: Record<
  DataRow["statut"],
  "success" | "warning" | "error" | "info"
> = {
  Validé: "success",
  "En attente": "warning",
  Rejeté: "error",
  "En cours": "info",
};

const getStatusTag = (statut: DataRow["statut"]) => (
  <Tag variant={STATUS_VARIANTS[statut]}>{statut}</Tag>
);

type SortConfig = { key: keyof DataRow; direction: "asc" | "desc" } | null;

export const TablePage = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [checkedColumns, setCheckedColumns] = useState<Set<number>>(
    () => new Set(),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const isMobile = useIsSmallScreen(667);

  const handleSort = useCallback((key: keyof DataRow) => {
    setSortConfig((prev) => {
      const direction: "asc" | "desc" =
        prev?.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
    setCurrentPage(1);
  }, []);

  const handleColumnCheck = useCallback((columnIndex: number) => {
    setCheckedColumns((prev) => {
      const next = new Set(prev);
      next.has(columnIndex) ? next.delete(columnIndex) : next.add(columnIndex);
      return next;
    });
  }, []);

  const getColumnVariant = useCallback(
    (columnIndex: number) => {
      return checkedColumns.has(columnIndex) ? "blue" : undefined;
    },
    [checkedColumns],
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return ALL_DATA;

    const { key, direction } = sortConfig;

    return [...ALL_DATA].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      // numbers
      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      // everything else as string
      const aStr = String(aValue);
      const bStr = String(bValue);
      return direction === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [sortConfig]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(sortedData.length / itemsPerPage)),
    [sortedData.length, itemsPerPage],
  );

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage]);

  const handlePageChange = useCallback(
    (page: number) => setCurrentPage(page),
    [],
  );

  const handleItemsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
      setCurrentPage(1);
    },
    [],
  );

  return (
    <>
      <DebugGrid isCheckedByDefault forceVisible />
      <main className="grid table-page">
        <section className="table-page__content subgrid">
          <Heading level={1}>Liste des produits</Heading>
          {!isMobile && (
            <>
              <div className="table-page__dropdown">
                <Dropdown
                  id="items-per-page"
                  label="Nombre de ligne"
                  value={itemsPerPage.toString()}
                  onChange={handleItemsPerPageChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </Dropdown>
              </div>

              <div className="table-scroll">
                <Table>
                  <Table.THead>
                    <Table.Tr>
                      <Table.Th
                        onCheck={() => handleColumnCheck(0)}
                        onSort={() => handleSort("reference")}
                      >
                        Référence
                      </Table.Th>
                      <Table.Th
                        onCheck={() => handleColumnCheck(1)}
                        onSort={() => handleSort("societe")}
                      >
                        Société
                      </Table.Th>
                      <Table.Th
                        onCheck={() => handleColumnCheck(2)}
                        onSort={() => handleSort("contact")}
                      >
                        Contact
                      </Table.Th>
                      <Table.Th
                        onCheck={() => handleColumnCheck(3)}
                        onSort={() => handleSort("montant")}
                      >
                        Montant
                      </Table.Th>
                      <Table.Th
                        onCheck={() => handleColumnCheck(4)}
                        onSort={() => handleSort("statut")}
                      >
                        Statut
                      </Table.Th>
                    </Table.Tr>
                  </Table.THead>

                  <Table.TBody variant="alternate">
                    {currentData.map((row) => (
                      <Table.Tr key={row.id} size="M">
                        <Table.Td variant={getColumnVariant(0)}>
                          {row.reference}
                        </Table.Td>
                        <Table.Td variant={getColumnVariant(1)}>
                          {row.societe}
                        </Table.Td>
                        <Table.Td variant={getColumnVariant(2)}>
                          {row.contact}
                        </Table.Td>
                        <Table.Td
                          position="right"
                          variant={getColumnVariant(3)}
                        >
                          {row.montant.toFixed(2)} €
                        </Table.Td>
                        <Table.Td variant={getColumnVariant(4)}>
                          {getStatusTag(row.statut)}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.TBody>
                </Table>
              </div>

              <Pagination
                numberPages={totalPages}
                currentPage={currentPage}
                onChangePage={handlePageChange}
                asItem={Button}
                className="table-page__pagination"
              />
            </>
          )}

          {isMobile ? (
            <>
              {sortedData.map((elem) => (
                <TableMobileCard key={elem.id}>
                  <TableMobileCard.DRow>
                    <TableMobileCard.Dt>Référence</TableMobileCard.Dt>
                    <TableMobileCard.Dd>{elem.reference}</TableMobileCard.Dd>
                  </TableMobileCard.DRow>

                  <TableMobileCard.DRow>
                    <TableMobileCard.Dt>Société</TableMobileCard.Dt>
                    <TableMobileCard.Dd>{elem.societe}</TableMobileCard.Dd>
                  </TableMobileCard.DRow>

                  <TableMobileCard.DRow>
                    <TableMobileCard.Dt>Contact</TableMobileCard.Dt>
                    <TableMobileCard.Dd>{elem.contact}</TableMobileCard.Dd>
                  </TableMobileCard.DRow>

                  <TableMobileCard.DRow>
                    <TableMobileCard.Dt>Montant</TableMobileCard.Dt>
                    <TableMobileCard.Dd>
                      {elem.montant.toFixed(2)} €
                    </TableMobileCard.Dd>
                  </TableMobileCard.DRow>

                  <TableMobileCard.DRow>
                    <TableMobileCard.Dt>Status</TableMobileCard.Dt>
                    <TableMobileCard.Dd>
                      {getStatusTag(elem.statut)}
                    </TableMobileCard.Dd>
                  </TableMobileCard.DRow>
                </TableMobileCard>
              ))}
            </>
          ) : null}
        </section>
      </main>
    </>
  );
};
