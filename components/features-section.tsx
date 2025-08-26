import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, FileText, Newspaper, Bell } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Overview Page",
      description: "Comprehensive company analysis with stock data, key metrics, and AI-powered insights.",
      icon: BarChart3,
      image: "/financial-dashboard-overview-with-charts-and-compa.png",
    },
    {
      title: "Financial Reports",
      description: "Convert complex PDF reports into beautiful, interactive charts and visualizations.",
      icon: FileText,
      image: "/financial-reports-with-bar-charts-and-pie-charts.png",
    },
    {
      title: "Recent News",
      description: "Stay updated with AI-summarized news that matters to your investments.",
      icon: Newspaper,
      image: "/financial-news-feed-with-article-summaries.png",
    },
    {
      title: "Set Alerts",
      description: "Intelligent, customizable alerts that notify you about what matters most.",
      icon: Bell,
      image: "/alert-settings-dashboard-with-notification-prefere.png",
    },
  ]

  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Everything You Need in One Platform</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From comprehensive overviews to intelligent alerts, FinWatch provides all the tools you need for smart
            financial research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  <div className="relative overflow-hidden rounded-lg border">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
