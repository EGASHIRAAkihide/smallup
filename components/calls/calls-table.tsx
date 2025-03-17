"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

// Define the Call type
type Call = {
  id: string
  customer: string
  rep: string
  date: string
  duration: string
  score: number
  status: "analyzed" | "processing" | "failed"
  topics: string[]
}

// Sample data
const data: Call[] = [
  {
    id: "CALL-1234",
    customer: "Acme Corp",
    rep: "Tanaka Hiroshi",
    date: "2024-03-15T10:30:00",
    duration: "24:15",
    score: 85,
    status: "analyzed",
    topics: ["Product Demo", "Pricing", "Competitor Comparison"],
  },
  {
    id: "CALL-1235",
    customer: "Globex Inc",
    rep: "Suzuki Yuki",
    date: "2024-03-14T14:15:00",
    duration: "18:42",
    score: 92,
    status: "analyzed",
    topics: ["Contract Renewal", "Upsell", "Technical Support"],
  },
  {
    id: "CALL-1236",
    customer: "Initech",
    rep: "Watanabe Kenji",
    date: "2024-03-14T11:45:00",
    duration: "31:08",
    score: 78,
    status: "analyzed",
    topics: ["Initial Contact", "Product Overview", "Next Steps"],
  },
  {
    id: "CALL-1237",
    customer: "Umbrella Corp",
    rep: "Sato Akira",
    date: "2024-03-13T09:00:00",
    duration: "15:22",
    score: 88,
    status: "analyzed",
    topics: ["Feature Request", "Pricing", "Implementation"],
  },
  {
    id: "CALL-1238",
    customer: "Stark Industries",
    rep: "Tanaka Hiroshi",
    date: "2024-03-12T16:20:00",
    duration: "42:37",
    score: 94,
    status: "analyzed",
    topics: ["Enterprise Solution", "Integration", "Security"],
  },
  {
    id: "CALL-1239",
    customer: "Wayne Enterprises",
    rep: "Suzuki Yuki",
    date: "2024-03-12T13:10:00",
    duration: "28:55",
    score: 81,
    status: "analyzed",
    topics: ["Product Demo", "Pricing", "Technical Questions"],
  },
  {
    id: "CALL-1240",
    customer: "Cyberdyne Systems",
    rep: "Watanabe Kenji",
    date: "2024-03-11T11:30:00",
    duration: "19:48",
    score: 76,
    status: "analyzed",
    topics: ["Support Issue", "Renewal", "Feature Request"],
  },
  {
    id: "CALL-1241",
    customer: "Oscorp",
    rep: "Sato Akira",
    date: "2024-03-11T09:45:00",
    duration: "33:12",
    score: 89,
    status: "analyzed",
    topics: ["Initial Contact", "Product Overview", "Pricing"],
  },
  {
    id: "CALL-1242",
    customer: "LexCorp",
    rep: "Tanaka Hiroshi",
    date: "2024-03-10T15:00:00",
    duration: "26:19",
    score: 83,
    status: "analyzed",
    topics: ["Contract Negotiation", "Pricing", "Legal Questions"],
  },
  {
    id: "CALL-1243",
    customer: "Massive Dynamic",
    rep: "Suzuki Yuki",
    date: "2024-03-10T10:20:00",
    duration: "21:34",
    score: 90,
    status: "analyzed",
    topics: ["Product Demo", "Technical Integration", "Next Steps"],
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date)
}

function getScoreColor(score: number) {
  if (score >= 90) return "bg-emerald-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

function getStatusBadge(status: Call["status"]) {
  switch (status) {
    case "analyzed":
      return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10">
          Analyzed
        </Badge>
      )
    case "processing":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/10">
          Processing
        </Badge>
      )
    case "failed":
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-500 hover:bg-red-500/10">
          Failed
        </Badge>
      )
  }
}

export function CallsTable() {
  const router = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns: ColumnDef<Call>[] = [
    {
      accessorKey: "id",
      header: "Call ID",
      cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "customer",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Customer
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "rep",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Sales Rep
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Date & Time
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => formatDate(row.getValue("date")),
    },
    {
      accessorKey: "duration",
      header: "Duration",
    },
    {
      accessorKey: "score",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Score
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const score = row.getValue("score") as number
        return (
          <Badge variant="outline" className={`${getScoreColor(score)} text-white hover:${getScoreColor(score)}`}>
            {score}
          </Badge>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => getStatusBadge(row.getValue("status")),
    },
    {
      accessorKey: "topics",
      header: "Topics",
      cell: ({ row }) => {
        const topics = row.getValue("topics") as string[]
        return (
          <div className="flex flex-wrap gap-1">
            {topics.slice(0, 2).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {topics.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{topics.length - 2}
              </Badge>
            )}
          </div>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const call = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => router.push(`/calls/${call.id}`)}>View Details</DropdownMenuItem>
              <DropdownMenuItem>Download Recording</DropdownMenuItem>
              <DropdownMenuItem>Download Transcript</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="cursor-pointer"
                onClick={() => router.push(`/calls/${row.original.id}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 p-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
          {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)} of{" "}
          {data.length} entries
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

