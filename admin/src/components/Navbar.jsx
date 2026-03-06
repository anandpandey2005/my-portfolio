import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Mail,
  User,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const siteTitle = import.meta.env.VITE_HTML_TITLE || 'Admin Panel';

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
    { name: 'Blog Posts', path: '/blog', icon: <FileText size={20} /> },
    { name: 'Messages', path: '/messages', icon: <Mail size={20} /> },
    { name: 'Resume', path: '/resume', icon: <User size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <>
      <aside
        className={`
        fixed top-0 left-0 sm:pl-5 sm:pr-5 min-h-screen bg-[#f8f9fa] border-r border-gray-200 
        transition-all duration-300 ease-in-out flex flex-col 
       }
      `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 
                     bg-blue-600 text-white rounded-full p-1 shadow-md 
                     hover:bg-blue-700 transition-colors border-2 border-white"
        >
          {isOpen ? <ChevronLeft size={26} /> : <ChevronRight size={26} />}
        </button>

        <div className="p-6 mb-4">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300`}
          >
            <div className="min-w-[32px] h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {siteTitle.charAt(0)}
            </div>
            <h1
              className={`text-lg font-bold text-gray-800 transition-opacity duration-300 ${!isOpen && 'opacity-0 w-0'}`}
            >
              {siteTitle}
            </h1>
          </div>
        </div>

        <nav className="flex flex-col gap-2 px-3 flex-grow">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                flex items-center gap-4 p-3 rounded-xl transition-all duration-200 text-sm font-medium
                ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <span className={`shrink-0 ${isOpen ? '' : 'mx-auto'}`}>{link.icon}</span>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}
              >
                {link.name}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200">
          <button className="flex items-center gap-4 p-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium">
            <LogOut size={20} className={isOpen ? '' : 'mx-auto'} />
            <span
              className={`transition-all duration-300 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
