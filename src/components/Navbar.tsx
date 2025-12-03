import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/trending", label: "Trending" },
    { path: "/gallery", label: "Gallery" },
    { path: "/events/wedding", label: "Events" }, 
    { path: "/about", label: "About" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className} bg-primary/80 backdrop-blur-lg border-b border-primary-foreground/20 shadow-xl`}>
      <div className="container mx-auto px-4 py-1 bg-primary/70">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/d9de9317-d065-4608-89f0-9900da1cefd6-removebg-preview.png" 
              alt="Memorable Events Logo"
              className="h-20 w-auto p-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 cursor-pointer">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-elegant ${
                  isActive(link.path) ||
                  (link.path === "/events" && location.pathname.startsWith("/events"))
                    ? "text-secondary font-semibold drop-shadow"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button variant="gold" size="default" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 bg-primary/95 backdrop-blur-lg rounded-b-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-all duration-300 ${
                    isActive(link.path) ||
                    (link.path === "/events" && location.pathname.startsWith("/events"))
                      ? "text-secondary font-semibold"
                      : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Book Now Button */}
              <Button
                variant="gold"
                size="default"
                asChild
                className="mt-4 self-start shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
