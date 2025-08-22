import data from '@/content/site.json'

// A simple component for social icons. You can replace this with actual SVG icons later.
const SocialIcon = ({ platform }: { platform: string }) => (
  <a href="#" className="hover:text-white transition-colors">
    {platform.charAt(0).toUpperCase()} {/* Displays F for facebook, I for instagram etc. */}
  </a>
);

export function Footer() {
  const { footer } = data
  return (
    <footer className="bg-black py-16 px-6 md:px-10 text-rr-gray">
      <div className="container mx-auto">

        {/* Footer Logo */}
        <div className="text-center mb-12">
          {footer.logoUrl && (
            <img 
              src={footer.logoUrl} 
              alt="Footer Logo" 
              className="h-6 mx-auto" // Adjusted height
            />
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-xs tracking-widest uppercase border-t border-b border-rr-gray/20 py-12">
          {footer.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.map((link, j) => (
                <a key={j} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar with Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-xs uppercase tracking-widest">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">{footer.language}</a>
          </div>
          <div className="flex items-center gap-6">
            <span>{footer.copyright}</span>
            <div className="flex items-center gap-4">
              {footer.socials.map(social => (
                <SocialIcon key={social} platform={social} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
