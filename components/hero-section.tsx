"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Shield, Zap, Sparkles, Play } from "lucide-react"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative min-h-screen flex items-start justify-center py-16 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/15 backdrop-blur-sm hover:bg-primary/12 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Research Platform
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold leading-[0.9] tracking-tight">
                  Your Smart
                  <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Financial Research Platform
                  </span>
                  <span className="text-foreground/90">Works 24/7</span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                FinWatch cuts through market chaos with our AI model{" "}
                <strong className="text-primary font-semibold">Sastra</strong>. Get consolidated news,
                intelligent alerts, and actionable insights for publicly traded companies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                View Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold cursor-pointer bg-background/80 hover:bg-primary/5 border-2 border-border hover:border-primary/30 px-10 py-4 rounded-2xl text-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                See Pricing
              </Button>
            </div>

            <div className="flex items-center space-x-10 text-base text-muted-foreground">
              <div className="flex items-center group cursor-pointer">
                <Shield className="w-5 h-5 mr-3 text-success group-hover:scale-110 transition-transform duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">Secure & Reliable</span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Zap className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">Real-time Data</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Device Frame - MacBook Style */}
            <div className="relative mx-auto max-w-4xl">
              {/* Screen Bezel */}
              <div className="relative bg-gray-800 rounded-[2rem] p-4 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-[1.5rem] overflow-hidden">
                  {/* Menu Bar */}
                  <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-gray-800 rounded-lg px-4 py-1 text-xs text-gray-400 inline-block">
                        finwatch.app
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    {/* Video Preview */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300 cursor-pointer group mx-auto">
                          <Play className="w-10 h-10 text-primary group-hover:scale-110 transition-transform ml-1" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg font-semibold text-primary">FinWatch Demo</p>
                          <p className="text-sm text-primary/80">See our platform in action</p>
                        </div>
                      </div>
                    </div>
                    <img
                      src="/finwatch-application-demo-video-preview-with-finan.png"
                      alt="FinWatch Application Demo"
                      className="w-full h-full object-cover opacity-40"
                    />
                  </div>
                </div>
              </div>

              {/* Base/Stand */}
              <div className="relative">
                <div className="w-32 h-4 bg-gray-300 rounded-b-lg mx-auto"></div>
                <div className="w-48 h-2 bg-gray-400 rounded-full mx-auto mt-1"></div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <div className="bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 p-8 hover:shadow-3xl transition-all duration-500">
                <div className="space-y-6">
                  <h3 className="font-semibold text-xl text-foreground text-center">Start Your Research</h3>
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div className="relative group">

                      <Input
                        type="text"
                        placeholder="Search companies (e.g., AAPL, TSLA, MSFT)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-4 text-base border-2 border-border focus:border-primary hover:border-primary/50 transition-all duration-200 rounded-2xl shadow-sm bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground rounded-2xl py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Search Company
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
