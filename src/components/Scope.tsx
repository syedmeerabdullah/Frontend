import { MapPin, Edit2, ArrowUpRight, Edit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InvestmentLocation {
  city: string;
  area: string;
  amount: string;
}

const investments: InvestmentLocation[] = [
  {
    city: "DUBAI",
    area: "Apartments in MARINA Bay",
    amount: "AED 100K",
  },
  {
    city: "ABU DHABI",
    area: "Apartments in Yas Island",
    amount: "AED 100K",
  },
  {
    city: "DUBAI",
    area: "Villa in Jumeirah",
    amount: "AED 125K",
  },
  {
    city: "SHARJAH",
    area: "Land in Al Taawun",
    amount: "AED 100K",
  },
];

export function InvestmentScope() {
  return (
    <section className="bg-[#0FB3AF33] m-20 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#43434380] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Investment Scope
          </div>
        </div>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 bg-[#0FB3AF33] rounded-full">
          GET IN CONTACT
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Test User's Investment interest
        </h2>{" "}
        <Edit className="h-6 w-6 text-[#21252980]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {investments.map((investment, index) => (
          <Card
            key={index}
            className="bg-[#79d5d2] p-6 flex flex-col items-center text-center"
          >
            <MapPin className="h-8 w-8 text-white mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">
              {investment.city}
            </h3>
            <p className="text-white mb-2">{investment.area}</p>
            <p className="text-sm text-white/90">
              Looking to invest around{" "}
              <span className="font-medium">{investment.amount}</span>
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
