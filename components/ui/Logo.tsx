import React from 'react'

type LogoVariant = 'weave' | 'threads' | 'geometric' | 'minimal'

interface LogoProps {
  variant?: LogoVariant
  size?: number
  className?: string
}

export default function Logo({
  variant = 'weave',
  size = 40,
  className = '',
}: LogoProps): React.ReactElement {
  const logos = {
    // Option 1: Interlocking Weave Pattern
    weave: (
      <div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        aria-label="Weft logo"
      >
        {/* Vertical threads (warp) */}
        <div className="absolute inset-0 flex gap-[3px]">
          <div className="flex-1 bg-denim-400 rounded-sm" />
          <div className="flex-1 bg-denim-500 rounded-sm" />
          <div className="flex-1 bg-denim-600 rounded-sm" />
          <div className="flex-1 bg-denim-500 rounded-sm" />
        </div>
        {/* Horizontal threads (weft) - interlocking */}
        <div className="absolute inset-0 flex flex-col gap-[3px]">
          <div className="h-[20%] w-full bg-gradient-to-r from-transparent via-denim-700 to-transparent opacity-90 rounded-sm" />
          <div className="h-[20%] w-full bg-gradient-to-r from-denim-600 via-transparent to-denim-600 opacity-90 rounded-sm" />
          <div className="h-[20%] w-full bg-gradient-to-r from-transparent via-denim-700 to-transparent opacity-90 rounded-sm" />
          <div className="h-[20%] w-full bg-gradient-to-r from-denim-600 via-transparent to-denim-600 opacity-90 rounded-sm" />
        </div>
      </div>
    ),

    // Option 2: Horizontal Threads (Pure Weft concept)
    threads: (
      <div
        className={`relative flex flex-col justify-center gap-[2px] ${className}`}
        style={{ width: size, height: size }}
        aria-label="Weft logo"
      >
        <div className="h-[2px] w-full bg-denim-600 rounded-full" />
        <div className="h-[3px] w-[85%] bg-denim-500 rounded-full" />
        <div className="h-[4px] w-[70%] bg-denim-600 rounded-full" />
        <div className="h-[3px] w-[90%] bg-denim-500 rounded-full" />
        <div className="h-[2px] w-full bg-denim-600 rounded-full" />
        <div className="h-[3px] w-[75%] bg-denim-500 rounded-full" />
      </div>
    ),

    // Option 3: Geometric W with weave pattern
    geometric: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        className={className}
        aria-label="Weft logo"
      >
        <defs>
          <pattern id="weavePattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="2" fill="#4876A8" opacity="0.6" />
            <rect y="4" width="8" height="2" fill="#4876A8" opacity="0.3" />
          </pattern>
        </defs>
        {/* Stylized W shape */}
        <path
          d="M 8 10 L 12 26 L 16 14 L 20 26 L 24 10"
          stroke="#2B5278"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 8 10 L 12 26 L 16 14 L 20 26 L 24 10"
          stroke="url(#weavePattern)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Horizontal lines representing weft */}
        <line x1="4" y1="16" x2="28" y2="16" stroke="#4876A8" strokeWidth="1.5" opacity="0.5" />
        <line x1="4" y1="20" x2="28" y2="20" stroke="#4876A8" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),

    // Option 4: Minimal Grid/Fabric
    minimal: (
      <div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        aria-label="Weft logo"
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px] p-1">
          {/* Create a 3x3 grid with selective cells filled */}
          <div className="bg-denim-500 rounded-sm" />
          <div className="bg-denim-400 rounded-sm" />
          <div className="bg-denim-500 rounded-sm" />
          <div className="bg-transparent" />
          <div className="bg-denim-600 rounded-sm" />
          <div className="bg-transparent" />
          <div className="bg-denim-500 rounded-sm" />
          <div className="bg-denim-400 rounded-sm" />
          <div className="bg-denim-500 rounded-sm" />
        </div>
        {/* Horizontal accent line through the middle */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-denim-700 -translate-y-1/2" />
      </div>
    ),
  }

  return logos[variant]
}

export function LogoWithText({
  variant = 'weave',
  size = 32,
  className = '',
}: LogoProps): React.ReactElement {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo variant={variant} size={size} />
      <span className="font-bold text-lg">
        <span className="text-denim-600">W</span>
        <span className="text-neutral-text">eft</span>
      </span>
    </div>
  )
}
