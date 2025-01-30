// app/layout.tsx

import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Innovative Portfolio',
  description: 'Showcasing creativity and innovation',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-gradient-custom
          bg-[length:400%_400%]
          animate-bg-pan
          text-white
          font-sans
          overflow-x-hidden
        "
      >
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 py-4">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold hover:opacity-90">
              MyBrand
            </Link>
            <div className="space-x-6">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="mt-10 py-6 text-center bg-black/60">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
