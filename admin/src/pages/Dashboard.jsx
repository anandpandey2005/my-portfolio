import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../handler';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Navbar />
      <main className={`w-full ml-[6%] flex-1 transition-all duration-300 ease-in-out `}>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
