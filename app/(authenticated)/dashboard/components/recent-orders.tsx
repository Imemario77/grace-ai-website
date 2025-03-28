import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RecentOrders() {
  const orders = [
    {
      id: "ORD001",
      service: "Memorial Service",
      location: "Main Branch",
      date: "2024-02-28",
      status: "Confirmed",
    },
    {
      id: "ORD002",
      service: "Funeral Service",
      location: "East Branch",
      date: "2024-02-27",
      status: "Pending",
    },
    {
      id: "ORD003",
      service: "Consultation",
      location: "West Branch",
      date: "2024-02-27",
      status: "Completed",
    },
    {
      id: "ORD004",
      service: "Memorial Service",
      location: "Main Branch",
      date: "2024-02-26",
      status: "Confirmed",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.service}</TableCell>
            <TableCell>{order.location}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  order.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

