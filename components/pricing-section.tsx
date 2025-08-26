import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get access to powerful financial insights and AI-driven analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative border-2 border-border hover:border-primary/50 transition-colors">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Free</CardTitle>
              <CardDescription className="text-muted-foreground">Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Basic company search</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Limited news access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Basic financial data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Community support</span>
                </div>
              </div>
              <Button className="w-full mt-8 cursor-pointer bg-transparent" variant="outline">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary shadow-lg shadow-primary/20">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <CardDescription className="text-muted-foreground">For serious investors and analysts</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">$2.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Unlimited company search</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Real-time news & alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Advanced financial reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">AI-powered insights (Sastra)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Custom alerts & watchlists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Priority support</span>
                </div>
              </div>
              <Button className="w-full mt-8 cursor-pointer bg-primary hover:bg-primary/90">Start Premium Trial</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
