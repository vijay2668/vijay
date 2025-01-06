"use client"

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              VR
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Skills</button>
              {/* <button onClick={() => scrollToSection('timeline')} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Timeline</button> */}
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Skills</button>
            <button onClick={() => scrollToSection('timeline')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Timeline</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

