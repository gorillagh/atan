// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            {/* <div className="flex items-center mb-6">
              <img src="/atan-logo.png" alt="ATAN" className="h-10" />
            </div> */}
            {/* <div className="flex items-center mb-6">
              <h1 className="text-5xl">ATAN</h1>
            </div> */}
            <p className="text-blue-100 mb-2">
              Connecting Africa's talent with opportunity through
              apprenticeships.
            </p>
            <p className="text-blue-100 mb-6 font-medium">
              Empowering Africa's Future Workforce
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/africa-technical-assistance-network"
                target="_blank"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/atanafrica?igsh=dXllYjZvNzhrcHli"
                target="_blank"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About ATAN
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  For Employers
                </a>
              </li>
              <li>
                <a
                  href="#universities"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  For Universities
                </a>
              </li>
              <li>
                <a
                  href="#apprentices"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  For Apprentices
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#tools"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  RIO Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Success Stories
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-blue-100">
              <li>info@atanafrica.com</li>
              <li>+233 123 456 7890</li>
              <li>
                ATAN Headquarters
                <br />
                123 Innovation Drive
                <br />
                Accra, Ghana
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-blue-900/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Africa Technical Apprenticeship
              Network (ATAN). All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
