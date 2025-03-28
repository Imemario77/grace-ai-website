"use client"

import { useState } from "react"
import {
  format,
  addDays,
  startOfWeek,
  eachDayOfInterval,
  addMonths,
  startOfMonth,
  endOfMonth,
  isSameMonth,
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EventModal } from "./components/event-modal"

// Sample appointments data with more details
const appointments = [
  {
    id: 1,
    title: "Memorial Service Consultation",
    start: new Date(2024, 1, 28, 10, 0),
    end: new Date(2024, 1, 28, 11, 0),
    meetLink: "meet.google.com/abc-defg-hij",
    recurrence: "Weekly on Wednesday",
    notification: "30 minutes",
    organizer: {
      name: "John Smith",
      email: "john@example.com",
      role: "organizer" as const,
    },
    guests: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
        role: "guest" as const,
      },
      {
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "guest" as const,
      },
    ],
  },
  {
    id: 2,
    title: "Family Meeting",
    start: new Date(2024, 1, 28, 14, 0),
    end: new Date(2024, 1, 28, 15, 30),
    organizer: {
      name: "John Smith",
      email: "john@example.com",
      role: "organizer" as const,
    },
  },
  {
    id: 3,
    title: "Funeral Planning",
    start: new Date(2024, 1, 29, 9, 0),
    end: new Date(2024, 1, 29, 10, 0),
    organizer: {
      name: "John Smith",
      email: "john@example.com",
      role: "organizer" as const,
    },
  },
  // Add a sample event for today's date
  {
    id: 4,
    title: "Memorial Service Preparation",
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(12, 0, 0, 0)),
    meetLink: "meet.google.com/xyz-abcd-123",
    notification: "15 minutes",
    organizer: {
      name: "John Smith",
      email: "john@example.com",
      role: "organizer" as const,
    },
    guests: [
      {
        name: "Family Member",
        email: "family@example.com",
        role: "guest" as const,
      },
    ],
  },
]

const timeSlots = Array.from({ length: 24 }, (_, i) => i)

export default function AppointmentsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"day" | "week" | "month">("day")
  const [selectedEvent, setSelectedEvent] = useState<(typeof appointments)[0] | null>(null)

  const navigateDate = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      if (direction === "prev") {
        return view === "month" ? addMonths(prev, -1) : addDays(prev, view === "day" ? -1 : -7)
      }
      return view === "month" ? addMonths(prev, 1) : addDays(prev, view === "day" ? 1 : 7)
    })
  }

  const getDaysToShow = () => {
    if (view === "day") {
      return [currentDate]
    } else if (view === "week") {
      const start = startOfWeek(currentDate, { weekStartsOn: 0 })
      return eachDayOfInterval({
        start,
        end: addDays(start, 6),
      })
    } else {
      const start = startOfMonth(currentDate)
      const end = endOfMonth(currentDate)
      return eachDayOfInterval({ start, end })
    }
  }

  const getAppointmentsForDay = (date: Date) => {
    return appointments.filter(
      (apt) =>
        apt.start.getDate() === date.getDate() &&
        apt.start.getMonth() === date.getMonth() &&
        apt.start.getFullYear() === date.getFullYear(),
    )
  }

  const days = getDaysToShow()

  const renderMonthView = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return (
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center font-medium p-2">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 border ${
              isSameMonth(day, currentDate) ? "bg-background" : "bg-muted text-muted-foreground"
            }`}
          >
            <div className="text-sm font-medium">{format(day, "d")}</div>
            <div className="mt-1 space-y-1">
              {getAppointmentsForDay(day).map((apt) => (
                <button
                  key={apt.id}
                  onClick={() => setSelectedEvent(apt)}
                  className="w-full text-left text-xs p-1 rounded bg-primary/20 truncate"
                >
                  {apt.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderDayWeekView = () => (
    <div className="border rounded-lg">
      <div className="grid grid-cols-[60px_1fr]">
        {/* Time labels */}
        <div className="border-r">
          <div className="h-12" /> {/* Header spacer */}
          {timeSlots.map((hour) => (
            <div key={hour} className="h-16 border-b text-xs text-right pr-2 pt-1">
              {format(new Date().setHours(hour, 0), "ha")}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="overflow-x-auto">
          <div className={`grid ${view === "day" ? "grid-cols-1" : "grid-cols-7"}`}>
            {/* Day headers */}
            {days.map((day) => (
              <div key={day.toString()} className="h-12 border-b border-r px-2 py-1 sticky top-0 bg-background">
                <div className="font-medium">{format(day, "EEEE")}</div>
                <div className="text-sm text-muted-foreground">{format(day, "MMM d")}</div>
              </div>
            ))}

            {/* Time grid */}
            {days.map((day) => (
              <div key={day.toString()} className="relative border-r">
                {timeSlots.map((hour) => (
                  <div key={hour} className="h-16 border-b" />
                ))}

                {/* Appointments */}
                {getAppointmentsForDay(day).map((apt) => {
                  const top = apt.start.getHours() * 64 + (apt.start.getMinutes() / 60) * 64
                  const height = ((apt.end.getTime() - apt.start.getTime()) / (1000 * 60 * 60)) * 64

                  return (
                    <button
                      key={apt.id}
                      onClick={() => setSelectedEvent(apt)}
                      className="absolute left-1 right-1 rounded bg-primary/20 border border-primary/30 p-2 overflow-hidden hover:bg-primary/30 transition-colors text-left"
                      style={{
                        top: `${top}px`,
                        height: `${height}px`,
                        backgroundColor: apt.id === 4 ? "rgba(59, 130, 246, 0.2)" : undefined,
                        borderColor: apt.id === 4 ? "rgba(59, 130, 246, 0.4)" : undefined,
                      }}
                    >
                      <div className="text-sm font-medium truncate">{apt.title}</div>
                      <div className="text-xs">
                        {format(apt.start, "h:mm a")} - {format(apt.end, "h:mm a")}
                      </div>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Appointments</h1>
          <Select value={view} onValueChange={(v: "day" | "week" | "month") => setView(v)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => navigateDate("prev")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium">
            {format(
              currentDate,
              view === "month" ? "MMMM yyyy" : view === "day" ? "MMMM d, yyyy" : "'Week of' MMMM d, yyyy",
            )}
          </span>
          <Button variant="outline" size="icon" onClick={() => navigateDate("next")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {view === "month" ? renderMonthView() : renderDayWeekView()}

      {selectedEvent && (
        <EventModal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} event={selectedEvent} />
      )}
    </div>
  )
}

