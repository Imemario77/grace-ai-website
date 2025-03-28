"use client"

import { useState } from "react"
import { History, PhoneOutgoing, PhoneIncoming } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CallDetailsPanel } from "./components/call-details-panel"
import { DateRangePicker } from "./components/date-range-picker"

// Updated sample data with more variety
const calls = [
  {
    id: "call_001",
    time: "02/28/2025 16:47",
    type: "Outbound",
    duration: "0:00",
    cost: "$0.000",
    agent: "Grace The Second(age:879)",
    phoneCall: "+14434007081 -> +19145200493",
    callSuccessful: "Unsuccessful",
    callStatus: "Error",
    userSentiment: "Unknown",
    disconnectionReason: "dial failed",
  },
  {
    id: "call_002",
    time: "02/28/2025 15:30",
    type: "Inbound",
    duration: "5:23",
    cost: "$0.540",
    agent: "Grace The First(age:1)",
    phoneCall: "+19876543210 -> +14434007081",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Positive",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_003",
    time: "02/27/2025 14:15",
    type: "Outbound",
    duration: "2:45",
    cost: "$0.275",
    agent: "Grace The Third(age:42)",
    phoneCall: "+14434007081 -> +15551234567",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Neutral",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_004",
    time: "02/27/2025 11:20",
    type: "Inbound",
    duration: "0:30",
    cost: "$0.050",
    agent: "Grace The Second(age:879)",
    phoneCall: "+12223334444 -> +14434007081",
    callSuccessful: "Unsuccessful",
    callStatus: "Abandoned",
    userSentiment: "Negative",
    disconnectionReason: "User hung up",
  },
  {
    id: "call_005",
    time: "02/26/2025 09:45",
    type: "Outbound",
    duration: "8:12",
    cost: "$0.820",
    agent: "Grace The First(age:1)",
    phoneCall: "+14434007081 -> +17778889999",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Positive",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_006",
    time: "02/26/2025 13:50",
    type: "Inbound",
    duration: "3:18",
    cost: "$0.330",
    agent: "Grace The Third(age:42)",
    phoneCall: "+13334445555 -> +14434007081",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Neutral",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_007",
    time: "02/25/2025 10:05",
    type: "Outbound",
    duration: "1:45",
    cost: "$0.175",
    agent: "Grace The Second(age:879)",
    phoneCall: "+14434007081 -> +16667778888",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Positive",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_008",
    time: "02/25/2025 16:30",
    type: "Inbound",
    duration: "0:45",
    cost: "$0.075",
    agent: "Grace The First(age:1)",
    phoneCall: "+19998887777 -> +14434007081",
    callSuccessful: "Unsuccessful",
    callStatus: "Missed",
    userSentiment: "Unknown",
    disconnectionReason: "No answer",
  },
  {
    id: "call_009",
    time: "02/24/2025 11:55",
    type: "Outbound",
    duration: "4:20",
    cost: "$0.430",
    agent: "Grace The Third(age:42)",
    phoneCall: "+14434007081 -> +14445556666",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Neutral",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_010",
    time: "02/24/2025 14:40",
    type: "Inbound",
    duration: "6:10",
    cost: "$0.610",
    agent: "Grace The Second(age:879)",
    phoneCall: "+17776665555 -> +14434007081",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Positive",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_011",
    time: "02/23/2025 09:15",
    type: "Outbound",
    duration: "2:30",
    cost: "$0.250",
    agent: "Grace The First(age:1)",
    phoneCall: "+14434007081 -> +13332221111",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Neutral",
    disconnectionReason: "Normal end",
  },
  {
    id: "call_012",
    time: "02/23/2025 17:20",
    type: "Inbound",
    duration: "1:15",
    cost: "$0.125",
    agent: "Grace The Third(age:42)",
    phoneCall: "+18889990000 -> +14434007081",
    callSuccessful: "Successful",
    callStatus: "Completed",
    userSentiment: "Positive",
    disconnectionReason: "Normal end",
  },
]

export default function AIActivityPage() {
  const [selectedCall, setSelectedCall] = useState<(typeof calls)[0] | null>(null)
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>(undefined)

  // Filter calls based on date range
  const filteredCalls = dateRange
    ? calls.filter((call) => {
        const callDate = new Date(call.time)
        return callDate >= dateRange.from && callDate <= dateRange.to
      })
    : calls

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Call History</h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mb-6">
        <DateRangePicker onDateRangeChange={setDateRange} />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCalls.map((call) => (
          <Card
            key={call.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => setSelectedCall(call)}
          >
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {call.type === "Outbound" ? (
                    <PhoneOutgoing className="h-4 w-4" />
                  ) : (
                    <PhoneIncoming className="h-4 w-4" />
                  )}
                  <span>{call.type}</span>
                </div>
                <div className="font-medium">{call.time}</div>
                <div className="text-sm text-muted-foreground truncate">
                  {call.type === "Outbound" ? "To: " : "From: "}
                  {call.type === "Outbound"
                    ? call.phoneCall.split("->")[1].trim()
                    : call.phoneCall.split("->")[0].trim()}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <span
                      className={`h-2 w-2 rounded-full mr-2 ${
                        call.callStatus === "Completed"
                          ? "bg-green-500"
                          : call.callStatus === "Error"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        call.callStatus === "Completed"
                          ? "text-green-500"
                          : call.callStatus === "Error"
                            ? "text-red-500"
                            : "text-yellow-500"
                      }`}
                    >
                      {call.callStatus}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CallDetailsPanel isOpen={selectedCall !== null} onClose={() => setSelectedCall(null)} call={selectedCall} />
    </div>
  )
}

