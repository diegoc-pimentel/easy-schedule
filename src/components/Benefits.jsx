import React from 'react'

const Benefits = () => {
  return (
    <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-12'>Por que usar o EasyScheduler?</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6 border rounded shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold mb-2'>Praticidade</h3>
                <p className='text-grey-600'>Agende e gerencie compromissos de forma rápida e intuitiva.</p>
            </div>

            <div className='p-6 border rounded shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold mb-2'>Flexibilidade</h3>
                <p className='text-grey-600'>Atenda mais clientes ajustando horários com facilidade.</p>
            </div>

            <div className='p-6 border rounded shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold mb-2'>Organização</h3>
                <p className='text-grey-600'>Tenha controle total da sua agenda e reduza faltas.</p>
            </div>
        </div>
    </section>
  )
}

export default Benefits