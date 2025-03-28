"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { OrderModal } from "./components/OrderModal"
import { sampleOrders } from "./data/sampleOrders"
import { Eye, Flag } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

function TruncatedText({ text, className = "" }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={`truncate ${className}`}>{text}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleOrders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Title and Email */}
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold leading-tight line-clamp-2">
                    New Order From {order.caller_name}
                  </h2>
                  <p className="text-sm text-gray-600 truncate">{order.caller_contact.email}</p>
                </div>

                {/* Date */}
                <p className="text-sm text-gray-600">{new Date(order.created_date_time).toLocaleString()}</p>

                {/* Status and View Details */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <Flag className={`mr-2 h-4 w-4 ${order.redFlag ? "text-red-500" : "text-green-500"}`} />
                    <span className={`text-sm font-medium ${order.redFlag ? "text-red-500" : "text-green-500"}`}>
                      {order.redFlag ? "Urgent" : "Normal"}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedOrder(order)}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedOrder && <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  )
}

