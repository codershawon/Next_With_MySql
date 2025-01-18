import { Button } from "../components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faBars } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">BrandName</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-foreground/80 hover:text-foreground">Features</Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-foreground">Pricing</Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground">Contact</Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Our Amazing Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                Discover the power of simplicity and efficiency. Our platform helps you achieve more with less effort.
              </p>
              <div className="space-x-4">
                <Button size="lg">
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Features
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Easy to Use", description: "Our intuitive interface makes it simple for anyone to get started." },
                { title: "Powerful Analytics", description: "Gain insights with our advanced analytics and reporting tools." },
                { title: "Secure & Reliable", description: "Your data is safe with our enterprise-grade security measures." }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-2 text-primary-foreground">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Simple Pricing
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Basic", price: "$9", features: ["1 User", "Basic Features", "1GB Storage"] },
                { name: "Pro", price: "$19", features: ["5 Users", "Pro Features", "10GB Storage"] },
                { name: "Enterprise", price: "$49", features: ["Unlimited Users", "All Features", "Unlimited Storage"] }
              ].map((plan, index) => (
                <div key={index} className="flex flex-col p-6 bg-secondary rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal">/mo</span></p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Get in Touch
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-md border border-foreground/20 bg-background"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md border border-foreground/20 bg-background"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 rounded-md border border-foreground/20 bg-background"
                required
              ></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-accent text-accent-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">BrandName</span>
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#features" className="hover:underline">Features</Link>
              <Link href="#pricing" className="hover:underline">Pricing</Link>
              <Link href="#contact" className="hover:underline">Contact</Link>
            </nav>
            <div className="text-sm">
              © 2023 BrandName. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
