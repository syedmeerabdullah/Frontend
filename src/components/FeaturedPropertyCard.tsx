import type React from "react"

interface FeaturedPropertyCardProps {
  property: any
}

export const FeaturedPropertyCard: React.FC<FeaturedPropertyCardProps> = ({ property }) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-[#0000001F] bg-card text-card-foreground shadow-sm">
      <img
        src={property.image || "/placeholder.svg"}
        alt={property.title}
        className="h-16 w-16 rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="font-medium">{property.title}</h3>
        <p className="text-xs text-muted-foreground">{property.location}</p>
        <p className="mt-1 text-xs text-blue-600">{property.purchaseType}</p>
      </div>
    </div>
  )
}

