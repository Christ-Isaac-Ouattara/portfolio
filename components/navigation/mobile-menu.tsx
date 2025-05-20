"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  navItems: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onToggle, activeSection, navItems }: MobileMenuProps) {
  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Animate menu items when opened
    if (isOpen) {
      gsap.fromTo(
        ".mobile-nav-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    onToggle();
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={onToggle}
        className="w-10 h-10 relative focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <div
          className={cn(
            "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
          )}
        />
        <div
          className={cn(
            "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <div
          className={cn(
            "block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out",
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
          )}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Menu content container with fixed height and scrolling */}
        <div className="flex flex-col items-center justify-center h-full w-full overflow-auto py-16 px-6">
          <nav className="flex flex-col items-center justify-center w-full max-w-sm">
            <ol className="flex flex-col items-center space-y-6 w-full counter-reset-nav">
              {navItems.map((item) => (
                <li key={item.href} className="mobile-nav-item nav-link text-center w-full">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
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
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
