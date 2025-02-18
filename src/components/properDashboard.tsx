import React from "react"
import { FeaturedPropertyCard } from "./FeaturedPropertyCard"
import { PropertyCard } from "./propertyCard"
import { Edit } from "lucide-react"

const properties: any[] = [
  {
    id: "1",
    location: "Abu Dhabi",
    title: "Selling a 4 Bedroom Lavish Villa in Yas Island, Abu Dhabi",
    image:
      "https://s3-alpha-sig.figma.com/img/3523/9311/ea6944a89ec7a6aaa95ecde184255e77?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uv-2Di8UbtdmLzzJP-mTLe5ORkWa8ENcNQc8csNFw6Z2bKugdoF87iY9bajlbqs3SEmRshqWZT5BCETMzOpo8s4pUqkqlNGFIjmy5PF4Vky9WWapghWEWLKa384QhLOudo0Qu4ztet-xrgwYDr6q7GEVH495byUTm7vtRglfrsOocKi9rfkrDQMv6G2WbQMh4qdq7Bytjuza~qWk~NlFFVso8erc1QqReBDGUfCKiIGeZBrI893DB~hqkam4EjYQX2g5YCRFZ0JM4tjUPtd0IyFN0PDutC2-mWR9BVTKGDmgHVSXGJSwBw13EkiMK7KZlUzBcoU2W16UL5hHNqT6eQ__",
    specs: {
      sqft: 2310,
      bedrooms: 5,
      bathrooms: 4,
      parking: 1,
    },
  },
  {
    id: "2",
    location: "Dubai",
    title: "Selling a 2 Bedroom house for small family in DIP, Dubai",
    image:
      "https://s3-alpha-sig.figma.com/img/9761/0cf3/05c62252934792ebd3328a3d4be1b6b5?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IUtBSFXZeZ-Jyf-e~4j8vF-Lob~o1LA1r4~tUyAOVScWfLBHHGE2xTvPAJvVnZb6XkmCgWDntJQnjGab9w5rvoAZSDBELUXeVdgt9UGBx2M2FrWYL9Afweul-DzPcG-sP7h7upBj0Qf2YBQJNxFmt9wNQwx5wugWJZE8DsaZwtCgCIDtRxkoG1wu8nUqfT6RRAhBsZJYXTqLIQWly1P2ZkkUckle-SboTqd5bNkmAWLGqbCjQlRbphFtvS9yGr-pI5znxBVtps-auULMDZjTJ~H5F7I3TNlxviaKLFvp6NlSyemcYnwpi-2dD0S3ypL3qLRh3ecFgW2B4aAbEed4Ew__",
    specs: {
      sqft: 2310,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
    },
  },
  {
    id: "3",
    location: "Dubai",
    title: "Studio Apartment in Dubai International City up for grab.",
    image:
      "https://s3-alpha-sig.figma.com/img/6e42/d62b/25d54953ae0726fb9ec13a2c2985d324?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a42DclzrJWRmehpOauFSvD4DqccAH8PIhgGAPM4Prs3YUaqwULCVtNw5u7LoWBj~6nnIQ99Mo8Jhbd-Vp9OHHgeupTaFYMqRM6qX-kWLfEjpVJ8URvVqOVRAtsIG4OHYL~K3zUMIz1vgUmxwFcrAyndr1wBHA17fQqSeXeu91GAbMuJMflK7S7s4gSoUPDWx~BWG427hKTBbZ6TRqHskXGHOKdzJrZv4A8Xtz1yCiZQM1iZeM7ywt~sctkUsOHZp9jmM-~~Aj1aooXXdkym45KEY~I6Hbl2pySCgxH38JfH2uZismY0p14TwPuMQOBaGDVRWvkgEqgwhnkp6OCJD7w__",
    specs: {
      sqft: 2310,
      bedrooms: 3,
      bathrooms: 1,
      parking: 1,
    },
  },
  {
    id: "4",
    location: "Ajmaan",
    title: "Selling a Modern Villa in Ajmaan, agents please contact.",
    image:
      "https://s3-alpha-sig.figma.com/img/8880/f018/5a41837bb9fac720271a4815a6fc178a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wrc8OibexfSWeNveTYtqVU0hewvL9rQ2pLXhK374C7LeHfWgnnfpgP5~7Pa7IhhP2~PMgU6lG70Xm8fR~M1HciAPk2fF5PjM2CKzInIXOCvO4yl-1pjT2crqcjewNZB-5KKgVrb57osiWLRTPW2gJbW0ItiIbLCo2JMed7PkBEDp0cuQ248Z7YMdVljGLNazADYaBnqxvZh0MucGRYwrN04gfBnmNoMWkQN0Eumf-WwDrBtoyca2-JP2ddyhLDxkCHMtOioxKd1dzLhWLwSFv3Cd31H6elFP~a9APaXb-8a2mxnkg8RLFFzLOMw0eEUKQAiUHTim9xO5dJSNtTkoHQ__",
    specs: {
      sqft: 2310,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
    },
  },
]

