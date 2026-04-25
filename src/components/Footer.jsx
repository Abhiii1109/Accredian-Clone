'use client';

const footerLinks = {
  Architecture: ['Data Science Array', 'Product Matrix', 'Analytics Pipeline'],
  System: ['Manifesto', 'Architects', 'Connection Protocol'],
  Security: ['Encryption Protocol', 'Terms of Service', 'SOC 2 Report'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        <div className="md:w-1/3">
          <a href="#" className="text-3xl font-bold tracking-tighter uppercase mb-6 inline-block" style={{ fontFamily: 'var(--font-display)' }}>
            ACCREDIAN<span className="text-[#ff4a1c]">.</span>
          </a>
          <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
            The definitive technical upskilling protocol for global enterprises.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12 md:gap-24">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff4a1c] mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover-line text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">© {new Date().getFullYear()} ACCREDIAN PROTOCOL.</p>
        <div className="flex gap-8">
          <a href="#" className="hover-line text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover-line text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
