import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Cake, PartyPopper, Gift, Users, Star, Trophy } from "lucide-react";
import SubNavbar from "@/components/SubNavbar";

const Birthday = () => {
  const services = [
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: Cake,
      title: "Kids Parties",
      description: "Fun-filled celebrations with age-appropriate activities and entertainment",
    },
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: Trophy,
      title: "Milestone Birthdays",
      description: "Special celebrations for 18th, 21st, 30th, 40th, 50th and beyond",
    },
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: PartyPopper,
      title: "Themed Parties",
      description: "Transform your space with custom themes from Hollywood to Superheroes",
    },
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: Gift,
      title: "Surprise Parties",
      description: "Coordinated surprises with all the elements for an unforgettable moment",
    },
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: Star,
      title: "VIP Experiences",
      description: "Luxury birthday events with premium services and exclusive venues",
    },
    {
      serviceImg:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      icon: Users,
      title: "Corporate Birthdays",
      description: "Team celebrations that boost morale and strengthen workplace bonds",
    },
  ];

  return (
    <div className="h-screen bg-background">
      <Navbar />
      <SubNavbar />
      <WhatsAppButton />

      {/* Hero Section with Birthday Theme */}
      <section className="relative pt-32 pb-20 px-4 h-3/4 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/50 to-yellow-400/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Birthday Celebrations
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 font-sans">
            Making every birthday memorable with personalized celebrations
          </p>
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-pink-500 text-primary-foreground hover:bg-pink-600"
            >
              <Link to="/booking">Plan Your Birthday</Link>
            </Button>
        </div>
      </section>
      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Birthday Event Services
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Professional birthday event management that creates unforgettable memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-[#FFD700]/30"
                style={{ height: "240px" }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
                  style={{
                    backgroundImage: `url('${service.serviceImg || ""}')`,
                  }}
                />

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/20" />

                {/* Default title */}
                <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl min-w-full text-center font-semibold text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:translate-y-full">
                  {service.title}
                </h3>

                {/* Hidden content (reveals on hover) */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center px-6 py-4 bg-white backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff9f72]/10 mb-3">
                    <service.icon className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#25122B] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#70527A]/80 text-xs font-sans">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Birthday Venues
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                name: "Party Halls",
                capacity: "50-200 guests",
                features: "Fully equipped spaces with audio-visual systems",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                name: "Resort Venues",
                capacity: "100-500 guests",
                features:
                  "Scenic locations with multiple activity areas and accommodation",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                name: "Private Residences",
                capacity: "20-100 guests",
                features:
                  "Intimate settings with personalized service and privacy",
              },
            ].map((venue, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl w-90 h-72 bg-black text-white shadow-md group transition-all duration-500 ease-in-out"
              >
                {/* Background image */}
                <img
                  src={`${venue.image}`}
                  alt={venue.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500 ease-in-out group-hover:opacity-35 group-hover:scale-110"
                />

                {/* Circular animation overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-transparent">
                    {/* Rotating semi-borders */}
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:rotate-[22deg]"></span>
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:-rotate-[22deg]"></span>

                    {/* Capacity (styled content reveal) */}
                    {/* <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-[#01A2CB] font-extrabold text-sm ml-2 mr-2">
                        {venue.capacity}
                      </p>
                    </div> */}

                    {/* Title */}
                    <h2 className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 text-xl font-light uppercase transition-all duration-500 group-hover:font-semibold">
                      {venue.name.split(" ")[0]}
                      <span className="block font-bold">
                        {venue.name.split(" ")[1] || ""}
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Hidden details (revealed subtly on hover) */}
                <div className="absolute bottom-5 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[#FF661A] font-extrabold text-sm ml-2 mr-2">
                    {venue.capacity}
                  </p>
                  {/* <p className="font-sans px-4">{venue.features}</p> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-pink-500 p-12 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Fun
              </h3>
              <p className="text-primary-foreground/90 font-sans">
                Creating joyful experiences that bring smiles to faces
              </p>
            </div>
            <div className="bg-purple-400 p-12 text-center border-y border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Celebration</h3>
              <p className="text-muted-foreground font-sans">
                Marking milestones with significance and memorable moments
              </p>
            </div>
            <div className="bg-yellow-400 p-12 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Memories
              </h3>
              <p className="text-primary-foreground/90 font-sans">
                Crafting experiences that will be cherished for years to come
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 px-6" style={{ marginBottom: "6rem" }}>
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#25122B] mb-4">
            Our Planning Process
          </h2>
        </div>

        <div className="flex justify-center flex-wrap items-center gap-8 py-3">
          {[
            {
              step: "1",
              title: "Discover Your Vision",
              description: "Tell us about the birthday celebrant and your ideas...",
            },
            {
              step: "2",
              title: "Design & Quote",
              description: "Receive a customized plan and transparent pricing...",
            },
            {
              step: "3",
              title: "Coordinate Details",
              description: "We handle all vendors and logistics...",
            },
            {
              step: "4",
              title: "Celebrate!",
              description: "Enjoy the birthday celebration stress-free...",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 w-80 border border-transparent 
             bg-[length:200%_200%] bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-pink-500/90
             transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove hover:border-[#FFD700]/50"
            >
              {/* Inner white layer to mask gradient background */}
              <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/90 to-purple-500/90 text-white font-bold text-lg flex items-center justify-center shadow-md mb-3">
                {process.step}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#FF661A] mb-1">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Birthday;