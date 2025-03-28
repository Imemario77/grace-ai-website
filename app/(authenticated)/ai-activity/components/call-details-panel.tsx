"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle } from "lucide-react"

interface CallDetailsPanelProps {
  isOpen: boolean
  onClose: () => void
  call: {
    id: string
    time: string
    type: string
    agent: string
    phoneCall: string
    duration: string
    callSuccessful: string
    callStatus: string
    userSentiment: string
    disconnectionReason: string
    cost: string
  } | null
}

export function CallDetailsPanel({ isOpen, onClose, call }: CallDetailsPanelProps) {
  if (!call) return null

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <SheetTitle className="text-lg font-semibold">
                {call.time} {call.type}
              </SheetTitle>
              <div className="text-sm text-muted-foreground mt-1">Agent: {call.agent}</div>
              <div className="text-sm text-muted-foreground">Phone Call: {call.phoneCall}</div>
              <div className="text-sm text-muted-foreground">Duration: {call.duration}</div>
            </div>
          </div>
        </SheetHeader>

        <div className="px-6 py-4">
          <h3 className="text-sm font-medium mb-4">Conversation Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Call Successful</span>
              <span className="flex items-center text-sm text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                {call.callSuccessful}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Call Status</span>
              <span className="flex items-center text-sm text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                {call.callStatus}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">User Sentiment</span>
              <span className="flex items-center text-sm text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                {call.userSentiment}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Disconnection Reason</span>
              <span className="flex items-center text-sm text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                {call.disconnectionReason}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cost</span>
              <span className="text-sm">{call.cost}</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t">
          <Tabs defaultValue="summary">
            <TabsList className="w-full">
              <TabsTrigger value="summary" className="flex-1">
                Summary
              </TabsTrigger>
              <TabsTrigger value="transcription" className="flex-1">
                Transcription
              </TabsTrigger>
              <TabsTrigger value="data" className="flex-1">
                Data
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex-1">
                Detail Logs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                No summary available
              </div>
            </TabsContent>
            <TabsContent value="transcription" className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                No transcript available
              </div>
            </TabsContent>
            <TabsContent value="data" className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                No data available
              </div>
            </TabsContent>
            <TabsContent value="logs" className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                No logs available
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}

