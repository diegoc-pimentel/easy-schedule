import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EasySchedule
        </Link>
        <nav className="flex space-x-4">
          <Link to="/agendar" className="text-gray-700 hover:text-blue-600">
            Agendar
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header