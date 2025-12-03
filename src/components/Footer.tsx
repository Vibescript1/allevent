import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { useEffect } from 'react';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

interface NavigationLink {
  name: string;
  path: string;
}

// Scroll to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks: NavigationLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
  ];

  const services: NavigationLink[] = [
    { name: 'Wedding Events', path: '/events/wedding' },
    { name: 'Corporate Events', path: '/events/corporate' },
    { name: 'Entertainment Shows', path: '/events/entertainment' },
    { name: 'Sports Events', path: '/events/sports' },
  ];

  return (
    <>
      <ScrollToTop />
      <footer className="bg-primary text-primary-foreground/90 pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <img 
                  src="/d9de9317-d065-4608-89f0-9900da1cefd6-removebg-preview.png" 
                  alt="Memorable Events Logo"
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating unforgettable moments through exceptional event management services. Your vision, our expertise.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-secondary hover:text-secondary/80 transition-colors p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-secondary mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={service.path}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-primary-foreground/80 group-hover:text-secondary transition-colors">
                    123 Event Street, City, State 12345
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPhone className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-primary-foreground/80 group-hover:text-secondary transition-colors">
                    +1 (234) 567-8900
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-primary-foreground/80 group-hover:text-secondary transition-colors">
                    info@memorableevents.com
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-primary-foreground/20 pt-8 text-center"
          >
            <p className="text-primary-foreground/60 text-sm">
              {new Date().getFullYear()} Memorable Events. All rights reserved. |
              
            </p>
            
            {/* Additional Links */}
            <div className="flex justify-center space-x-6 mt-4 text-xs text-primary-foreground/60">
              <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;