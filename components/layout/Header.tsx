'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import clsx from 'clsx'

interface NavItem {
  href: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/tools', label: 'Tools' },
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
]

const ANIMATION_DURATION_MS = 300

export default function Header(): React.ReactElement {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true)
  }, [])

  const closeMobileMenu = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setIsClosing(false)
    }, ANIMATION_DURATION_MS)
  }, [isClosing])

  const toggleMobileMenu = useCallback(() => {
    if (mobileMenuOpen) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }, [mobileMenuOpen, closeMobileMenu, openMobileMenu])

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-neutral-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Primary navigation">
        {/* Weft Logo - Left */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <Image
              src="/logo/weft_text.png"
              alt="Weft"
              width={270}
              height={108}
              className="h-[108px] w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-foreground hover:bg-neutral-surface transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop navigation - Right */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-lg font-medium transition-colors hover:text-denim-500',
                  isActive ? 'text-denim-500' : 'text-neutral-muted'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>

    {/* Mobile menu overlay */}
    {mobileMenuOpen && (
      <div
        className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300 ease-in-out"
        style={{ animation: isClosing ? 'fadeOut 0.3s ease-in-out' : 'fadeIn 0.3s ease-in-out' }}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    )}

    {/* Mobile menu panel */}
    {mobileMenuOpen && (
      <div
        className="fixed inset-y-0 right-0 z-[9999] w-full max-w-xs shadow-2xl lg:hidden bg-background transition-transform duration-300 ease-in-out"
        style={{ animation: isClosing ? 'slideOutToRight 0.3s ease-in-out' : 'slideInFromRight 0.3s ease-in-out' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="h-full flex flex-col border-l-4 border-denim-500">
          <div className="flex items-center justify-between p-4 border-b-2 border-neutral-border bg-neutral-surface">
            <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <Image
                src="/logo/weft_text.png"
                alt="Weft"
                width={180}
                height={72}
                className="h-[72px] w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-xl p-2.5 text-foreground hover:bg-background transition-colors"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 bg-background">
            <nav className="space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'block rounded-xl px-5 py-4 text-lg font-semibold transition-all',
                      isActive
                        ? 'bg-denim-500 text-white shadow-md'
                        : 'text-neutral-text bg-neutral-surface hover:bg-denim-fade hover:text-denim-700 border border-neutral-border'
                    )}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
