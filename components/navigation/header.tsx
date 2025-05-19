"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { name: "A propos", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Jobs", href: "#projects" },
  { name: "Contacts", href: "#contact" },
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
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-36 py-4 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="flex items-center justify-between">
        <Link href="/" className="logo font-bold text-2xl text-accent">
          KW
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
            <a href="/cv-isaac-ouattara.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </Button>
        </nav>
        
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          activeSection={activeSection}
          navItems={navItems}
        />
      </div>
    </header>
  );
}