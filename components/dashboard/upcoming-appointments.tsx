export function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      title: "Memorial Service Consultation",
      date: "Today at 2:00 PM",
      location: "Main Branch",
    },
    {
      id: 2,
      title: "Funeral Planning Meeting",
      date: "Tomorrow at 10:00 AM",
      location: "East Branch",
    },
    {
      id: 3,
      title: "Family Consultation",
      date: "Mar 1 at 3:30 PM",
      location: "West Branch",
    },
    {
      id: 4,
      title: "Service Planning",
      date: "Mar 2 at 1:00 PM",
      location: "Main Branch",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center space-x-4 rounded-lg border p-4">
          <div className="flex-1 space-y-1">
            <p className="font-medium">{appointment.title}</p>
            <div className="flex text-sm text-muted-foreground">
              <p>{appointment.date}</p>
              <span className="mx-2">•</span>
              <p>{appointment.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

