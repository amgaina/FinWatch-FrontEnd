"use client"

import { useEffect, useState } from "react"

const stockData = [
  { symbol: "AAPL", price: "$175.43", change: "+2.34%" },
  { symbol: "GOOGL", price: "$142.56", change: "-1.23%" },
  { symbol: "MSFT", price: "$378.85", change: "+0.87%" },
  { symbol: "TSLA", price: "$248.50", change: "+4.12%" },
  { symbol: "AMZN", price: "$145.86", change: "-0.45%" },
  { symbol: "META", price: "$325.12", change: "+1.78%" },
  { symbol: "NVDA", price: "$875.28", change: "+3.45%" },
  { symbol: "NFLX", price: "$432.67", change: "-2.11%" },
]

export function StockTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-card border-b border-border overflow-hidden py-2">
      <div className="flex items-center justify-center">
        <div className="marquee flex items-center space-x-8 whitespace-nowrap">
          {stockData.map((stock, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <span className="font-semibold text-foreground">{stock.symbol}</span>
              <span className="text-muted-foreground">{stock.price}</span>
              <span className={`font-medium ${stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
