import data from '@/content/site.json'

export function Footer() {
  const { footer } = data
  return (
    <footer className="bg-rr-dark-gray py-16 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-2xl font-light tracking-wider">{footer.copyright}</h4>
          <p className="text-xxs text-rr-gray tracking-widest mt-1">MOTOR CARS</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs tracking-widest">
          {footer.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.map((link, j) => (
                <a key={j} href="#" className="hover:text-rr-gray transition-colors">{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
