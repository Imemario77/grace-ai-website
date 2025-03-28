"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const agents = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Manager", status: "Active", location: "Main Branch" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Agent", status: "Active", location: "East Office" },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Agent",
    status: "Inactive",
    location: "West Branch",
  },
  // Add more sample data as needed
]

export default function HumanAgentsPage() {
  const router = useRouter()
  const [showDeactivateDialog, setShowDeactivateDialog] = useState(false)
  const [showAddAgentDialog, setShowAddAgentDialog] = useState(false)
  const [agentToDeactivate, setAgentToDeactivate] = useState(null)

  const handleOpenDeactivateDialog = useCallback((agent) => {
    setAgentToDeactivate(agent)
    setShowDeactivateDialog(true)
  }, [])

  const handleCloseDeactivateDialog = useCallback(() => {
    setShowDeactivateDialog(false)
    setAgentToDeactivate(null)
  }, [])

  const handleDeactivate = useCallback(() => {
    if (agentToDeactivate) {
      console.log(`Deactivating agent: ${agentToDeactivate.name}`)
      // Implement actual deactivation logic here
    }
    handleCloseDeactivateDialog()
  }, [agentToDeactivate, handleCloseDeactivateDialog])

  const handleOpenAddAgentDialog = useCallback(() => {
    setShowAddAgentDialog(true)
  }, [])

  const handleCloseAddAgentDialog = useCallback(() => {
    setShowAddAgentDialog(false)
  }, [])

  const handleGoToLocations = useCallback(() => {
    router.push("/locations")
  }, [router])

  const columnsWithProps = columns({ onOpenDeactivateDialog: handleOpenDeactivateDialog })

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Human Agents</h1>
        <Button onClick={handleOpenAddAgentDialog}>
          <Plus className="mr-2 h-4 w-4" /> Add New Agent
        </Button>
      </div>
      <DataTable columns={columnsWithProps} data={agents} />

      <AlertDialog open={showDeactivateDialog} onOpenChange={handleCloseDeactivateDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Deactivating this agent will set you as the default agent for their assigned location. You can always
              reactivate the agent.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCloseDeactivateDialog}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeactivate} className="bg-red-600 hover:bg-red-700">
              Deactivate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showAddAgentDialog} onOpenChange={handleCloseAddAgentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hmm, How Do I Explain This?</DialogTitle>
            <DialogDescription>
              You can only invite new agents when you're creating a new location or editing an existing location.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleGoToLocations}>Go To Locations →</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

