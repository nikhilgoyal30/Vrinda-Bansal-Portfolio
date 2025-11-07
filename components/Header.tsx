import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-backdrop)] backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <div></div>
          <ul className="flex items-center space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm md:text-base transition-colors duration-300 ${
                      isActive ? 'text-[var(--accent-color)]' : 'text-[var(--text-muted)]'
                    } hover:text-[var(--accent-color)] font-medium`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>
    </header>
  );
};

export default Header;