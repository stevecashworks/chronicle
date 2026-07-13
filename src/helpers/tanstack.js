import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

// 1. Define your data structure
const columnHelper = createColumnHelper();

// 2. Define Column Definitions (with custom cell rendering and filtering)
export const columns = [
  // Selection Column
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        aria-label={`Select row ${row.id}`}
      />
    ),
  }),
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => <strong>{info.getValue()}</strong>,
  }),
  columnHelper.accessor('role', {
    header: 'Role',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    enableSorting: false, // Disable sorting for this column
  }),
];

// 3. Main Hook / Logic Wrapper
export function useHeadlessTable({ data, externalState = {}, onStateChange }) {
  // Local UI State (Fallback if not controlled externally)
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: externalState.sorting ?? sorting,
      globalFilter: externalState.globalFilter ?? globalFilter,
      rowSelection: externalState.rowSelection ?? rowSelection,
      columnVisibility: externalState.columnVisibility ?? columnVisibility,
      pagination: externalState.pagination ?? pagination,
    },
    // Handle state updates natively or forward them to a parent listener
    onSortingChange: onStateChange?.setSorting ?? setSorting,
    onGlobalFilterChange: onStateChange?.setGlobalFilter ?? setGlobalFilter,
    onRowSelectionChange: onStateChange?.setRowSelection ?? setRowSelection,
    onColumnVisibilityChange: onStateChange?.setColumnVisibility ?? setColumnVisibility,
    onPaginationChange: onStateChange?.setPagination ?? setPagination,
    
    // Core Logic Row Models
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return table;
}