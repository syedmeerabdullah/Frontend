import type React from "react"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  property: any
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className=" bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="h-48 w-full object-cover rounded-tl-xl rounded-bl-xl rounded-br-xl" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 opacity-80 bg-white rounded-full px-2 py-1 text-sm font-medium backdrop-blur-sm">
          <MapPin className="h-3 w-3" />
          {property.location}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">{property.title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{property.specs.sqft} sqft</span>
          <span>{property.specs.bedrooms} beds</span>
          <span>{property.specs.bathrooms} baths</span>
          <span>{property.specs.parking} parking</span>
        </div>
      </div>
    </div>
  )
}

