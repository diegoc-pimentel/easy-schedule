import React from 'react'

const Header = () => {
  return (
    <header className='bg-white shadow-md'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-blue-600'>EasySchedule</h1>
            <nav>
                <a href='#' className='text-grey-700 hover:text-blue-600'>Entrar</a>
            </nav>
        </div>
    </header>
  )
}

export default Header