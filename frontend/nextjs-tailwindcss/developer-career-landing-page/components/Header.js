import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Developer Career Development</Link>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/pricing" className="hover:text-gray-200">Pricing</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-200">Blog</Link>
                </li>
                <li>
                  <Link href="/career-advisor" className="hover:text-gray-200">Career Advisor</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-200">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/pricing" className="block py-2">Pricing</Link>
                </li>
                <li>
                  <Link href="/blog" className="block py-2">Blog</Link>
                </li>
                <li>
                  <Link href="/career-advisor" className="block py-2">Career Advisor</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}