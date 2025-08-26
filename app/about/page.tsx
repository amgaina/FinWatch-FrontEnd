import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const developers = [
    {
      name: "Abhishek Amgain",
      title: "Developer",
      image: "/abhishek.png",
    },
    {
      name: "Dinesh Chhantyal",
      title: "Developer",
      image: "/dinesh.png",
    },
    {
      name: "Pushkar Kandel",
      title: "Researcher",
      image: "/pushkar.png",
    },
    {
      name: "Naresh Chhetri",
      title: "Developer",
      image: "/naresh.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              About FinWatch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold">
              Revolutionizing Financial Research
              <span className="text-primary block">with Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At its core, FinWatch is an AI-powered accessible research platform for publicly traded companies. We
              consolidate all company information and recent news, transforming complex financial data into actionable
              insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Financial markets generate overwhelming amounts of data every second. Earnings reports, news articles,
                  analyst ratings, and market movements create a chaotic information landscape that's impossible for
                  individual investors to navigate effectively.
                </p>
                <p>
                  <strong className="text-foreground">FinWatch cuts through that chaos.</strong>
                  It acts as a smart, personal analyst that works for you 24/7, consolidating all the noise into a
                  clear, actionable signal.
                </p>
                <p>
                  Our AI model <strong className="text-primary">Sastra</strong> processes thousands of financial
                  documents and news articles, delivering simplified, digestible insights that help you make informed
                  investment decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ai-analyzing-financial-data-with-charts-and-graphs.png"
                alt="AI Financial Analysis"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built FinWatch with three core principles that set us apart from traditional financial platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Consolidated Financial News</h3>
                <p className="text-muted-foreground">
                  Your single source of truth. We aggregate and analyze news from hundreds of sources, giving you
                  comprehensive coverage without the overwhelm.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Simplification</h3>
                <p className="text-muted-foreground">
                  Our AI model Sastra transforms complex financial reports and earnings data into visually appealing
                  charts and simplified explanations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-success">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Customizable Alerts</h3>
                <p className="text-muted-foreground">
                  Your personal watchdog. Set up intelligent alerts for specific companies, metrics, or market
                  conditions that matter to your investment strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of financial experts, AI engineers, and designers working together to democratize financial
              research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((developer, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={developer.image || "/placeholder.svg"}
                      alt={developer.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{developer.name}</h3>
                  <p className="text-primary font-medium text-sm">{developer.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
