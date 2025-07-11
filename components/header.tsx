'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {showHeader && (
        <header
          className="fixed top-0 w-full z-50 bg-black/95 shadow transition-all duration-300 animate-fade-in-down"
          style={{
            backdropFilter: 'saturate(1.5) blur(4px)',
          }}
        >
          <nav className="max-w-5xl mx-auto flex items-center justify-between h-20 px-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/gatzz.png"
                alt="Logo Gatzz"
                height={48}
                width={160}
                className="h-16 w-auto transition-opacity duration-300"
                style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.04))' }}
                priority
              />
            </Link>
            <div className="flex items-center space-x-6">
                <div>
                    <Link href="/conta" aria-label="Conta">
                        <FiUser size={28} color="#fff" />
                    </Link>
                </div>
                <span className='pt-2'>
                    <div
                        className="planne-widget planne-widget-cart-preview"
                        data-widget-checkout-page="/pagamento"
                        data-widget-landing-page="/"
                    />
                </span>
            </div>
          </nav>
        </header>
      )}
    </>
  );
}
