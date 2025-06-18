import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-white border-t'>
        <div className='max-w-6xl mx-auto px-1 py-2 text-center text-gray-600'>
            &copy; {new Date().getFullYear()} EasySchedule. Todos os direitos reservados.
        </div>
    </footer>
  )
}

export default Footer