"use client";

import { CardStack, CardStackItem } from "@/components/card-stack";
import NeuralBackground from "@/components/flow-field-background";
import { GooeyText } from "@/components/gooey-text-morphing";
import DisplayCards from "@/components/display-cards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Trophy, Sparkles } from "lucide-react";

// Sample event data
const events: CardStackItem[] = [
  {
    id: 1,
    title: "AI/ML Hackathon 2024",
    description: "48-hour intensive hackathon focused on building AI solutions",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    tag: "Completed",
  },
  {
    id: 2,
    title: "Web3 Summit",
    description: "Exploring blockchain and decentralized applications",
    imageSrc: "https://images.unsplash.com/photo-1559223607-a43c990c723e?w=800&h=600&fit=crop",
    tag: "Completed",
  },
  {
    id: 3,
    title: "Open Source Sprint",
    description: "Contributing to major open source projects",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tag: "Completed",
  },
  {
    id: 4,
    title: "IoT Innovation Day",
    description: "Building smart devices and connected solutions",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tag: "Completed",
  },
  {
    id: 5,
    title: "Design Systems Workshop",
    description: "Creating scalable design systems for modern apps",
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tag: "Completed",
  },
];

// Sample sponsor data
const sponsors = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    tier: "Platinum",
  },
  {
    name: "DevTools Inc",
    logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=200&fit=crop",
    tier: "Gold",
  },
  {
    name: "Cloud Solutions",
    logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&h=200&fit=crop",
    tier: "Gold",
  },
  {
    name: "StartupX",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=200&fit=crop",
    tier: "Silver",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <NeuralBackground 
            color="#0072CE"
            particleCount={800}
            speed={1}
            trailOpacity={0.12}
          />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-xl font-mono text-[#0072CE] tracking-wider">
              WELCOME TO
            </h1>
            <div className="h-32">
              <GooeyText 
                texts={["HACKER HOUSE", "BUILD", "INNOVATE", "COLLABORATE"]}
                morphTime={1.2}
                cooldownTime={0.5}
                textClassName="text-7xl md:text-8xl lg:text-9xl font-bold"
              />
            </div>
          </div>
          
          <p className="max-w-2xl text-center text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            {'A community of hackers, builders, and innovators creating the future together'}
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#0072CE] hover:bg-[#0072CE]/90 text-white font-semibold px-8 py-6 text-lg rounded-full"
          >
            Join Our Next Event <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="h-2 w-1 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-black">
                Building the Future,
                <span className="text-[#0072CE]"> Together</span>
              </h2>
              <p className="text-lg leading-relaxed text-black/70 mb-6">
                {'Hacker House is more than just a space — it\'s a thriving community of passionate developers, designers, and entrepreneurs pushing the boundaries of technology.'}
              </p>
              <p className="text-lg leading-relaxed text-black/70">
                {'We organize hackathons, workshops, and collaborative events that bring together the brightest minds to solve real-world problems and create innovative solutions.'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black text-white p-8 rounded-2xl">
                <Calendar className="h-12 w-12 text-[#0072CE] mb-4" />
                <h3 className="text-4xl font-bold mb-2">24+</h3>
                <p className="text-white/70">Events Hosted</p>
              </div>
              <div className="bg-black text-white p-8 rounded-2xl">
                <Users className="h-12 w-12 text-[#0072CE] mb-4" />
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-white/70">Community Members</p>
              </div>
              <div className="bg-black text-white p-8 rounded-2xl">
                <Trophy className="h-12 w-12 text-[#0072CE] mb-4" />
                <h3 className="text-4xl font-bold mb-2">100+</h3>
                <p className="text-white/70">Projects Built</p>
              </div>
              <div className="bg-black text-white p-8 rounded-2xl">
                <Sparkles className="h-12 w-12 text-[#0072CE] mb-4" />
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-white/70">Amazing Sponsors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Past <span className="text-[#0072CE]">Events</span>
            </h2>
            <p className="text-xl text-white/70">
              {'Explore the amazing events we\'ve organized'}
            </p>
          </div>
          
          <CardStack
            items={events}
            maxVisible={5}
            cardWidth={600}
            cardHeight={400}
            autoAdvance={true}
            intervalMs={3500}
            showDots={true}
            loop={true}
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-32 px-4 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-black">
              What We <span className="text-[#0072CE]">Do</span>
            </h2>
            <p className="text-xl text-black/70">
              {'Our core activities and offerings'}
            </p>
          </div>
          
          <div className="flex justify-center items-center min-h-[500px]">
            <DisplayCards 
              cards={[
                {
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
                  icon: <Calendar className="size-5 text-white" />,
                  iconClassName: "text-[#0072CE]",
                  titleClassName: "text-[#0072CE]",
                  title: "Hackathons",
                  description: "Intensive coding events",
                  date: "Every Quarter",
                },
                {
                  className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
                  icon: <Users className="size-5 text-white" />,
                  iconClassName: "text-[#0072CE]",
                  titleClassName: "text-[#0072CE]",
                  title: "Workshops",
                  description: "Learn new technologies",
                  date: "Monthly",
                },
                {
                  className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                  icon: <Trophy className="size-5 text-white" />,
                  iconClassName: "text-[#0072CE]",
                  titleClassName: "text-[#0072CE]",
                  title: "Competitions",
                  description: "Win amazing prizes",
                  date: "Ongoing",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="text-[#0072CE]">Sponsors</span>
            </h2>
            <p className="text-xl text-white/70">
              {'Supported by amazing companies'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-white/10 hover:border-[#0072CE]/50 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 mb-4 overflow-hidden">
                  <img 
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{sponsor.name}</h3>
                <span className="text-sm text-[#0072CE]">{sponsor.tier}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE] hover:text-white rounded-full px-8 py-6 text-lg"
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-[#0072CE] to-[#0055A5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
            {'Be part of something bigger. Connect with fellow hackers, learn new skills, and build amazing projects.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-[#0072CE] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
            >
              Join Our Discord
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0072CE] rounded-full px-8 py-6 text-lg font-semibold"
            >
              View Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-[#0072CE]">HACKER HOUSE</h3>
              <p className="text-white/70 leading-relaxed">
                {'Building the future, one hack at a time.'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-[#0072CE] transition">Events</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">Sponsors</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">Community</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-[#0072CE] transition">Discord</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">Twitter</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">GitHub</a></li>
                <li><a href="#" className="hover:text-[#0072CE] transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2024 Hacker House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
