'use client'
import Link from 'next/link'
import Image from 'next/image'
import config from '@/content/site.config'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{height: 'var(--header-h)'}}>
      <div className="container-responsive h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={config.company.logo} alt={config.company.shortName} width={40} height={40} className="rounded" />
          <div className="font-bold leading-tight">
            <div>{config.company.shortName}</div>
            <div className="text-xs font-medium text-gray-500">Building Products</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {config.nav.map(i => (
            <a key={i.href} href={i.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">{i.label}</a>
          ))}
          <a href="#contact" className="btn-primary">Get Quote</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-responsive py-3 flex flex-col gap-3">
            {config.nav.map(i => (
              <a key={i.href} href={i.href} className="py-1 text-sm" onClick={()=>setOpen(false)}>{i.label}</a>
            ))}
            <a href="#contact" className="btn-primary w-fit">Get Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}