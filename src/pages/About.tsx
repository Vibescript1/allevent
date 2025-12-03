import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRegLightbulb, FaHandsHelping, FaBuilding, FaTheaterMasks } from "react-icons/fa";
import teamImage from "@/assets/team.jpg";
import { GiPartyFlags, GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { motion, easeInOut } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  const values = [
    {
      title: "Universal Values",
      icon: <FaRegLightbulb size={40} className="text-[#D7A942]" />,
      points: [
        "Meaning over spectacle",
        "Aesthetics in harmony",
        "Integrity in delivery",
        "Safety & compliance",
        "Sustainability",
        "Accessibility & inclusion",
      ],
    },
    {
      title: "Wedding Values",
      icon: <FaHandsHelping size={40} className="text-[#D7A942]" />,
      points: [
        "Ritual sensitivity",
        "Family empathy",
        "Cultural authenticity",
        "Discretion",
      ],
    },
    {
      title: "Corporate Values",
      icon: <FaBuilding size={40} className="text-[#D7A942]" />,
      points: [
        "Brand alignment",
        "Measurable outcomes",
        "Governance & confidentiality",
        "Stakeholder experience",
      ],
    },
    {
      title: "Entertainment Values",
      icon: <FaTheaterMasks size={40} className="text-[#D7A942]" />,
      points: [
        "Artist care",
        "Audience journey",
        "Technical reliability",
        "Risk management",
      ],
    },
  ];

  const aboutSections = [
    {
      title: "The Genesis of Memorable Events",
      icon: <GiPartyFlags size={40} className="text-[#D6A419]" />,
      content: `I've walked through the golden ballrooms of Mumbai, attended star-studded concerts in Dubai, and witnessed the sparkle of chandeliers across India's finest venues. They dazzled me, yes, but I searched for something deeper. And so, Memorable Events was born to create a world where luxury and tradition hold hands. Where a bride could walk down an aisle adorned in a handcrafted Sabyasachi lehenga, yet still feel the grounding grace of turmeric and rose petals. Where a corporate gala could be as elegant as Paris, yet carry the soulful warmth of Hyderabad.`,
      quote: "“We design not just for the eyes, but for the soul.”",
    },
    {
      title: "Guiding Principles",
      icon: <FaRegLightbulb size={40} className="text-[#D6A419]" />,
      content: `LUXURY DOES NOT ERASE TRADITION IT ELEVATES IT. At Memorable Events, we do not choose between heritage and refinement; we create harmony. Because the true art of event design is not in decoration; it is in emotion. We design not for the eyes alone, but for the soul. What unites them is reverence. For a couple, the sacredness of vows. For a brand, the sacredness of vision. The devotion we bring to families, we extend to stakeholders. The rigor we bring to rituals, we bring to showflows.`,
      quote: "“Tradition and luxury walk hand in hand.”",
    },
    {
      title: "Our Values & Excellence",
      icon: <GiLaurelsTrophy size={40} className="text-[#D6A419]" />,
      content: `Meaning over spectacle. Aesthetics in harmony. Integrity in delivery. Safety & compliance. Sustainability. Accessibility & inclusion. The romance on stage rests on our rigor behind it. Technical precision: rehearsals with contingency trees. Audience safety: smooth crowd flow, trained medics, clear exits. Risk readiness: weather plans, emergency drills.`,
      quote: "“Excellence is felt, not just seen.”",
    },
    {
      title: "Corporate Commitment",
      icon: <MdOutlineBusinessCenter size={40} className="text-[#D6A419]" />,
      content: `We adhere to brand alignment, measurable outcomes, governance & confidentiality, ensuring each corporate event is precise, soulful, and intentional.`,
      quote: "“Precision in every detail, passion in every event.”",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 px-4 gradient-luxury overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Memorable Events
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Crafting extraordinary moments with unparalleled elegance and precision since 2010
          </motion.p>
        </div>
      </motion.section>

      {/* Founder Message Section */}
      <motion.section
        className="py-20 px-4 bg-muted overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Founder Message
              </h2>

              <div className="space-y-5 font-sans text-muted-foreground leading-relaxed text-lg">
                {[
                  `I've walked through the golden ballrooms of Mumbai, attended star-studded concerts in Dubai, and witnessed the sparkle of chandeliers across India's and other countries' finest venues. They dazzled me, yes. But in that grandeur, I searched for something deeper: the fragrance of jasmine, the warmth of a mother's blessing, the sound of temple bells at dawn. They were missing.`,

                  `And so, Memorable Events was born.`,

                  `I wanted to create a world where luxury and tradition could hold hands. Where a bride could walk down an aisle adorned in a handcrafted Sabyasachi lehenga, yet still feel the grounding grace of turmeric and rose petals. Where a corporate gala could be as elegant as Paris, yet carry the soulful warmth of Hyderabad.`,

                  `Memorable Events is my promise: that your celebration will not just shine, but breathe. That it will not only impress, but also move hearts. Because the true art of event design is not in decoration; it is in emotion.`
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="opacity-0"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Right side - Image & Author Info */}
            <motion.div
              className="relative flex flex-col items-center lg:items-end text-center lg:text-right mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-lg w-full max-w-[340px] lg:max-w-[380px] mx-auto">
                <motion.img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Founder of Memorable Events"
                  className="w-full h-[440px] lg:h-[500px] object-cover object-top"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </div>

              {/* Author Name & Title */}
              <div className="mt-5 lg:mt-6">
                <h3 className="text-xl font-semibold text-foreground">
                  <span className="pb-1 border-b border-primary">
                    - Raaga Veena Sajja
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm mt-1 tracking-wide">
                  Founder, Memorable Events
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Sections */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-muted overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#3C1E3D] mb-4 tracking-wide"
            variants={fadeInUp}
          >
            About Memorable Events
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg md:text-xl font-light"
            variants={fadeInUp}
          >
            We create events that don't just impress—they move hearts. Our commitment is to emotion, luxury, and tradition in perfect harmony.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          variants={container}
        >
          {aboutSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-t-4 border-[#D6A419] hover:shadow-xl transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.1
                  }
                }
              }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Icon */}
              <motion.div
                className="mb-6 p-4 rounded-full bg-[#FAF7F0] shadow-md"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {section.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#3C1E3D] mb-2 hover:text-[#D6A419] transition-colors duration-300">
                {section.title}
              </h3>

              {/* Quote */}
              <p className="text-[#D6A419] italic font-playfair mb-4">
                {section.quote}
              </p>

              {/* Content */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-4 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
              variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              At Memorable Events, our principles illuminate every celebration — from heartfelt weddings
              to prestigious corporate galas and mesmerizing entertainment experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={container}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center p-8 rounded-2xl bg-card shadow-md border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                whileHover={{
                  scale: 1.03,
                }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#D6A419]/10 group-hover:bg-[#D6A419]/20 transition-all duration-300">
                    {value.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-[#D6A419] transition-colors duration-300">
                  {value.title}
                </h3>

                <ul className="text-muted-foreground font-sans text-sm space-y-2 leading-relaxed">
                  {value.points.map((point, i) => (
                    <li
                      key={i}
                      className="transition-colors duration-200 group-hover:text-foreground"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default About;