const featuredProperties: any[] = [
  {
    id: "1",
    title: "Deluxe Apartment in Abu Dhabi",
    location: "Meera 1 - Shams Abu Dhabi - Al Reem Island - Abu Dhabi",
    image:
      "https://s3-alpha-sig.figma.com/img/601b/14f8/3cbf1409c6d14f1dfdaa41311c4daee9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pO5p-GpI7pnTibafbpLOp1eFsjHLvOS2TnbQexV~3zH~0M1cU6b2Jph0oKUrn8ie2cpVjlf2wVR6P065pULCxcbwvIevgbI50tYXbOzS6zUJcVpctYTelbuwKsnyZdPv663coCFhpyFA7fO5GZktS2zmw557xrgSOnDHJh5HsR~l1cP6iFyTZvcRYDj7kjsY0ySRxcbcqPPrUEYSulp-Ot9n-KZIfgRcvMJRanj5jmH-VqrKMeaa9conJA0eR4xQaiaygB4JwblaQpDA2QzdzN9zQ-BPoNGD-EOwFcttR23OFnROXdBTK9U7cRldnEmJ6SdWr0uyysQCb6Jncyd7cQ__",
    purchaseType: "Purchase through Realtor",
  },
  {
    id: "2",
    title: "Townhouse for Sale in Sharjah",
    location: "Sendian, Masaar, Tilal City, Sharjah",
    image:
      "https://s3-alpha-sig.figma.com/img/d220/f0c3/1da8e373ec4069e4144c699bd7ac3e74?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GNh6Zr8kg5NDJb0TW0thQ70Fwq~yfb-8nq53SCXGAQ6F1H3Y-R81Q2Nrto9ISCPEG67H~fqne56vevcOm4TAbWaYwLDrRelHP5BB4eSC2WZezAAdEjY7Pe6Pu1NjT-6O4ar-U4ZsJhYVxzNTb1kjcmOauy26nXDQM9ZqP9ygt2Hhq8hxLFhQJh7-5DlNfrJxRIdIS2gxfiw1bvKHRmSZuG9NtIKHfNNfAGRdL3xmnk-DmvxP~iPjA0fhr32qM14WdF4WMAL0WBiIjfkvYB0UG6lzeMkahs-kelRwytddFkHOly~SGTb1SCfZvt3dMKq4fFHzbetrw9j6vGPu2MsTpw__",
    purchaseType: "Offline Investment",
  },
  {
    id: "3",
    title: "Deluxe Apartment in Abu Dhabi",
    location: "Meera 1 - Shams Abu Dhabi - Al Reem Island - Abu Dhabi",
    image:
      "https://s3-alpha-sig.figma.com/img/601b/14f8/3cbf1409c6d14f1dfdaa41311c4daee9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pO5p-GpI7pnTibafbpLOp1eFsjHLvOS2TnbQexV~3zH~0M1cU6b2Jph0oKUrn8ie2cpVjlf2wVR6P065pULCxcbwvIevgbI50tYXbOzS6zUJcVpctYTelbuwKsnyZdPv663coCFhpyFA7fO5GZktS2zmw557xrgSOnDHJh5HsR~l1cP6iFyTZvcRYDj7kjsY0ySRxcbcqPPrUEYSulp-Ot9n-KZIfgRcvMJRanj5jmH-VqrKMeaa9conJA0eR4xQaiaygB4JwblaQpDA2QzdzN9zQ-BPoNGD-EOwFcttR23OFnROXdBTK9U7cRldnEmJ6SdWr0uyysQCb6Jncyd7cQ__",
    purchaseType: "Purchase through Realtor",
  },
  {
    id: "4",
    title: "Townhouse for Sale in Sharjah",
    location: "Sendian, Masaar, Tilal City, Sharjah",
    image:
      "https://s3-alpha-sig.figma.com/img/d220/f0c3/1da8e373ec4069e4144c699bd7ac3e74?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GNh6Zr8kg5NDJb0TW0thQ70Fwq~yfb-8nq53SCXGAQ6F1H3Y-R81Q2Nrto9ISCPEG67H~fqne56vevcOm4TAbWaYwLDrRelHP5BB4eSC2WZezAAdEjY7Pe6Pu1NjT-6O4ar-U4ZsJhYVxzNTb1kjcmOauy26nXDQM9ZqP9ygt2Hhq8hxLFhQJh7-5DlNfrJxRIdIS2gxfiw1bvKHRmSZuG9NtIKHfNNfAGRdL3xmnk-DmvxP~iPjA0fhr32qM14WdF4WMAL0WBiIjfkvYB0UG6lzeMkahs-kelRwytddFkHOly~SGTb1SCfZvt3dMKq4fFHzbetrw9j6vGPu2MsTpw__",
    purchaseType: "Offline Investment",
  },
  {
    id: "5",
    title: "Deluxe Apartment in Abu Dhabi",
    location: "Meera 1 - Shams Abu Dhabi - Al Reem Island - Abu Dhabi",
    image:
      "https://s3-alpha-sig.figma.com/img/601b/14f8/3cbf1409c6d14f1dfdaa41311c4daee9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pO5p-GpI7pnTibafbpLOp1eFsjHLvOS2TnbQexV~3zH~0M1cU6b2Jph0oKUrn8ie2cpVjlf2wVR6P065pULCxcbwvIevgbI50tYXbOzS6zUJcVpctYTelbuwKsnyZdPv663coCFhpyFA7fO5GZktS2zmw557xrgSOnDHJh5HsR~l1cP6iFyTZvcRYDj7kjsY0ySRxcbcqPPrUEYSulp-Ot9n-KZIfgRcvMJRanj5jmH-VqrKMeaa9conJA0eR4xQaiaygB4JwblaQpDA2QzdzN9zQ-BPoNGD-EOwFcttR23OFnROXdBTK9U7cRldnEmJ6SdWr0uyysQCb6Jncyd7cQ__",
    purchaseType: "Purchase through Realtor",
  },
  {
    id: "6",
    title: "Townhouse for Sale in Sharjah",
    location: "Sendian, Masaar, Tilal City, Sharjah",
    image:
      "https://s3-alpha-sig.figma.com/img/d220/f0c3/1da8e373ec4069e4144c699bd7ac3e74?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GNh6Zr8kg5NDJb0TW0thQ70Fwq~yfb-8nq53SCXGAQ6F1H3Y-R81Q2Nrto9ISCPEG67H~fqne56vevcOm4TAbWaYwLDrRelHP5BB4eSC2WZezAAdEjY7Pe6Pu1NjT-6O4ar-U4ZsJhYVxzNTb1kjcmOauy26nXDQM9ZqP9ygt2Hhq8hxLFhQJh7-5DlNfrJxRIdIS2gxfiw1bvKHRmSZuG9NtIKHfNNfAGRdL3xmnk-DmvxP~iPjA0fhr32qM14WdF4WMAL0WBiIjfkvYB0UG6lzeMkahs-kelRwytddFkHOly~SGTb1SCfZvt3dMKq4fFHzbetrw9j6vGPu2MsTpw__",
    purchaseType: "Offline Investment",
  },
]

