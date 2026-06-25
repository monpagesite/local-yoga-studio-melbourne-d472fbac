import { Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Acknowledgment */}
        <div className="mb-12 pb-8 border-b border-white/20">
          <p className="text-sm leading-relaxed opacity-90 max-w-3xl">
            {siteContent.footer.acknowledgment}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Studio Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{siteContent.businessName}</h3>
            <p className="text-sm opacity-90 mb-2">{siteContent.location.address.street}</p>
            <p className="text-sm opacity-90 mb-2">{siteContent.location.address.suburb}</p>
            <p className="text-sm opacity-90">{siteContent.location.address.country}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${siteContent.location.contact.email}`}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                {siteContent.location.contact.email}
              </a>
              <a
                href={`tel:${siteContent.location.contact.phone.replace(/\s/g, '')}`}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                {siteContent.location.contact.phone}
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm opacity-90">{siteContent.location.hours.weekday}</p>
              <p className="text-sm opacity-90">{siteContent.location.hours.weekend}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={siteContent.footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteContent.footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20">
          <p className="text-sm opacity-75 text-center">
            {siteContent.footer.copyright.replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
