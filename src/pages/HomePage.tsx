import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Award, Users, Building, Scale, Home, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Primeiros Socorros no Ambiente de Trabalho</h1>
              <p className="text-xl mb-6">
                Um projeto de extensão desenvolvido em parceria com a Nordeste Emergências.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/curso" className="btn btn-secondary">
                  Iniciar Curso
                </Link>
                <Link to="/quiz" className="btn bg-white text-blue-500 hover:bg-blue-50">
                  Testar Conhecimentos
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Primeiros Socorros" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Sobre o Projeto de Extensão</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-12">
            <p className="text-gray-700 leading-relaxed">
              O projeto de extensão é uma iniciativa desenvolvida por instituições de ensino, que visa aplicar conhecimentos acadêmicos em benefício da comunidade externa. Esses projetos conectam teoria e prática, promovendo a troca de saberes entre a academia e a sociedade. As iniciativas podem incluir oficinas, palestras, atendimentos, pesquisas aplicadas, e outras atividades que respondam a demandas específicas da comunidade.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Eles podem abordar áreas diversas como saúde, educação, cultura, tecnologia, entre outras, com o objetivo de gerar impacto social, desenvolvimento local e melhorar a qualidade de vida da população. Além disso, envolvem estudantes, professores e comunidade em um processo colaborativo de aprendizado e transformação social.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-500">Objetivos de Desenvolvimento Sustentável</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 flex flex-col items-center text-center">
              <Home className="h-12 w-12 text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Indústrias, Inovação e Infraestrutura</h4>
              <p className="text-gray-600 text-sm">Promovendo ambientes de trabalho mais seguros e preparados para emergências.</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <Scale className="h-12 w-12 text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Paz, justiça e instituições eficazes</h4>
              <p className="text-gray-600 text-sm">Contribuindo para ambientes de trabalho mais justos e seguros.</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Saúde e bem-estar</h4>
              <p className="text-gray-600 text-sm">Promovendo conhecimentos que podem salvar vidas e melhorar a saúde no trabalho.</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Educação de qualidade</h4>
              <p className="text-gray-600 text-sm">Oferecendo formação de qualidade em primeiros socorros para profissionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">O que buscamos oferecer com este projeto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curso Completo</h3>
              <p className="text-gray-600">
                Material didático completo sobre primeiros socorros no ambiente empresarial, com textos, ilustrações e dicas práticas.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quiz Interativo</h3>
              <p className="text-gray-600">
                Teste seus conhecimentos com nosso quiz interativo, ganhe pontos e compare seu desempenho com outros participantes.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Foco Empresarial</h3>
              <p className="text-gray-600">
                Conteúdo desenvolvido especificamente para o ambiente corporativo, abordando situações comuns no dia a dia das empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nordeste Emergências */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom"></div>
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">Sobre a Nordeste Emergências</h3>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-12">
        <p className="text-gray-700 leading-relaxed">
          A Nordeste Emergências é uma empresa moderna e equipada com a mais alta tecnologia para atendimento pré-hospitalar de urgência e emergência médica, preparada para atuar em todo o território nacional.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Sua atuação visa suprir a carência no transporte terrestre e aéreo emergencial de qualidade, para atender em diversos segmentos, como: hospitais, planos de saúde, indústrias, serviço de saúde offshore e eventos, através de uma central de atendimento médico 24 horas.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Seu principal objetivo é construir com solidez e segurança parcerias duradouras com seus clientes e fornecedores.
        </p>
        <h5 className="text-xl font-semibold text-blue-700 mt-6">Missão</h5>
        <p className="text-gray-700 leading-relaxed mt-2">
          Prestar serviços diferenciados, visando sempre o bem-estar de nossos clientes e colaboradores, garantindo qualidade de atendimento, através de profissionais motivados e capacitados.
        </p>
        <h5 className="text-xl font-semibold text-blue-700 mt-6">Visão</h5>
        <p className="text-gray-700 leading-relaxed mt-2">
          Ser referência nacional no atendimento pré-hospitalar e ao mesmo tempo ser uma empresa inovadora, reconhecida pela qualidade no atendimento, eficiência e tecnologia, conduzindo seus negócios com excelência, expansão contínua e sustentabilidade.
        </p>
        <h5 className="text-xl font-semibold text-blue-700 mt-6">Valores</h5>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Ética e transparência</li>
          <li>Respeito à vida</li>
          <li>Sustentabilidade</li>
          <li>Excelência no atendimento</li>
          <li>Empreendedorismo e inovação</li>
          <li>Valorização de colaboradores</li>
          <li>Comprometimento com o cliente</li>
        </ul>
        </div>
        <div className="justify-center flex flex-wrap sm:space-x-4 gap-4">
                <img 
                  src="https://static.wixstatic.com/media/1a1c95_ebd225241de144e9b8bb53526b71f046~mv2.jpg/v1/fill/w_538,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20220224-WA0019.jpg" 
                  alt="Nordeste Emergências - Equipe" 
                  className="rounded-lg shadow-lg h-auto"/>
                <img 
                  src="https://static.wixstatic.com/media/1a1c95_194dfead9cb947a9858de61fef9a476e~mv2.jpg/v1/crop/x_9,y_337,w_4023,h_2341/fill/w_538,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20211223_075146.jpg" 
                  alt="Equipe" 
                  className="rounded-lg shadow-lg h-auto"/>
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Aprenda habilidades que podem salvar vidas e faça a diferença no seu ambiente de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/curso" className="btn bg-white text-blue-500 hover:bg-blue-50">
              Iniciar Curso
            </Link>
            <Link to="/quiz" className="btn btn-secondary">
              Testar Conhecimentos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;