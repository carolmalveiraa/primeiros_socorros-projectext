import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, HeartPulse, Shield } from "lucide-react";

const clientes = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_petrobras.gif", alt: "Petrobras" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/FraPort-Logo.png", alt: "GE" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/EDP_logo.svg/1200px-EDP_logo.svg.png", alt: "EDP" },
  { src: "https://www.complexodopecem.com.br/wp-content/uploads/2020/03/bitmap.png", alt: "Complexo do Pecém" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4HFjm89539gZsBVyQGTpqYee1u4YdqcXzw&s", alt: "CSP" },
  { src: "https://logodownload.org/wp-content/uploads/2020/05/vli-logistica-logo-0.png", alt: "VL! Logística" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Enel_Group_logo.svg/2560px-Enel_Group_logo.svg.png", alt: "Enel" },
  { src: "https://www.sbdc.com.br/wp-content/uploads/2021/08/LogoCarreiras.png", alt: "Eneva" },
  { src: "https://investidorsardinha.r7.com/wp-content/uploads/2020/11/ipo-da-aeris-12.png", alt: "Aeris" },
  { src: "https://tecerterminais.com.br/wp-content/uploads/2024/04/tecer-logo-new.png", alt: "Tecer" },
  { src: "https://www.aecipp.com.br/sites/default/files/associados/logo/associados_unilink.png", alt: "Unilink" },
  { src: "https://upload.wikimedia.org/wikipedia/fi/2/2c/APM_Terminals_logo.png", alt: "APM Terminals" },
  { src: "https://cdn.prod.website-files.com/641d7fbf3061b9ecd473b5af/644aab6f9633969151ee8bbb_Governo%20do%20Estado%20do%20Ceara%CC%81_.webp", alt: "Governo do Estado do Ceará" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bras%C3%A3o_de_Fortaleza.svg/800px-Bras%C3%A3o_de_Fortaleza.svg.png", alt: "Prefeitura de Fortaleza" },
];


const HomePage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-white  text-blue-900 py-16">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Primeiros Socorros no ambiente de trabalho
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-700">
              Capacite-se com a <span className="font-bold text-red-500">Nordeste Emergências</span> e esteja pronto para agir em situações críticas!
            </p>
            <Link
              to="/curso"
              className="inline-block bg-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
            >
              Iniciar Curso
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=60"
            alt="Pessoa realizando primeiros socorros"
            className="rounded-lg shadow-2xl max-w-xs md:max-w-md w-full h-auto"
            loading="lazy"
            width={400}
            height={300}
          />
        </div>

      </section>
      
      {/* Projeto de Extensão */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
        <div className="container-custom max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6 text-white">Este é um Projeto de Extensão</h3>
          <p className="text-white text-lg text-center mb-6">
            Projetos de extensão são iniciativas que integram universidade e sociedade, promovendo a aplicação prática do conhecimento acadêmico em benefício da comunidade.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">O que será desenvolvido?</h4>
            <p className="text-gray-700 mb-2">
              Pensado junto a Nordeste Emergências, o projeto visa capacitar profissionais e estudantes da base para atuarem em situações de emergência, promovendo a saúde e segurança no ambiente de trabalho.
            </p>
            <p className="text-gray-700 font-semibold">
              Existirá um curso promovendo a capacitação em primeiros socorros além de um quiz para testar os conhecimentos adquiridos.
            </p>
          </div>
        </div>
      </section>

      {/* Clientes/Parceiros */}
      <section className="py-10">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Principais Clientes</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clientes.map((cliente, idx) => (
              <img
                key={idx}
                src={cliente.src}
                alt={cliente.alt}
                className="h-16 w-auto grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">O que você vai aprender?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg shadow-md p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
              <CheckCircle className="w-14 h-14 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Atendimento Inicial</h3>
              <p className="text-gray-700 text-center">Como agir nos primeiros minutos de uma emergência.</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
              <HeartPulse className="w-14 h-14 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Técnicas de Socorro</h3>
              <p className="text-gray-700 text-center">Aprenda técnicas essenciais para prestar primeiros socorros.</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
              <Shield className="w-14 h-14 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Prevenção de Acidentes</h3>
              <p className="text-gray-700 text-center">Dicas para evitar acidentes no ambiente de trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Nordeste Emergências */}
      <section className="py-8 bg-white">
        <div className="container-custom max-w-9xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-900">Sobre a Nordeste Emergências</h3>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-12">
            <div className="flex flex-col items-center mb-4">
              <img
                src="/Nordeste Emergências.png"
                alt="Logo Nordeste Emergências"
                className="mx-auto mb-4 w-32 h-auto"
                loading="lazy"
                width={128}
                height={64}
              />
              <p className="text-gray-700 mb-4 text-center w-full md:w-11/12 lg:w-4/5">
                A Nordeste Emergências é uma empresa moderna e equipada com a mais alta tecnologia para atendimento pré-hospitalar de urgência e emergência médica, preparada para atuar em todo o território nacional.
              </p>
              <p className="text-gray-700 mb-4 text-center w-full md:w-11/12 lg:w-4/5">
                Sua atuação visa suprir a carência no transporte terrestre e aéreo emergencial de qualidade, para atender em diversos segmentos, como: hospitais, planos de saúde, indústrias, serviço de saúde offshore e eventos, através de uma central de atendimento médico 24 horas.
              </p>
              <p className="text-gray-700 mb-0 text-center w-full md:w-11/12 lg:w-4/5">
                Seu principal objetivo é construir com solidez e segurança parcerias duradouras com seus clientes e fornecedores.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-200 gap-8">
              {/* Missão e Visão */}
              <div className="pr-0 md:pr-8 pb-4 md:pb-0">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Missão</h4>
                <p className="text-gray-700 mb-4">
                  Prestar serviços diferenciados, visando sempre o bem-estar de nossos clientes e colaboradores, garantindo qualidade de atendimento, através de profissionais motivados e capacitados.
                </p>
                <h4 className="text-xl font-bold text-blue-900 mb-2 mt-6">Visão</h4>
                <p className="text-gray-700">
                  Ser referência nacional no atendimento pré-hospitalar e ao mesmo tempo ser uma empresa inovadora, reconhecida pela qualidade no atendimento, eficiência e tecnologia, conduzindo seus negócios com excelência, expansão contínua e sustentabilidade.
                </p>
              </div>
              {/* Valores */}
              <div className="px-0 md:px-8 py-4 md:py-0 flex flex-col">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Valores</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ética e transparência</li>
                  <li>Respeito à vida</li>
                  <li>Sustentabilidade</li>
                  <li>Excelência no atendimento</li>
                  <li>Empreendedorismo e inovação</li>
                  <li>Valorização de colaboradores</li>
                  <li>Comprometimento com o cliente</li>
                </ul>
              </div>
              {/* Onde Estamos */}
              <div className="pl-0 md:pl-8 pt-4 md:pt-0 flex flex-col items-start">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Onde Estamos</h4>
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                  <ul className="list-disc list-inside text-gray-700 text-sm mb-2 md:mb-0 md:w-1/2">
                    <li>Ceará</li>
                    <li>Rio Grande do Norte</li>
                    <li>Pernambuco</li>
                    <li>Sergipe</li>
                    <li>Bahia</li>
                    <li>Piauí</li>
                    <li>Maranhão</li>
                    <li>Pará</li>
                    <li>Amazonas</li>
                    <li>Goiás</li>
                    <li>Mato Grosso</li>
                    <li>Espírito Santo</li>
                    <li>Rio de Janeiro</li>
                    <li>São Paulo</li>
                    <li>Rio Grande do Sul</li>
                  </ul>
                  <img
                    src="https://static.wixstatic.com/media/15b2f2_71efe98e083a4209a2e63aac0a808fd9~mv2.png/v1/fill/w_501,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mapa.png"
                    alt="Mapa de atuação Nordeste Emergências"
                    className="mx-auto md:w-1/2 max-w-xs"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Procedimentos */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <img
              src="https://static.wixstatic.com/media/15b2f2_0caf3aeed0554f65bb0814090301e6a6~mv2.jpg/v1/fill/w_1960,h_1600,q_90,enc_avif,quality_auto/15b2f2_0caf3aeed0554f65bb0814090301e6a6~mv2.jpg"
              alt="Veículos de Emergência"
              className="rounded-lg shadow-lg object-cover w-full h-64"
              loading="lazy"
            />
            <img
              src="https://static.wixstatic.com/media/15b2f2_6abe59584b3d440c9ccef80f49036d5f~mv2.jpg/v1/fill/w_1960,h_1600,q_90,enc_avif,quality_auto/15b2f2_6abe59584b3d440c9ccef80f49036d5f~mv2.jpg"
              alt="Procedimento"
              className="rounded-lg shadow-lg object-cover w-full h-64"
              loading="lazy"
            />
            <img
              src="https://static.wixstatic.com/media/15b2f2_daa0747d4d8c49ac9bf8832c39ec59af~mv2.jpg/v1/fill/w_1960,h_1600,q_90,enc_avif,quality_auto/15b2f2_daa0747d4d8c49ac9bf8832c39ec59af~mv2.jpg"
              alt="Colaboradores"
              className="rounded-lg shadow-lg object-cover w-full h-64"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="mb-8 text-lg">Clique no botão abaixo e inicie sua jornada de aprendizado em primeiros socorros!</p>
          <Link
            to="/curso"
            className="inline-block bg-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
          >
            Iniciar Curso Agora
          </Link>
        </div>
      </section>

    </main>
  );
};

export default HomePage;