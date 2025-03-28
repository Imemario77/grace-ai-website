import { Copy, Edit, Link, MoreVertical, Trash, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { format } from "date-fns"

interface Guest {
  name: string
  email: string
  avatar?: string
  role: "organizer" | "guest"
}

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    id: number
    title: string
    start: Date
    end: Date
    meetLink?: string
    recurrence?: string
    guests?: Guest[]
    notification?: string
    organizer: Guest
  }
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  const copyMeetLink = () => {
    if (event.meetLink) {
      navigator.clipboard.writeText(event.meetLink)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-xl">{event.title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy event link</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Print</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date and Time */}
          <div className="text-sm">
            <p>{format(event.start, "EEEE, MMMM d")}</p>
            <p>
              {format(event.start, "h:mm a")} – {format(event.end, "h:mm a")}
            </p>
            {event.recurrence && <p className="text-muted-foreground">{event.recurrence}</p>}
          </div>

          {/* Meeting Link */}
          {event.meetLink && (
            <div className="space-y-2">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
                onClick={() => window.open(event.meetLink, "_blank")}
              >
                <Link className="h-4 w-4" />
                Join with Google Meet
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="truncate">{event.meetLink}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyMeetLink}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Guests */}
          {event.guests && event.guests.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">{event.guests.length} guests</h4>
              <div className="space-y-2">
                {[event.organizer, ...(event.guests || [])].map((guest) => (
                  <div key={guest.email} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={guest.avatar} />
                        <AvatarFallback>
                          {guest.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p>{guest.name}</p>
                        <p className="text-muted-foreground">{guest.email}</p>
                      </div>
                    </div>
                    {guest.role === "organizer" && <span className="text-xs text-muted-foreground">Organizer</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notification */}
          {event.notification && <div className="text-sm text-muted-foreground">{event.notification} before</div>}

          {/* Calendar */}
          <div className="text-sm text-muted-foreground">{event.organizer.name}</div>

          {/* Going Status */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Going?</span>
            <Button variant="secondary" size="sm">
              Yes
            </Button>
            <Button variant="ghost" size="sm">
              No
            </Button>
            <Button variant="ghost" size="sm">
              Maybe
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

