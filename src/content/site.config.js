const config = {
  siteUrl: 'https://sgpcc.in',
  company: {
    name: 'Shree Ganesh Plywood & Construction Chemicals',
    shortName: 'SGPCC',
    tagline: 'One stop solution for cement, steel, chemicals, AAC blocks, shuttering plywood, pinewood, epoxy & industrial flooring.',
    about:
      'We maintain a network of distributors and partners across India to deliver premium building materials at wholesale rates with reliable service.',
    logo: '/logo.png',
    heroImage: '/hero.jpeg',
  },
  contacts: {
    address:
      'Ground Floor & First Floor, Khasra No. 770/684, Alwar Bypass Road, Samriddhi Raymond Showroom, Saidpur, Bhiwadi, Khairthal Tijara, Rajasthan - 301019',
    gstin: '08ADAFS2300N1Z6',
    // Approximate coordinates for the head office (Bhiwadi, Alwar, Rajasthan).
    // Refine with the exact pin from Google Maps whenever you get a chance.
    lat: 28.2100,
    lng: 76.8296,
    phones: [
      { label: 'Rahul Goyal', number: '+91 9610963333' },
      { label: 'Kamal Goyal', number: '+91 9610961111' },
      { label: 'Rinku Goyal', number: '+91 9610962222' },
    ],
    email: 'info@sgpcc.in',
    whatsapp: '+919610963333',
    // Real branch data. lat/lng are approximate city-center coordinates —
    // swap in the exact pin from Google Maps whenever convenient.
    offices: [
      {
        city: 'Haryana',
        label: 'Branch Office',
        lines: ['3rd Floor, D-304, Tower-D', 'Anantraj Maceo, Sector-91', 'Gurugram, Haryana - 122505'],
        gstin: '06ADAFS2300N1ZA',
        lat: 28.4595,
        lng: 77.0266,
      },
      {
        city: 'Maharashtra',
        label: 'Branch Office',
        lines: [
          'Gat No. 97, Flat No. 504, Building No. 04',
          'Woodsville Phase-1, Borhadewadi, Moshi',
          'Pune, Maharashtra - 412105',
        ],
        gstin: '27ADAFS2300N1Z6',
        lat: 18.6980,
        lng: 73.8375,
      },
      {
        city: 'Delhi',
        label: 'Branch Office',
        lines: ['A-1161, 2nd Floor', 'Mayur Vihar Phase-III', 'Delhi - 110096'],
        lat: 28.6096,
        lng: 77.2953,
      },
    ],
  },
  partners: [
    { name: 'UltraTech Cement', logo: '/partners/ultratech.png', url: 'https://www.ultratechcement.com/' },
    { name: 'Pidilite', logo: '/partners/pidilite.png', url: 'https://www.pidilite.com/' },
    { name: 'Sika', logo: '/partners/sika.png', url: 'https://www.sika.com/' },
    { name: 'Fosroc', logo: '/partners/fosroc.png', url: 'https://www.fosroc.com/' },
    { name: 'Flowcrete', logo: '/partners/flowcrete-group.png', url: 'https://www.flowcrete.in/' },
    { name: 'MC-Bauchemie', logo: '/partners/mc.png', url: 'https://www.mc-bauchemie.in/' },
    { name: 'Mapei', logo: '/partners/mapei.png', url: 'https://www.mapei.com/' },
    { name: 'Supreme', logo: '/partners/supreme.png', url: 'https://www.supreme.co.in/' },
    { name: 'STP Limited', logo: '/partners/stp.png', url: 'https://stpltd.com/' },
    { name: 'Kryton', logo: '/partners/kryton.png', url: 'https://www.kryton.in/' },
    { name: 'Birla White', logo: '/partners/birla-white.png', url: 'https://www.birlawhite.com/en' },
    { name: 'Bekaert', logo: '/partners/bekaert.png', url: 'https://www.bekaert.com/en/' },
    { name: 'Cipy', logo: '/partners/cipy.png', url: 'https://www.drcipy.com/' },
    { name: 'MYK Laticrete', logo: '/partners/myk-laticrete.png', url: 'https://myklaticrete.com/' },
  ],
  services: [
    { title: 'Cement (Grey & RMC)', description: 'Authorised dealer of non‑trade UltraTech grey cement & RMC across India.' },
    { title: 'Steel & Steel Fibers' },
    { title: 'Construction Chemicals', description: 'Admixtures, waterproofing, repair mortars, grouts & sealants.' },
    { title: 'AAC Blocks' },
    { title: 'Shuttering Plywood & Pinewood' },
    { title: 'Epoxy, PU & Industrial Flooring' },
    { title: 'Insulation', description: 'Insulation materials for thermal and acoustic protection.' },
  ],
  cta: {
    heading: 'Looking for bulk pricing or urgent delivery?',
    sub: 'Call us now or drop a message on WhatsApp. We will get back within the hour.',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  seo: {
    title: 'SGPCC — Shree Ganesh Plywood & Construction Chemicals',
    description:
      'Authorised UltraTech dealer. Supplier of cement, steel, AAC blocks, shuttering plywood, pinewood, epoxy & industrial flooring in Bhiwadi/Alwar, Rajasthan.',
  },
}

export default config

// Add Images:
// /public/og-image.jpg (1200x630px)
// /public/logo.png
// /public/icon-192.png and /public/icon-512.png
// /public/mstile-150x150.png

// Update Verification Codes:
// Replace placeholder verification codes in layout.js
// Add Google Search Console verification
// Add Bing Webmaster Tools verification

// Create Social Media Profiles:
// Facebook page
// LinkedIn company page
// Instagram business account

// Submit to Search Engines:
// Google Search Console
// Bing Webmaster Tools
// Submit sitemap
