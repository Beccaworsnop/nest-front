"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sections = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.current.forEach((section) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a192f] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">SmartWare</div>
          <div className="hidden md:flex space-x-8">
            {["about", "services", "products", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors ${
                  activeSection === item ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => el && (sections.current[0] = el)}
        className="h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg?height=1080&width=1920"
            alt="Warehouse Management"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Advanced Warehouse Management Solutions</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your operations with our cutting-edge warehouse management system
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-md"
          >
            Get Started
          </Button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        ref={(el) => el && (sections.current[1] = el)}
        className="py-20 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About Our Company"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Leading the Industry Since 2025</h3>
              <p className="text-gray-300 mb-6">
                We are a startup provider of warehouse management solutions, dedicated to helping businesses optimize
                their operations and improve efficiency. With advanced technologies we have developed cutting edge
                solutions that transform how warehouses operate.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experts provides an advanced warehouse robot alongside a software for stock management and
                real time data, providing solutions that drive results. We are committed to innovation, quality, and
                customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">200+</h4>
                  <p className="text-gray-400">Clients Worldwide</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">2+</h4>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">24/7</h4>
                  <p className="text-gray-400">Customer Support</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">98%</h4>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => el && (sections.current[2] = el)}
        className="py-20 min-h-screen flex items-center bg-[#0a192f]/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real Time Data",
                description: "Store your robot data in databases for future decision making analysis.",
                icon: "📊",
              },
              {
                title: "Inventory Management",
                description:
                  "Real-time tracking and management of inventory levels, locations, and movements throughout your warehouse.",
                icon: "📦",
              },
              {
                title: "Integration Services",
                description: "Seamlessly connect your warehouse management system with other business applications.",
                icon: "🔄",
              },
              {
                title: "GPS and Map Tracking",
                description: "Track your robot as it goes from point A to point B to carry the goods.",
                icon: "🗺️",
              },
              {
                title: "Business Tracking",
                description: "Get access to a whole dashboard of your inventory, Tasks and more.",
                icon: "📱",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-600 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        ref={(el) => el && (sections.current[3] = el)}
        className="py-20 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-cyan-400">Products</span>
          </h2>
          <div className="space-y-24">
            {/* Software Product */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Software GIF Placeholder */}
                <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800 aspect-video">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Software Interface"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-cyan-400 font-semibold">Software Demo GIF</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Warehouse Management Software</h3>
                <p className="text-gray-300 mb-6">
                  A web-based software to access our services and monitor your robot with stock management and arrange
                  data for future business analysis. Our platform provides real-time insights into your warehouse
                  operations, allowing you to make data-driven decisions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Real-time robot monitoring</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Comprehensive inventory management</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Advanced data analytics and reporting</p>
                  </div>
                </div>
                <Button className="mt-6 bg-cyan-600 hover:bg-cyan-700">Request Demo</Button>
              </div>
            </div>

            {/* Robot Product */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-1 md:order-2">
                {/* Robot Image Placeholder */}
                <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Warehouse Robot"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-cyan-400 font-semibold">Robot Image</p>
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Warehouse Robot</h3>
                <p className="text-gray-300 mb-6">
                  Our prototype robot is an alternative to human labor in sorting centers and warehouses. It provides
                  better safety and real-time data to the software, enhancing efficiency and reducing operational costs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Autonomous navigation and obstacle avoidance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Efficient item picking and sorting capabilities</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">Continuous operation with minimal downtime</p>
                  </div>
                </div>
                <Button className="mt-6 bg-cyan-600 hover:bg-cyan-700">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => el && (sections.current[4] = el)}
        className="py-20 min-h-screen flex items-center bg-[#0a192f]/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Contact <span className="text-cyan-400">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about our warehouse management solutions or interested in them? Our team is here to help.
                Fill out the form or contact us directly using the information below.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-300">Algiers, Algeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-300">0696717170</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-300">Smartware@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-800 border-gray-700 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">SmartWare</div>
            <div className="flex space-x-6">
              {["About", "Services", "Products", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SmartWare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
