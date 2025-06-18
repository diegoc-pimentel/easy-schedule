import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          O que dizem nossos usuários
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white border rounded shadow">
            <p className="text-gray-600 mb-4">
              “O EasySchedule facilitou muito meus agendamentos. Agora tenho mais tempo para focar nos meus clientes.”
            </p>
            <h3 className="text-lg font-semibold text-blue-700">João Silva</h3>
            <p className="text-sm text-gray-500">Barbeiro</p>
          </div>
          <div className="p-6 bg-white border rounded shadow">
            <p className="text-gray-600 mb-4">
              “Muito intuitivo e prático. Recomendo para qualquer profissional autônomo!”
            </p>
            <h3 className="text-lg font-semibold text-blue-700">Ana Souza</h3>
            <p className="text-sm text-gray-500">Consultora</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials