import { ArticleCard } from "./article-card";
import Frame1 from "../../public/images/Frame1.png";

const articles: any[] = [
  {
    id: 1,
    type: "Resources",
    image:
      "https://s3-alpha-sig.figma.com/img/2761/15f7/4886ded5de167a34327f88cd2792e6ab?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZcXVB1yAblbVhTUrve3p2d61pSPEWiiW~26K1KnImQ4wJdZHQkfX4z37RSNFvhJSpMUPjZ~L70E0~x~fGyofxuFOUVpPtmYduaWZ54LBoxKyprZuWYXsjvJBvHWC4YAuS5ciyXZHQYlFRjsZNigJinkS9jjijtABJkYJ4Ay7V-bO~r5XieXijKtl5zbWdaw4Hek2ddcqlMB0xYQVnYIv-tUCla1~8Vs2QGafETu6dH6pTlgLiHtsikjNDyKybBygdfxW1kCoIlW9V98RMtOef50zz1eg0c7IMupZvfCdc-gq0KvFwQ0Jqw4XN12f-y1PCNsRCmzgCzYf54idlM4vFA__",
    title: "Here's how decorate your new home from scratch",
    date: "Mar 30, 2023",
    slug: "decorate-home",
  },
  {
    id: 2,
    type: "News",
    image:
      "https://s3-alpha-sig.figma.com/img/2761/15f7/4886ded5de167a34327f88cd2792e6ab?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZcXVB1yAblbVhTUrve3p2d61pSPEWiiW~26K1KnImQ4wJdZHQkfX4z37RSNFvhJSpMUPjZ~L70E0~x~fGyofxuFOUVpPtmYduaWZ54LBoxKyprZuWYXsjvJBvHWC4YAuS5ciyXZHQYlFRjsZNigJinkS9jjijtABJkYJ4Ay7V-bO~r5XieXijKtl5zbWdaw4Hek2ddcqlMB0xYQVnYIv-tUCla1~8Vs2QGafETu6dH6pTlgLiHtsikjNDyKybBygdfxW1kCoIlW9V98RMtOef50zz1eg0c7IMupZvfCdc-gq0KvFwQ0Jqw4XN12f-y1PCNsRCmzgCzYf54idlM4vFA__",
    title: "Home buying basics: How many bedrooms and bathrooms?",
    date: "Apr 30, 2023",
    slug: "home-buying-basics",
  },
  {
    id: 3,
    type: "Article",
    image:
      "https://s3-alpha-sig.figma.com/img/2761/15f7/4886ded5de167a34327f88cd2792e6ab?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZcXVB1yAblbVhTUrve3p2d61pSPEWiiW~26K1KnImQ4wJdZHQkfX4z37RSNFvhJSpMUPjZ~L70E0~x~fGyofxuFOUVpPtmYduaWZ54LBoxKyprZuWYXsjvJBvHWC4YAuS5ciyXZHQYlFRjsZNigJinkS9jjijtABJkYJ4Ay7V-bO~r5XieXijKtl5zbWdaw4Hek2ddcqlMB0xYQVnYIv-tUCla1~8Vs2QGafETu6dH6pTlgLiHtsikjNDyKybBygdfxW1kCoIlW9V98RMtOef50zz1eg0c7IMupZvfCdc-gq0KvFwQ0Jqw4XN12f-y1PCNsRCmzgCzYf54idlM4vFA__",
    title: "First-time homebuyer's guide: Steps for beginners",
    date: "Jan 30, 2024",
    slug: "first-time-buyer-guide",
  },
];

export default function ArticlesGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="">
        <h2 className="text-sm font-bold rounded-full bg-[#EEEFF1] flex items-center gap-2 mt-12 p-2 w-fit">
          <img src={Frame1} alt=""  className="w-6 h-6"/>
          Our blogs
        </h2>
      </div>
      <div className="flex items-center justify-between mb-8 mt-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-gray-900">
            Articles by Test User
          </h1>
        </div>
        <button className="text-sm font-medium">
          Browse all articles →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="h-24"></div>

    </div>
  );
}