export const PropertyDashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-[#F6F6F6]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Property Listings - 70% width */}
        <div className="lg:w-[70%] w-full">
          <div className="mb-6 flex items-center ">
            <h1 className="text-2xl font-bold"><span className="underline">Invent</span>ory up for Investment <span className="text-xs text-[#0FB3AF]">(Agents Only)</span></h1>
            <Edit className="h-6 w-6 text-[#21252980] opacity-50" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-6">
            <button className="text-[#0FB3AF] hover:underline">BROWSE ALL INVESTMENTS →</button>
          </div>
        </div>

        {/* Featured Investments - 30% width */}
        <div className="lg:w-[30%] w-full bg-[#FCFDFD] p-2 overflow-y-auto">
          <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-sm font-bold text-gray-900">TEST USER'S FEATURED INVESTMENT</h2>
            <a className="text-[#0FB3AF] transition-colors text-sm">EDIT LIST</a>
          </div>
          <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-10rem)]">
            {featuredProperties.map((property, index) => (
              <React.Fragment key={property.id}>
                {index === 6 && <div className="h-[1px] w-full bg-gray-200 my-4"></div>}
                <FeaturedPropertyCard property={property} />
              </React.Fragment>
            ))}
          </div>
          <div className="mt-6">
            <button className="text-[#0FB3AF] hover:underline">BROWSE OTHER INVESTMENT PLANS...</button>
          </div>
        </div>
      </div>
    </div>
  )
}
