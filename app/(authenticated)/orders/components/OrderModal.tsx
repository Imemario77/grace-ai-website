import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Flag, Phone, Mail, MapPin, User, Calendar, FileText } from "lucide-react"

function InfoSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 pb-1 border-b">{title}</h3>
      {children}
    </div>
  )
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start mb-2">
      <Icon className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
      <div>
        <span className="font-medium">{label}: </span>
        <span>{value}</span>
      </div>
    </div>
  )
}

export function OrderModal({ order, onClose }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Order Details
            <Flag className={order.redFlag ? "text-red-500" : "text-green-500"} />
          </DialogTitle>
        </DialogHeader>

        <InfoSection title="Caller Information">
          <InfoItem icon={User} label="Name" value={order.caller_name} />
          <InfoItem icon={Mail} label="Email" value={order.caller_contact.email} />
          <InfoItem icon={Phone} label="Phone" value={order.caller_contact.number} />
          <InfoItem icon={User} label="Relationship" value={order.relationship} />
        </InfoSection>

        <InfoSection title="Honoree Information">
          <InfoItem icon={User} label="Name" value={order.honoree_name} />
          <InfoItem icon={FileText} label="Health Status" value={order.health_status} />
          <InfoItem
            icon={MapPin}
            label="Location"
            value={`${order.honoree_location.street}, ${order.honoree_location.city}, ${order.honoree_location.state}, ${order.honoree_location.country}`}
          />
        </InfoSection>

        <InfoSection title="Decision Maker">
          <InfoItem icon={User} label="Name" value={order.decision_maker_name} />
          <InfoItem icon={Mail} label="Email" value={order.decision_maker_contact.email} />
          <InfoItem icon={Phone} label="Phone" value={order.decision_maker_contact.number} />
        </InfoSection>

        <InfoSection title="Next of Kin">
          <InfoItem icon={User} label="Name" value={order.next_of_kin_name} />
          <InfoItem icon={Mail} label="Email" value={order.next_of_kin_contact.email} />
          <InfoItem icon={Phone} label="Phone" value={order.next_of_kin_contact.number} />
          <InfoItem
            icon={MapPin}
            label="Location"
            value={`${order.next_of_kin_location.street}, ${order.next_of_kin_location.city}, ${order.next_of_kin_location.state}, ${order.next_of_kin_location.country}`}
          />
        </InfoSection>

        <InfoSection title="Additional Information">
          <InfoItem icon={Calendar} label="Availability" value={order.availability} />
          <InfoItem icon={Calendar} label="Appointment" value={order.appointment} />
          <InfoItem icon={FileText} label="Note" value={order.note} />
          <InfoItem icon={Calendar} label="Created" value={new Date(order.created_date_time).toLocaleString()} />
        </InfoSection>
      </DialogContent>
    </Dialog>
  )
}

