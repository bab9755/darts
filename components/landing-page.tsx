'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Compass, Heart, Users, ArrowRight, Globe, Download, List, LocateFixed, Locate } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between transparent">
        <div className="flex items-center">
          <Link href="#" className="flex items-center">
            <LocateFixed className="h-6 w-6 text-white" />
            <span className="ml-2 text-2xl font-bold">Darts</span>
          </Link>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <ul className="flex gap-4 sm:gap-6">
            <li>
              <Link href="#" className="text-md font-medium hover:underline underline-offset-4">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-md font-medium hover:underline underline-offset-4">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#" className="text-md font-medium hover:underline underline-offset-4">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black px-12">
          <div className="flex justify-between px-4 md:px-6">
            <div className="flex justify-between">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 px-6">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Discover Your New Home Away From Home
                  </h1>
                  <p className="text-gray-200 md:text-xl pt-2">
                    Darts helps students uncover the best attractions, hidden gems, and local favorites in their new country of study.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-white text-primary hover:bg-gray-100 inline-flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary inline-flex items-center">
                    <List className="mr-2 h-4 w-4" />
                    Get in the waitlist
                  </Button>
                </div>
                <p className="text-sm text-gray-200">
                 No credit card required.
                </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="App screenshot"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="600"
                  src="/Untitled design (1).png"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <MapPin className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Personalized Recommendations</h3>
                  <p className="text-gray-500 text-center">
                    Get tailored suggestions based on your interests, budget, and location.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Heart className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Save Favorites</h3>
                  <p className="text-gray-500 text-center">
                    Bookmark places you love or want to visit for easy access later.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Connect with Peers</h3>
                  <p className="text-gray-500 text-center">
                    Meet other international students and share experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-gray-500 text-center">Tell us about your interests, preferences, and study location.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold">Explore Recommendations</h3>
                <p className="text-gray-500 text-center">Browse personalized suggestions for attractions and local spots.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold">Discover and Connect</h3>
                <p className="text-gray-500 text-center">Visit new places, rate your experiences, and meet fellow students.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">What Students Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col space-y-4 p-6">
                  <p className="text-gray-500 italic">"StudentExplorer made my transition to a new country so much easier. I've discovered amazing places I never would have found on my own!"</p>
                  <p className="font-bold">- Sarah, USA</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col space-y-4 p-6">
                  <p className="text-gray-500 italic">"I love how the app connects me with other international students. It's great to share experiences and make new friends."</p>
                  <p className="font-bold">- Carlos, Brazil</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col space-y-4 p-6">
                  <p className="text-gray-500 italic">"The personalized recommendations are spot-on! It's like having a local friend showing you around."</p>
                  <p className="font-bold">- Yuki, Japan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="flex flex-col items-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col jusity-center items-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Explore Your New Home?
                </h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Sign up for Darts now and start discovering amazing places and making new friends!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Create an account
                </Button>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col text-black justify-between gap-2 sm:flex-row py-10 w-full shrink-0 items-center px-4 md:px-6 bg-gray-100">
        <p className="text-xs text-gray-500">© 2024 Darts. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-black hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-black hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}