import React from 'react'

const Hero = () => {
  return (
    <section className='bg-blue-50 py-20'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-blue-700 mb-4'>
                Agendamentos Online Simples e Rapidos
            </h2>
            <p className='text-gray-600 mb-8'>Organize seus horários sem complicação. Para salões, consultorias e muito mais.</p>
            <a href='#' className='inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition'>Agendar Agora</a>
        </div>
    </section>
  )
}

export default Hero