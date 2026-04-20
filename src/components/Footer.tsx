import { FaInstagram, FaLinkedin, FaGithub, FaCodepen, FaEnvelope, FaGlobe } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-xl font-semibold tracking-tight text-primary mb-4 block">Sapphire</span>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              Sapphire is a modern Framer template for SaaS, agencies, and studios.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">Codepen</span>
                <FaCodepen className="w-5 h-5" />
              </a>
              <a href="mailto:admin@ladestack.in" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">Email</span>
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">Website</span>
                <FaGlobe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Information</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">404</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Buy Template</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Sapphire. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with 💙 by Girish Lade
          </p>
        </div>
      </div>
    </footer>
  );
};
