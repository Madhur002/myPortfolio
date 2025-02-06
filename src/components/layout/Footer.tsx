"use client"
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-white pt-[400px] mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-black text-xl font-bold mb-4 block">
              Portfolio
            </Link>
            <p className="text-gray-800">
              Building amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-black ">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-800">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 