'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import config from '@/content/site.config'
import { Phone, Mail, MessageCircle, MapPin, Building2 } from 'lucide-react'

// Leaflet touches `window`, so the map only ever renders client-side.
const OfficesMap = dynamic(() => import('./OfficesMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-xl border bg-gray-100 animate-pulse" />
  ),
})

export default function Contact() {
  const wa = config.contacts.whatsapp?.replace(/\s+/g, '') || ''
  const waLink = `https://wa.me/${wa.replace('+', '')}`
  const offices = config.contacts.offices || []

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Please write a message'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  function handleChange(field) {
    return (ev) => setForm((f) => ({ ...f, [field]: ev.target.value }))
  }

  // Build the marker list once: head office + every branch office.
  const mapMarkers = [
    {
      title: 'Head Office',
      subtitle: config.company.shortName,
      address: config.contacts.address,
      lat: config.contacts.lat,
      lng: config.contacts.lng,
    },
    ...offices.map((o) => ({
      title: `${o.city}${o.label ? ` — ${o.label}` : ''}`,
      subtitle: o.contactPerson,
      address: o.lines?.join(', '),
      lat: o.lat,
      lng: o.lng,
    })),
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container-responsive">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {config.cta.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">{config.cta.sub}</p>
        </div>

        {/* Head office + quick actions */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-10 sm:mb-14">
          <div className="card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 inline-flex items-center gap-2">
              <Building2 className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              Head Office
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-1">{config.contacts.address}</p>
            {config.contacts.gstin && (
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">GSTIN: {config.contacts.gstin}</p>
            )}

            <div className="space-y-3 sm:space-y-4">
              {config.contacts.phones.map((p) => (
                <div
                  key={p.number}
                  className="flex items-center justify-between gap-3 rounded-xl border p-3 sm:p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" strokeWidth={2.25} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{p.label}</div>
                      <div className="text-gray-600 text-sm sm:text-base truncate">{p.number}</div>
                    </div>
                  </div>
                  <a
                    className="btn-primary text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 flex-shrink-0 inline-flex items-center gap-1.5"
                    href={`tel:${p.number.replace(/\s+/g, '')}`}
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.25} />
                    Call
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                className="btn-primary flex-1 text-center py-3 inline-flex items-center justify-center gap-2"
                href={waLink}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.25} />
                WhatsApp
              </a>
              <a
                className="btn-secondary flex-1 text-center py-3 inline-flex items-center justify-center gap-2"
                href={`mailto:${config.contacts.email}`}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.25} />
                Email
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-xl border">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Quick Response</h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>24/7 WhatsApp support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Bulk pricing available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>
                  {mapMarkers.length} location{mapMarkers.length > 1 ? 's' : ''} across India — see the map below
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Branch offices — only renders if you add config.contacts.offices */}
        {offices.length > 0 && (
          <div className="mb-10 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Our Branch Offices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {offices.map((office) => (
                <div key={office.city + office.label} className="card p-4 sm:p-5 h-full flex flex-col">
                  <div className="text-xs font-semibold tracking-wide text-brand-blue uppercase mb-1">
                    {office.city}
                  </div>
                  {office.label && <div className="text-sm text-gray-500 mb-2">{office.label}</div>}
                  <div className="text-sm text-gray-700 leading-relaxed mb-2 flex-1">
                    {office.lines?.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                  {office.gstin && <div className="text-xs text-gray-500 mb-2">GSTIN: {office.gstin}</div>}
                  {office.contactPerson && (
                    <div className="text-sm text-gray-900 font-medium">{office.contactPerson}</div>
                  )}
                  {(office.phone || office.email) && (
                    <div className="mt-2 flex flex-wrap gap-3 text-xs sm:text-sm">
                      {office.phone && (
                        <a
                          href={`tel:${office.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1 text-brand-blue hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" strokeWidth={2.25} />
                          {office.phone}
                        </a>
                      )}
                      {office.email && (
                        <a
                          href={`mailto:${office.email}`}
                          className="inline-flex items-center gap-1 text-brand-blue hover:underline break-all"
                        >
                          <Mail className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.25} />
                          {office.email}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Full-width map with a pin for every office */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center inline-flex items-center justify-center gap-2 w-full">
            <MapPin className="w-5 h-5 text-brand-blue" strokeWidth={2} />
            Find Us — All Locations
          </h3>
          <OfficesMap markers={mapMarkers} />
        </div>
      </div>
    </section>
  )
}
