import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/finwatch-logo-financial-chart-icon.png" alt="FinWatch Logo" width={32} height={32} className="rounded" />
              <span className="font-serif font-bold text-xl text-primary">FinWatch</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your smart, personal analyst that works 24/7, consolidating financial noise into clear, actionable
              signals.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FinWatch. All rights reserved. Built with <span className="inline-block text-red-500 animate-pulse mx-1" aria-label="love">♥</span> for financial professionals.</p>
        </div>
      </div>
    </footer>
  )
}
