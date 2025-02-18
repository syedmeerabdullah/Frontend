import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronRight, Settings } from "lucide-react"

interface ArticleCardProps {
  article: any
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden group rounded-xl border-0 bg-transparent shadow-none">
      <div className="relative">
        <div className="absolute z-10 left-4 top-4">
          <div className="flex items-center gap-1.5 bg-white opacity-80 py-1 px-2.5 rounded-full text-sm">
            <Settings className="w-4 h-4" />
            {article.type}
          </div>
        </div>
        <div className="relative h-[280px] rounded-xl overflow-hidden">
          <img src={article.image || "/placeholder.svg"} alt={article.title}  className="object-cover" />
        </div>
      </div>
      <CardContent className="px-0 pt-4 pb-0">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{article.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <time className="text-sm">{article.date}</time>
          </div>
          <div className="flex items-center text-sm font-medium hover:underline cursor-pointer">
            Read more
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

