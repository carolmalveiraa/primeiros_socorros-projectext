import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Sobre o Projeto</h3>
            <p className="text-sm">
            Projeto de extensão desenvolvido para integrar teoria e prática, atendendo empresas reais e promovendo inovação e tecnologia na área da saúde.
            </p>
          </div>
          
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">ODS Relacionados</h3>
            <ul className="text-sm space-y-2">
              <li>Saúde e bem-estar</li>
              <li>Educação de qualidade</li>
              <li>Indústria, Inovação e infraestrutura</li>
            </ul>
          </div>
          
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm">
              Para mais informações sobre o projeto, entre em contato conosco através dos nosso canais.
            </p>
            <p className='text-sm flex items-center justify-center mt-4'><FaPhone/>(85) 9 8766-1076</p>
          </div>
      </div>

      <div className="mt-8 pt-3 text-center">
            <ul className="flex items-center justify-center text-sm space-x-4">
              <li>
                <a href="https://github.com/carolmalveiraa" className="flex items-center justify-center text-sm space-x-2"><FaGithub /> <span>GitHub</span></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/carolinemalveiraa" className="flex items-center justify-center text-sm space-x-2"><FaLinkedin /> <span>LinkedIn</span></a>
              </li>
              <li>
                <a href="https://wa.me/8599161-8454" className="flex items-center justify-center text-sm space-x-2">
                  <FaWhatsapp /> <span>WhatsApp</span>
                </a>
              </li>
            </ul>
      </div>
        
        <div className="mt-4 pt-6 border-t border-blue-400 text-center">
            <p className="flex items-center justify-center text-sm">
            Desenvolvido com <a href="https://www.nordesteemergencias.com.br/" className="underline text-white">&nbsp;Nordeste Emergências&nbsp; </a> por Carol Malveira - 2025 &reg;
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;