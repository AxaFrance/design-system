# Table

## Overview
The Table component provides semantic HTML table structure with consistent styling. It includes sub-components for table sections (head, body) and cell types (header, data).

## Import
```tsx
import { Table } from "@axa-fr/canopee-react/distributeur";
```

## Components

### Table
Main table element.

### Table.THead
Section d'en-tête du tableau.

### Table.TBody
Section du corps du tableau.

### Table.Tr
Table row element.

### Table.Th
Table header cell with semantic meaning.

### Table.Td
Table data cell.

## Props

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `classModifier` | `string` | - | CSS modifier classes |

All standard HTML `<table>` attributes supported.

### Table.Tr, Table.Th, Table.Td

Standard HTML table cell props (`colspan`, `rowspan`, `scope`, etc.)

## Basic Usage

### Simple Table
```tsx
import { Table } from "@axa-fr/canopee-react/distributeur";

<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th>First Name</Table.Th>
      <Table.Th>Last Name</Table.Th>
      <Table.Th>Email</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td>John</Table.Td>
      <Table.Td>Doe</Table.Td>
      <Table.Td>john@example.com</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>Jane</Table.Td>
      <Table.Td>Smith</Table.Td>
      <Table.Td>jane@example.com</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

## Complete Data Table Example

```tsx
const UserTable = () => {
  const users = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Williams", role: "User", status: "Active" },
    { id: 3, name: "Carol Davis", role: "Editor", status: "Inactive" }
  ];
  
  return (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody>
        {users.map(user => (
          <Table.Tr key={user.id}>
            <Table.Td>{user.name}</Table.Td>
            <Table.Td>{user.role}</Table.Td>
            <Table.Td>{user.status}</Table.Td>
            <Table.Td>
              <button>Edit</button>
              <button>Delete</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table>
  );
};
```

## Colspan and Rowspan

### Column Spanning
```tsx
<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th colSpan={3}>Contact Information</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>First Name</Table.Th>
      <Table.Th>Last Name</Table.Th>
      <Table.Th>Email</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td>John</Table.Td>
      <Table.Td>Doe</Table.Td>
      <Table.Td>john@example.com</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

### Row Spanning
```tsx
<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th rowSpan={2}>Category</Table.Th>
      <Table.Th colSpan={2}>Details</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>Name</Table.Th>
      <Table.Th>Value</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td rowSpan={2}>Primary</Table.Td>
      <Table.Td>Item 1</Table.Td>
      <Table.Td>100</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>Item 2</Table.Td>
      <Table.Td>200</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

## Formatted Content

### With Bold Text
```tsx
<Table.Tr>
  <Table.Td><strong>Important Value</strong></Table.Td>
  <Table.Td>Regular Value</Table.Td>
</Table.Tr>
```

### With Links
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";

<Table.Tr>
  <Table.Td>
    <Link href="/profile/123">John Doe</Link>
  </Table.Td>
</Table.Tr>
```

### With Badges/Tags
```tsx
import { Tag } from "@axa-fr/canopee-react/distributeur";

<Table.Tr>
  <Table.Td>
    <Tag variant="success">Approved</Tag>
  </Table.Td>
</Table.Tr>
```

## Responsive Table

```tsx
const ResponsiveTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table>
        {/* Standard table structure */}
      </Table>
    </div>
  );
};
```

## Financial Data Table

```tsx
const FinancialReport = () => {
  const data = [
    { category: "Revenue", q1: "€50,000", q2: "€55,000", q3: "€60,000" },
    { category: "Expenses", q1: "€30,000", q2: "€32,000", q3: "€35,000" },
    { category: "Profit", q1: "€20,000", q2: "€23,000", q3: "€25,000" }
  ];
  
  return (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th scope="col">Category</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>Q1</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>Q2</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>Q3</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody>
        {data.map(row => (
          <Table.Tr key={row.category}>
            <Table.Th scope="row">{row.category}</Table.Th>
            <Table.Td style={{ textAlign: "right" }}>{row.q1}</Table.Td>
            <Table.Td style={{ textAlign: "right" }}>{row.q2}</Table.Td>
            <Table.Td style={{ textAlign: "right" }}>{row.q3}</Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table>
  );
};
```

## Pagination Integration

```tsx
import { Paging } from "@axa-fr/canopee-react/distributeur";

const PaginatedTable = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  
  const displayedItems = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  
  return (
    <>
      <Table>
        {/* Table with displayedItems */}
      </Table>
      <Paging
        currentPage={page}
        numberPages={Math.ceil(items.length / itemsPerPage)}
        onChange={(newPage) => setPage(newPage)}
      />
    </>
  );
};
```

## Accessibility
- Use `<th scope="col">` for column headers
- Use `<th scope="row">` for row headers
- Provide table caption or descriptive context
- Sufficient color contrast between cell content
- Meaningful column headers

## Best Practices
- Always include table head (`<THead>`)
- Use semantic header cells (`<Th>`) for column titles
- Keep tables readable (not too many columns)
- Consider responsive design for mobile
- Provide sorting/filtering for large datasets
- Use pagination for very large tables (50+ rows)
- Format numbers appropriately (right-aligned for currency/numbers)
- Include alternating row colors for large tables vs CSS

## CSS Classes
- `.af-table` - Base table class
- `.af-table--striped` - Alternating row colors
