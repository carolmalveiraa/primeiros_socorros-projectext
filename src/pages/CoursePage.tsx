import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Heart, AlertTriangle, Thermometer, Ban as Bandage, Pill, Activity, Droplet, Clipboard } from 'lucide-react';

const CoursePage: React.FC = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = [
    {
      id: 1,
      title: "Introdução aos Primeiros Socorros",
      content: (
        <div className="space-y-6">
          <p>
            Primeiros socorros são os cuidados imediatos prestados a uma pessoa que sofreu um acidente ou mal súbito, até a chegada de ajuda especializada. O objetivo é preservar a vida, aliviar o sofrimento, evitar o agravamento da situação e promover a recuperação.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Princípios Básicos dos Primeiros Socorros</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mantenha a calma e avalie rapidamente o que aconteceu.</li>
              <li>Garanta a sua segurança e a da vítima antes de agir.</li>
              <li>Peça ajuda imediatamente para o setor responsável da empresa (Nordeste Emergências: <strong>(85) 9 8766-1076</strong>).</li>
              <li>Verifique se a vítima está consciente e respirando.</li>
              <li>Realize apenas procedimentos para os quais você foi orientado neste curso.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/29/16/55/first-aid-4089599_1280.jpg"
              alt="Kit de primeiros socorros"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-700 mb-2">Situações comuns na base</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quedas nas escadas do prédio (administração, diretoria, RH, etc.)</li>
              <li>Cortes ou ferimentos no almoxarifado ou farmácia</li>
              <li>Mal súbito no setor financeiro, comercial ou refeitório</li>
              <li>Acidentes com veículos da frota</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2">Importante!</h4>
            <p>
              Primeiros socorros não substituem o atendimento profissional. Sempre acione o serviço de emergência da empresa quando necessário.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Avaliação Inicial da Vítima",
      content: (
        <div className="space-y-6">
          <p>
            Avaliar rapidamente a vítima é fundamental para identificar riscos e priorizar o que deve ser feito primeiro. Use o método simples abaixo para qualquer situação na empresa.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Passos para Avaliação Inicial</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Segurança:</strong> Certifique-se de que o local é seguro para você e para a vítima (ex: escadas livres, sem risco de queda de objetos, etc).</li>
              <li><strong>Consciência:</strong> Fale com a vítima e toque levemente nos ombros: "Você está bem?"</li>
              <li><strong>Respiração:</strong> Observe se o peito se movimenta e tente sentir o ar saindo pelo nariz ou boca por até 10 segundos.</li>
              <li><strong>Acione ajuda:</strong> Se a vítima não responder ou não estiver respirando normalmente, peça para alguém chamar imediatamente o serviço de emergência da empresa.</li>
              <li><strong>Outros sinais:</strong> Procure por sangramentos, fraturas aparentes, convulsões ou outros sinais de gravidade.</li>
            </ol>
          </div>

          <div className="flex justify-center">
            <img
              src="https://alfredonegreirosadvocacia.adv.br/wp-content/uploads/2023/07/Acidente-de-Trabalho-Tudo-o-que-voce-precisa-saber-1.jpg"
              alt="Avaliação de vítima"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-700 mb-2">Dicas para o ambiente da base</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Em caso de queda nas escadas, não movimente a vítima se suspeitar de fratura ou dor intensa.</li>
              <li>Em cortes ou sangramentos, use luvas descartáveis do kit de primeiros socorros.</li>
              <li>Se a vítima estiver desacordada, mantenha-a de lado (posição lateral de segurança) se não houver suspeita de fratura.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Reanimação Cardiopulmonar (RCP)",
      content: (
        <div className="space-y-6">
          <p>
            A Reanimação Cardiopulmonar (RCP) é um procedimento de emergência que pode salvar vidas quando alguém para de respirar ou o coração para de bater. Situações como quedas nas escadas, mal súbito no setor administrativo, ou até mesmo um desmaio no refeitório podem exigir uma resposta rápida.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Quando usar a RCP?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>A pessoa está inconsciente e não responde ao ser chamada ou tocada.</li>
              <li>Não está respirando normalmente (ou apenas com respiração ofegante/gasping).</li>
            </ul>
            <p className="mt-2">
              Exemplos: Um colaborador do RH desmaia e não responde; alguém da farmácia cai na escada e para de respirar.
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-700 mb-2">Atenção!</h4>
            <p>
              Só inicie a RCP se a pessoa realmente não estiver respirando normalmente. Se estiver em dúvida, é melhor agir!
            </p>
          </div>

          <h4 className="font-semibold text-lg text-blue-700 mb-3">Passo a passo da RCP para leigos:</h4>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">1. Verifique a segurança do local</h5>
              <p>
                Antes de ajudar, olhe ao redor: não se coloque em risco! Exemplo: se alguém caiu na escada, veja se não há objetos soltos ou risco de queda para você.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">2. Veja se a pessoa responde</h5>
              <p>
                Toque nos ombros e pergunte em voz alta: "Você está bem?" Se não houver resposta, siga para o próximo passo.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">3. Peça ajuda imediatamente</h5>
              <p>
                Peça para alguém ligar para o serviço de emergência da empresa (Nordeste Emergências: <strong>(85) 9 8766-1076</strong>) e, se possível, trazer o DEA (Desfibrilador Externo Automático) se houver na base.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">4. Verifique a respiração</h5>
              <p>
                Observe se o peito da pessoa se move, aproxime o rosto para sentir o ar. Faça isso por até 10 segundos.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">5. Inicie as compressões torácicas</h5>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Deite a pessoa de costas, em uma superfície firme (piso do escritório, corredor, almoxarifado, etc).</li>
                <li>Ajoelhe-se ao lado do peito da vítima.</li>
                <li>Coloque uma mão sobre a outra, com a base da mão no centro do tórax (entre os mamilos).</li>
                <li>Mantenha os braços esticados e pressione forte e rápido (aprox. 5 cm de profundidade, 100 a 120 vezes por minuto).</li>
                <li>Deixe o tórax voltar totalmente após cada compressão.</li>
              </ol>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">6. Continue até chegar ajuda</h5>
              <p>
                Não pare até a chegada do socorro, até a pessoa voltar a respirar ou até você não conseguir mais.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-400">
            <strong>Dica:</strong> Se houver mais pessoas, revezem nas compressões a cada 2 minutos para não perder a força.
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <strong>Não faça:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Não tente dar água ou comida para a pessoa inconsciente.</li>
              <li>Não sacuda a vítima com força.</li>
              <li>Não pare as compressões sem motivo.</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-6">
            <div className="flex flex-col items-center">
              <img
                src="https://www.hcor.com.br/wp-content/uploads/2018/08/HCor-banner-reanimacao-cardiopulmonar-480x220.jpg"
                alt="Posicionamento das mãos para RCP"
                className="rounded-lg shadow-md w-auto h-40 mb-2"
              />
              <span className="text-sm text-gray-600 text-center">Posicionamento correto das mãos</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://institutocdt.com.br/blog/wp-content/uploads/2024/03/reanimacao-cardiorrespiratoria-medico.png"
                alt="Compressão torácica durante RCP"
                className="rounded-lg shadow-md w-auto h-40 mb-2"
              />
              <span className="text-sm text-gray-600 text-center">Braços esticados e força no centro do tórax</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.freepik.com/fotos-premium/trabalhador-eletrico-sofreu-um-acidente-por-choque-eletrico-inconsciente-rcp-da-equipe-de-seguranca-para-primeiros-socorros-eletricista-perde-em-acidente-por-choque-eletrico-no-local-de-trabalho-acidente-na-sala-de-controle-da-fabrica_41097-331.jpg"
                alt="Ambiente seguro para iniciar RCP"
                className="rounded-lg shadow-md w-auto h-40 mb-2"
              />
              <span className="text-sm text-gray-600 text-center">Certifique-se de que o local é seguro antes de iniciar</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <strong>Situações comuns na base:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Queda nas escadas do prédio (administração, diretoria, RH, etc).</li>
              <li>Mal súbito no setor financeiro ou comercial.</li>
              <li>Colaborador da farmácia ou almoxarifado encontrado desacordado.</li>
              <li>Motorista da frota passando mal no estacionamento.</li>
            </ul>
            <span className="block mt-2">Em qualquer situação, mantenha a calma e siga os passos acima.</span>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Para fixar:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Você não precisa ser da área da saúde para salvar uma vida.</li>
              <li>O mais importante é agir rápido e pedir ajuda.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Desmaio e Convulsões",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Desmaio (Síncope)</h3>
          <p>
            O desmaio é uma perda rápida e temporária da consciência, geralmente causada por queda de pressão ou emoções fortes. Pode acontecer em qualquer setor da empresa, especialmente em ambientes quentes, após esforço físico ou em situações de estresse.
          </p>
            <div className="flex justify-center my-6">
            <img
              src="https://drmauriciofriedrich.com.br/wp-content/uploads/elementor/thumbs/37201863_s-o7fhepecc03b0wkro3kt6oclh7opnxlqdll4lk3loo.jpg"
              alt="Primeiros socorros para desmaio"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
            </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Deite a pessoa de costas e eleve as pernas cerca de 30 cm.</li>
              <li>Afrouxe roupas apertadas, principalmente no pescoço.</li>
              <li>Mantenha o ambiente arejado.</li>
              <li>Não ofereça nada para beber ou comer enquanto a pessoa não estiver totalmente desperta.</li>
              <li>Se não acordar em até 1 minuto, acione o serviço de emergência da empresa.</li>
            </ol>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Se perceber que alguém vai desmaiar (tontura, suor frio, visão turva), sente ou deite a pessoa imediatamente para evitar quedas.
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Convulsões</h3>
          <p>
            Convulsões são movimentos involuntários do corpo, geralmente acompanhados de perda de consciência. Podem ocorrer em pessoas com epilepsia, febre alta ou após acidentes.
          </p>
          <div className="flex justify-center">
            <img
              src="https://www.hcor.com.br/wp-content/uploads/2020/01/shutterstock_1087605344.jpg"
              alt="Primeiros socorros para convulsão"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a calma e afaste objetos perigosos ao redor da pessoa.</li>
              <li>Não tente segurar os movimentos nem coloque nada na boca da vítima.</li>
              <li>Proteja a cabeça com algo macio (casaco, bolsa).</li>
              <li>Após a convulsão, vire a pessoa de lado (posição lateral de segurança).</li>
              <li>Permaneça ao lado da vítima até ela recobrar a consciência.</li>
              <li>Acione o serviço de emergência da empresa se a convulsão durar mais de 5 minutos, repetir ou se a pessoa não acordar.</li>
            </ol>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <strong>Importante:</strong> Não tente dar água, medicamentos ou alimentos durante ou logo após a convulsão.
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Ferimentos e Hemorragias",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Ferimentos</h3>
          <p>
            Ferimentos podem acontecer em qualquer setor, principalmente no almoxarifado, farmácia ou manutenção. Podem ser cortes, arranhões, perfurações ou pancadas.
          </p>
          <div className="flex justify-center">
            <img
              src="https://ferreirabordinhao.adv.br/wp-content/uploads/2023/11/acidente-de-trabalho-capa-red.jpg"
              alt="Primeiros socorros para corte"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Como agir em ferimentos leves:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Lave as mãos antes de tocar no ferimento.</li>
              <li>Limpe o local com água e sabão.</li>
              <li>Seque suavemente e aplique antisséptico.</li>
              <li>Cubra com curativo limpo e seco.</li>
            </ol>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Hemorragias</h3>
          <p>
            Hemorragia é a perda de sangue, que pode ser visível (externa) ou não (interna). Cortes profundos, acidentes com ferramentas ou quedas podem causar sangramento.
          </p>
          <div className="flex justify-center">
            <img
              src="https://d2gizm3iyflxh9.cloudfront.net/artmed_blog/aa274f65-63ee-4522-b11e-0a868df3b3c3.jpg"
              alt="Primeiros socorros para hemorragia"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2">Como agir em hemorragias:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Coloque luvas descartáveis.</li>
              <li>Pressione o local com gaze ou pano limpo por pelo menos 10 minutos.</li>
              <li>Se continuar sangrando, mantenha a pressão e adicione mais panos por cima.</li>
              <li>Eleve o membro afetado, se possível.</li>
              <li>Acione o serviço de emergência da empresa se o sangramento não parar ou for intenso.</li>
            </ol>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Nunca remova objetos presos ao ferimento. Imobilize e aguarde socorro.
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Queimaduras",
      content: (
        <div className="space-y-6">
          <p>
            Queimaduras podem ser causadas por calor, eletricidade, produtos químicos ou contato com superfícies quentes. São comuns em áreas de manutenção, cozinha ou almoxarifado.
          </p>
          <div className="flex justify-center">
            <img
              src="https://www.saudeemdia.com.br/wp-content/uploads/2024/06/Queimadura.jpg"
              alt="Primeiros socorros para queimadura"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer em caso de queimadura:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Afaste a vítima da fonte de calor.</li>
              <li>Resfrie a área queimada com água corrente (temperatura ambiente) por 10 a 20 minutos.</li>
              <li>Não use gelo, pasta de dente, manteiga ou outros produtos caseiros.</li>
              <li>Não estoure bolhas.</li>
              <li>Cubra com pano limpo e úmido.</li>
              <li>Retire acessórios (anéis, relógios) antes que inche.</li>
              <li>Acione o serviço de emergência da empresa se a queimadura for extensa, profunda ou em áreas sensíveis (rosto, mãos, pés, genitais).</li>
            </ol>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Queimaduras químicas: lave com água corrente abundante por pelo menos 20 minutos e retire roupas contaminadas.
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <strong>Importante:</strong> Queimaduras elétricas podem causar lesões internas graves. Sempre acione o serviço de emergência da empresa.
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Fraturas e Lesões Musculoesqueléticas",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Fraturas</h3>
          <p>
            Fraturas são quebras de ossos, comuns em quedas nas escadas ou acidentes com veículos da frota. Podem ser fechadas (sem ferida) ou expostas (com ferida e osso aparente).
          </p>
          <div className="flex justify-center">
            <img
              src="https://salvape.com.br/blog/wp-content/uploads/2019/09/307256-quais-as-diferencas-entre-lesao-entorse-contusao-e-luxacao.jpg"
              alt="Primeiros socorros para fratura"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Como agir:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Imobilize o local da fratura sem tentar alinhar o osso.</li>
              <li>Em fratura exposta, cubra com pano limpo sem pressionar.</li>
              <li>Não tente movimentar a vítima, principalmente se houver suspeita de fratura na coluna.</li>
              <li>Acione o serviço de emergência da empresa.</li>
            </ol>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Entorses e Luxações</h3>
          <div className="flex justify-center">
            <img
              src="https://www.clinicavicci.com.br/wp-content/uploads/2023/08/man-touching-shoulder-isolated-grey-background.jpg"
              alt="Primeiros socorros para entorse"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Em entorses (torções), faça repouso, aplique gelo envolto em pano, eleve o membro e comprima levemente com faixa elástica.
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <strong>Importante:</strong> Não tente colocar o osso no lugar em caso de luxação. Imobilize e aguarde socorro.
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Emergências Respiratórias",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Engasgo</h3>
          <p>
            Engasgos podem ocorrer durante refeições no refeitório ou ao falar e rir ao mesmo tempo. Identifique rapidamente se a pessoa consegue tossir ou falar.
          </p>
          <div className="flex justify-center">
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/manobra-de-heimlich-.jpg"
              alt="Primeiros socorros para engasgo"
              className="rounded-lg shadow-lg h-90 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Se a pessoa tossir ou falar, incentive a tossir forte.</li>
              <li>Se não conseguir tossir, falar ou respirar, realize a manobra de Heimlich:</li>
            </ul>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Fique atrás da vítima e envolva a cintura com os braços.</li>
              <li>Feche uma mão em punho e posicione acima do umbigo.</li>
              <li>Com a outra mão, pressione o punho para dentro e para cima, com força.</li>
              <li>Repita até o objeto sair ou a pessoa desmaiar.</li>
            </ol>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Em crianças pequenas, use tapas leves nas costas e compressões abdominais adaptadas.
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Crise de Asma</h3>
          <div className="flex justify-center">
            <img
              src="https://lh5.googleusercontent.com/proxy/yi8BFnew5Kl0GS98zkApXu8xLr0HsRf7G9AAe97id8YLOWwCBCQULITICI_2z25QGpruPTUKV3otHlxHE_IJVVU2a0rIah0rUJ_VsmlpRqzu0PCm3X6x1j_rGQsvY_fkfw"
              alt="Primeiros socorros para asma"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a pessoa sentada e calma.</li>
              <li>Ajude a usar a bombinha, se tiver.</li>
              <li>Afrouxe roupas apertadas.</li>
              <li>Se não melhorar, acione o serviço de emergência da empresa.</li>
            </ol>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Hiperventilação</h3>
          <div className="flex justify-center">
            <img
              src="https://i0.wp.com/sanarmed.com/wp-content/uploads/2025/03/young-woman-with-allergy-sneezing-girl-feeling-sick-having-runny-nose.jpg?fit=6000%2C4000&ssl=1"
              alt="Primeiros socorros para hiperventilação"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Leve a pessoa para um local calmo.</li>
              <li>Peça para respirar devagar, contando até 4 para inspirar e até 6 para expirar.</li>
              <li>Não use sacos de papel.</li>
              <li>Se não melhorar, acione o serviço de emergência da empresa.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Emergências Cardíacas",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Infarto (Ataque Cardíaco)</h3>
          <p>
            O infarto ocorre quando o sangue não chega ao coração, causando dor forte no peito, suor frio, falta de ar e mal-estar. Pode acontecer em qualquer setor, principalmente em pessoas com fatores de risco.
          </p>
          <div className="flex justify-center">
            <img
              src="https://kecheslaw.com/wp-content/uploads/2022/01/Untitled-Facebook-Post.png"
              alt="Primeiros socorros para infarto"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Peça para a pessoa sentar-se e afrouxe as roupas.</li>
              <li>Mantenha a calma e chame o serviço de emergência da empresa.</li>
              <li>Não ofereça alimentos ou bebidas.</li>
              <li>Se a pessoa desmaiar e não respirar, inicie a RCP imediatamente.</li>
            </ol>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Acidente Vascular Cerebral (AVC)</h3>
          <p>
            O AVC ocorre quando o sangue não chega ao cérebro. Os sinais são: dificuldade para falar, sorrir ou levantar os braços, fraqueza em um lado do corpo, confusão e dor de cabeça súbita.
          </p>
          <div className="flex justify-center">
            <img
              src="https://soscardio.com.br/wp-content/uploads/2018/12/enxaqueca-e-avc-1024x423.jpg"
              alt="Primeiros socorros para AVC"
              className="rounded-lg shadow-lg h-300 w-auto"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">O que fazer:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Deite a pessoa com a cabeça levemente elevada.</li>
              <li>Mantenha a calma e acione o serviço de emergência da empresa.</li>
              <li>Não ofereça alimentos, bebidas ou medicamentos.</li>
              <li>Anote o horário do início dos sintomas.</li>
            </ol>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Quanto mais rápido o atendimento, maiores as chances de recuperação.
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Kit de Primeiros Socorros",
      content: (
        <div className="space-y-6">
          <p>
            Um kit de primeiros socorros bem equipado é essencial em todos os setores da empresa. Ele deve estar acessível, identificado e revisado periodicamente.
          </p>
          <div className="flex justify-center">
            <img
              src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m270e3rgz32ee7"
              alt="Kit de primeiros socorros"
              className="rounded-lg shadow-lg h-auto w-80"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Itens essenciais:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Luvas descartáveis</li>
              <li>Gaze estéril e ataduras</li>
              <li>Esparadrapo e curativos adesivos</li>
              <li>Antisséptico</li>
              <li>Máscara descartável</li>
              <li>Tesoura sem ponta</li>
              <li>Soro fisiológico</li>
              <li>Termômetro</li>
              <li>Manual de primeiros socorros</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong>Dica:</strong> Verifique o kit a cada 3 meses e reponha itens usados ou vencidos.
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <strong>Importante:</strong> Todos devem saber onde está o kit e como utilizá-lo em caso de emergência.
          </div>
        </div>
      )
    },
  ];

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToModule = (index: number) => {
    setCurrentModule(index);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Course Header */}
          <div className="bg-blue-500 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">Manual de Primeiros Socorros</h1>
            <p className="text-lg">Curso básico para ambiente empresarial</p>
          </div>

          {/* Course Navigation */}
          <div className="bg-blue-50 p-4 border-b border-blue-100 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {modules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => goToModule(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${currentModule === index
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-700 hover:bg-blue-100"
                    }`}
                >
                  {module.title}
                </button>
              ))}
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">{modules[currentModule].title}</h2>

            {modules[currentModule].content}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button
                onClick={prevModule}
                disabled={currentModule === 0}
                className={`flex items-center px-4 py-2 rounded-md font-medium ${currentModule === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Anterior
              </button>

              <div className="text-center">
                <span className="text-gray-600">
                  Módulo {currentModule + 1} de {modules.length}
                </span>
              </div>

              {currentModule < modules.length - 1 ? (
                <button
                  onClick={nextModule}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
                >
                  Próximo
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              ) : (
                <Link
                  to="/quiz"
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
                >
                  Iniciar Quiz
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;