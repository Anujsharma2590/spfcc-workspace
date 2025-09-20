'use client'
import Link from 'next/link'
import Image from 'next/image'
import config from '@/content/site.config'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200" style={{height: 'var(--header-h)'}}>
      <div className="container-responsive h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-yellow-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Image src={config.company.logo} alt={config.company.shortName} width={32} height={32} className="rounded" />
          </div>
          <div className="font-bold leading-tight">
            <div className="text-gray-900 group-hover:text-brand-blue transition-colors">{config.company.shortName}</div>
            <div className="text-xs font-medium text-gray-600">Building Products Division</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {config.nav.map(i => (
            <a 
              key={i.href} 
              href={i.href} 
              className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors relative group"
            >
              {i.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a href="#contact" className="btn-primary shadow-md hover:shadow-lg transition-shadow">
            <span>📞</span>
            Get Quote
          </a>
        </nav>

        <button 
          className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors" 
          onClick={() => setOpen(v=>!v)} 
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <div className="container-responsive py-6 flex flex-col gap-4">
            {config.nav.map(i => (
              <a 
                key={i.href} 
                href={i.href} 
                className="py-2 text-base font-medium text-gray-700 hover:text-brand-blue transition-colors border-b border-gray-100 last:border-b-0" 
                onClick={()=>setOpen(false)}
              >
                {i.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary w-fit mt-2 shadow-md" 
              onClick={()=>setOpen(false)}
            >
              <span>📞</span>
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}