export default function GrupoAML() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">Grupo AML</h1>
            <p className="text-sm text-green-100">Especialistas em Empréstimo Consignado</p>
          </div>

          <a
            href="https://wa.me/5548991892826"
            target="_blank"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-3 rounded-2xl shadow-lg transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              Crédito rápido e seguro
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight text-green-900">
              Empréstimo consignado com taxas reduzidas e aprovação rápida.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              O Grupo AML oferece soluções financeiras completas para servidores,
              aposentados, pensionistas e trabalhadores que buscam crédito com
              segurança, transparência e agilidade.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/5548991892826"
                target="_blank"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg"
              >
                Solicitar Simulação
              </a>

              <a
                href="#servicos"
                className="border-2 border-green-700 text-green-700 px-6 py-4 rounded-2xl font-semibold"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Solicite sua análise gratuita
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600">
                <option>Selecione o tipo de crédito</option>
                <option>Consignado</option>
                <option>Portabilidade</option>
                <option>Refinanciamento</option>
                <option>Cartão Benefício</option>
                <option>Crédito Pessoal</option>
              </select>

              <button
                type="button"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl shadow-lg"
              >
                Solicitar Atendimento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-900">
              Nossos Serviços
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Soluções financeiras completas para diferentes perfis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Empréstimo Consignado',
                text: 'Parcelas descontadas em folha com taxas reduzidas e contratação rápida.',
              },
              {
                title: 'Portabilidade',
                text: 'Reduza os juros do seu contrato atual e economize todos os meses.',
              },
              {
                title: 'Refinanciamento',
                text: 'Libere crédito extra aproveitando contratos ativos.',
              },
              {
                title: 'Cartão Benefício',
                text: 'Mais limite e vantagens exclusivas para servidores e aposentados.',
              },
              {
                title: 'Crédito Pessoal',
                text: 'Opções rápidas e seguras para diferentes necessidades financeiras.',
              },
              {
                title: 'Atendimento Especializado',
                text: 'Equipe preparada para encontrar a melhor condição para você.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-100 rounded-3xl p-8 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl mb-6"></div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Por que escolher o Grupo AML?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Taxas competitivas',
              'Liberação rápida',
              'Atendimento humanizado',
              'Segurança e transparência',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black leading-tight">
            Faça sua simulação agora mesmo e descubra quanto pode economizar.
          </h2>

          <p className="mt-6 text-lg text-black/80">
            Atendimento rápido pelo WhatsApp com análise sem compromisso.
          </p>

          <a
            href="https://wa.me/5548991892826"
            target="_blank"
            className="inline-block mt-8 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">Grupo AML</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Especialistas em soluções financeiras e crédito consignado com
              atendimento profissional e transparente.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <p className="text-gray-400">WhatsApp: (48) 99189-2826</p>
            <p className="text-gray-400 mt-2">Instagram: @amlgrupo_</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Atendimento</h4>
            <p className="text-gray-400">Segunda a Sexta</p>
            <p className="text-gray-400">08h às 18h</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Grupo AML - Todos os direitos reservados.
           <br />
  <p>cnpj:54.032.077/0001-72</p>
        </div>
      </footer>
    </div>
  )
}
