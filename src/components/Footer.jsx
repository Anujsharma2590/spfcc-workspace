import config from '@/content/site.config'

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container-responsive text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} {config.company.shortName}. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${config.contacts.email}`}>{config.contacts.email}</a>
          <span>•</span>
          <a href="tel:+919610961111">+91 9610961111</a>
          <span>•</span>
          <a href="/">sfpcc.com</a>
        </div>
      </div>
    </footer>
  )
}
