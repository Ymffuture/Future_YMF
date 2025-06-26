import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, LogOut, LogIn } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isLoggedIn = localStorage.getItem('token');

  const toggleDarkMode = () => {
  setDarkMode(!darkMode); // Assuming this updates your state
  document.body.classList.toggle('dark'); // Target the body element
};

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md text-primary dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-accent">
            Future
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary dark:text-accent font-semibold underline'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary transition'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-accent"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-red-500 flex items-center gap-1 hover:underline">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            ) : (
              <Link to="/sign-in" className="text-green-600 flex items-center gap-1 hover:underline">
                <LogIn className="w-4 h-4" /> Login
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} title="Toggle Theme">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <ul className="space-y-3">
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-primary dark:text-accent font-semibold'
                      : 'block text-gray-600 dark:text-gray-300 hover:text-primary'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="text-red-500 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/sign-in" className="text-green-600 flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

