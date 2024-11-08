import { useContext } from 'react';
import { Mycontext } from '../../context/data/Mycontext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const context = useContext(Mycontext);
  const { toggleMode, mode } = context;

  const linkStyle = {
    color: mode === 'dark' ? '#f1f1f1' : '#555555',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <footer className={`bg-${mode === 'dark' ? 'gray-900' : 'gray-100'} text-${mode === 'dark' ? 'gray-300' : 'gray-800'}`}>
      <div className="container text-center mx-auto py-12 px-5 flex flex-wrap justify-between border-b border-gray-500">

        {/* About Us Section */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 transition-transform transform hover:scale-105">
          <h2 className="font-semibold text-xl mb-4 text-blue-600">About Us</h2>
          <p className="text-sm leading-relaxed">
            Discover luxury timepieces crafted to the finest standards. Rolex watches blend prestige, performance, and elegance to deliver the ultimate expression of excellence.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 transition-transform transform hover:scale-105">
          <h2 className="font-semibold text-xl mb-4 text-blue-600">Quick Links</h2>
          <nav className="list-none space-y-3">
            {['Home', 'Order', 'Local For Vocal', 'Cart'].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out"
                  style={linkStyle}
                >
                  {link}
                </Link>
              </li>
            ))}
          </nav>
        </div>

        {/* Customer Service Section */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 transition-transform transform hover:scale-105">
          <h2 className="font-semibold text-xl mb-4 text-blue-600">Customer Service</h2>
          <nav className="list-none space-y-3">
            {['Return Policy', 'About', 'Contact Us', 'Privacy'].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out"
                  style={linkStyle}
                >
                  {link}
                </Link>
              </li>
            ))}
          </nav>
        </div>

        {/* Follow Us Section */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 transition-transform transform hover:scale-105">
          <h2 className="font-semibold text-xl mb-4 text-blue-600 text-center md:text-left mx-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-6">
            {[
              { href: 'https://facebook.com', icon: <FacebookIcon /> },
              { href: 'https://twitter.com', icon: <TwitterIcon /> },
              { href: 'https://instagram.com', icon: <InstagramIcon /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                className="text-gray-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-gray-400 py-4">
        <div className="container mx-auto flex items-center justify-center text-sm">
          <Link to="/" className="mx-16 text-lg font-bold text-white hover:text-blue-600 transition-all duration-300 ease-in-out">
            Rolex Watches
          </Link>
          <p className="text-gray-400 text-white mx-4">
            © 2024 Rolex Watches —{' '}
            <a href="https://rolex.com" className="hover:underline hover:text-blue-600 transition-all duration-300 ease-in-out">
              rolex.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
  </svg>
);
