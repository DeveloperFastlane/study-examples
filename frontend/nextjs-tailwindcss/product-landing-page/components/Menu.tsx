import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl lg:text-4xl font-semibold cursor-pointer">친환경 에코백</Link>
        <nav className="hidden md:flex md:space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-green-200 cursor-pointer">홈</Link>
            </li>
            <li>
              <Link href="/price" className="hover:text-green-200 cursor-pointer">가격</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-200 cursor-pointer">블로그</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-200 cursor-pointer">소개</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-200 cursor-pointer">문의하기</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="bg-green-500 md:hidden">
          <ul className="flex flex-col space-y-2 text-center py-4">
            <li>
              <Link href="/" className="text-lg font-semibold text-white hover:text-green-200 cursor-pointer" onClick={handleMobileMenuToggle}>
                  홈
                </Link>
            </li>
            <li>
              <Link href="/price" className="text-lg font-semibold text-white hover:text-green-200 cursor-pointer" onClick={handleMobileMenuToggle}>
                  가격
                </Link>
            </li>
            <li>
              <Link href="/blog" className="text-lg font-semibold text-white hover:text-green-200 cursor-pointer" onClick={handleMobileMenuToggle}>
                  블로그
                </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg font-semibold text-white hover:text-green-200 cursor-pointer" onClick={handleMobileMenuToggle}>
                  소개
                </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg font-semibold text-white hover:text-green-200 cursor-pointer" onClick={handleMobileMenuToggle}>문의하기</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Menu;