const config = {
  siteUrl: 'https://sgpcc.in',
  company: {
    name: 'Shree Ganesh Plywood & Construction Chemicals',
    shortName: 'SGPCC',
    tagline: 'One stop solution for cement, steel, chemicals, AAC blocks, shuttering plywood, pinewood, epoxy & industrial flooring.',
    about:
      'We maintain a network of distributors and partners across India to deliver premium building materials at wholesale rates with reliable service.',
    logo: '/logo.png', 
    heroImage: '/hero.jpg', 
  },
  contacts: {
    address: 'GROUND FLOOR, KHASRA NO. 403 TO 406, Alwar Bhiwadi Bypass Road, BEHIND SAMRIDDHI RAYMOND SHOWROOM, BHIWADI, Alwar, Rajasthan, 301019',
    phones: [
      { label: 'Kamal Goyal', number: '+91 9610961111' },
      { label: 'Rinku Goyal', number: '+91 9610962222' },
      { label: 'Office', number: '+91 9610967777' },
    ],
    email: 'sgpcc123@gmail.com',
    whatsapp: '+919610961111'
  },
  partners: [
    { name: 'UltraTech Cement', logo: '/partners/ultratech.png', url: 'https://www.ultratechcement.com/' },
    { name: 'Pidilite', logo: '/partners/pidilite.png', url: 'https://www.pidilite.com/' },
    { name: 'MYK Laticrete', logo: '/partners/myk-laticrete.png', url: 'https://myklaticrete.com/' },
    { name: 'Supreme', logo: '/partners/supreme.png', url: "https://www.supreme.co.in/" },
    { name: 'Sika', logo: '/partners/sika.png', url: "https://www.sika.com/" },
    { name: 'Birla White', logo: '/partners/birla-white.png', url: "https://www.birlawhite.com/en" },
    { name: 'STP Limited', logo: '/partners/stp.png', url: "https://stpltd.com/" },
    { name: 'Kryton', logo: '/partners/kryton.png', url: "https://www.kryton.in/" },
    { name: 'Mapei', logo: '/partners/mapei.png', url: "https://www.mapei.com/" },
    { name: 'Fosroc', logo: '/partners/fosroc.png', url: "https://www.fosroc.com/" },
    { name: 'Cipy', logo: '/partners/cipy.png', url: "https://www.drcipy.com/" },
    { name: 'Master Builders', logo: '/partners/mbs.png', url: "https://master-builders-solutions.com/en-in/" },
    { name: 'MC-Bauchemie', logo: '/partners/mc.png', url: "https://www.mc-bauchemie.in/" },
    { name: 'Bekaert', logo: '/partners/bekaert.png', url: "https://www.bekaert.com/en/" },
  ],
  services: [
    { title: 'Cement (Grey & RMC)', description: 'Authorised dealer of non‑trade UltraTech grey cement & RMC across India.' },
    { title: 'Steel & Steel Fibers' },
    { title: 'Construction Chemicals', description: 'Admixtures, waterproofing, repair mortars, grouts & sealants.' },
    { title: 'AAC Blocks' },
    { title: 'Shuttering Plywood & Pinewood' },
    { title: 'Epoxy, PU & Industrial Flooring' },
    { title: 'Insulation' , description: 'Insulation materials for thermal and acoustic protection.' }
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
    description: 'Authorised UltraTech dealer. Supplier of cement, steel, AAC blocks, shuttering plywood, pinewood, epoxy & industrial flooring in Bhiwadi/Alwar, Rajasthan.'
  }
}

export default config;




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