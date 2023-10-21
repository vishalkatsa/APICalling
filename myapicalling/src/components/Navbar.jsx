import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 px-16 py-4 overflow-scroll scrollhide">
    <div className="container mx-auto flex items-center justify-between text-white font-bold">
      <Link to={'home'}>Fake Shopping</Link>
      <div className="flex space-x-4">
        <Link to={'/'} className="hover:underline">All</Link>
        <Link to={'MensClothing'} className="hover:underline">Men's Clothing</Link>
        <Link to={'Jewelry'} className="hover:underline">Jewelry</Link>
        <Link to={'Electronics'} className="hover:underline">Electronics</Link>
        <Link to={'WomensClothing'} className="hover:underline">Women's Clothing</Link>
      </div>
    </div>
  </nav>
    </>
  )
}
