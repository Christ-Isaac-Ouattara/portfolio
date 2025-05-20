"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Determine active section for nav highlighting
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 200;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animate header items on mount
    const tl = gsap.timeline();
    tl.fromTo(
      ".logo",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".nav-item",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".resume-button",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-36 py-4 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="logo font-bold text-2xl text-accent">
            <img src="/logo.png" alt="Logo" className="w-12 h-6" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <ol className="flex items-center space-x-8 counter-reset-nav">
              {navItems.map((item, index) => (
                <li key={item.href} className="nav-item nav-link">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-accent",
                      activeSection === item.href ? "text-accent" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ol>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="resume-button border-accent text-accent hover:bg-accent/10"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
          
          {/* Mobile menu toggle button only */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 relative focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div
                className={cn(
                  "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
                  isMobileMenuOpen ? "rotate-45 " : "-translate-y-1"
                )}
              />
              <div
                className={cn(
                  "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
                  isMobileMenuOpen ? "opacity-0 display-none" : "opacity-100"
                )}
              />
              <div
                className={cn(
                  "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
                  isMobileMenuOpen ? "-rotate-45 " : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu outside the header */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full w-full overflow-auto py-16 px-6">
          <nav className="flex flex-col items-center justify-center w-full max-w-sm">
            <ol className="flex flex-col items-center space-y-6 w-full counter-reset-nav">
              {navItems.map((item) => (
                <li key={item.href} className="mobile-nav-item nav-link text-center w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-accent block w-full py-2",
                      activeSection === item.href
                        ? "text-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ol>

            <Button
              variant="outline"
              size="lg"
              className="mobile-nav-item mt-8 border-accent text-accent hover:bg-accent/10 w-full"
              asChild
            >
              <a href="/cv-isaac-ouattara.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
