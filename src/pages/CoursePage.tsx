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
            Primeiros socorros são os cuidados imediatos prestados a uma pessoa que sofreu um acidente ou mal súbito, antes da chegada de atendimento médico especializado. O objetivo é preservar a vida, aliviar o sofrimento, prevenir novas lesões e promover a recuperação.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Princípios Básicos dos Primeiros Socorros</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mantenha a calma e avalie a situação</li>
              <li>Garanta a segurança do local para você e para a vítima</li>
              <li>Acione o serviço de emergência (Nordeste Emergências: (85) 9 8766-1076, Bombeiros: 193)</li>
              <li>Verifique o estado de consciência da vítima</li>
              <li>Realize apenas procedimentos para os quais você está capacitado</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://cdn.pixabay.com/photo/2019/03/29/16/55/first-aid-4089599_1280.jpg" 
              alt="Kit de primeiros socorros" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2">Importante!</h4>
            <p>
              Lembre-se que os primeiros socorros não substituem o atendimento médico profissional. Sempre acione o serviço de emergência quando necessário.
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
            A avaliação inicial da vítima é crucial para determinar a gravidade da situação e definir as prioridades de atendimento. Siga o protocolo ABCDE:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">A</span>
                Airways (Vias Aéreas)
              </h4>
              <p>Verifique se as vias aéreas estão desobstruídas. Remova qualquer objeto visível na boca ou garganta.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">B</span>
                Breathing (Respiração)
              </h4>
              <p>Observe se a vítima está respirando. Verifique o movimento do tórax e sinta o ar saindo pelo nariz ou boca.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">C</span>
                Circulation (Circulação)
              </h4>
              <p>Verifique a presença de pulso e sinais de hemorragia. Controle sangramentos visíveis com pressão direta.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">D</span>
                Disability (Disfunção Neurológica)
              </h4>
              <p>Avalie o nível de consciência da vítima. Verifique se ela responde a estímulos verbais ou dolorosos.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">E</span>
                Exposure (Exposição)
              </h4>
              <p>Examine o corpo da vítima em busca de outras lesões, mantendo sua privacidade e evitando a hipotermia.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://alfredonegreirosadvocacia.adv.br/wp-content/uploads/2023/07/Acidente-de-Trabalho-Tudo-o-que-voce-precisa-saber-1.jpg" 
              alt="Avaliação de vítima" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
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
            A Reanimação Cardiopulmonar (RCP) é um procedimento de emergência que combina compressões torácicas e ventilações para manter o fluxo de sangue oxigenado para o cérebro e outros órgãos vitais quando o coração da pessoa parou de bater.
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Quando realizar a RCP
            </h4>
            <p>
              A RCP deve ser iniciada quando a vítima está inconsciente e não respira ou apresenta respiração anormal (gasping).
            </p>
          </div>
          
          <h4 className="font-semibold text-lg text-blue-700 mb-3">Passos para realizar a RCP em adultos:</h4>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">1. Verifique a segurança do local</h5>
              <p>Certifique-se de que não há riscos para você ou para a vítima.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">2. Verifique a resposta da vítima</h5>
              <p>Toque nos ombros da vítima e pergunte em voz alta: "Você está bem?"</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">3. Peça ajuda</h5>
              <p>Se a vítima não responder, peça para alguém chamar o serviço de emergência (Nordeste Emergências: (85) 9 8766-1076) e trazer um DEA (Desfibrilador Externo Automático), se disponível.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">4. Verifique a respiração</h5>
              <p>Observe se há movimento no tórax, ouça e sinta a respiração por até 10 segundos.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">5. Inicie as compressões torácicas</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Posicione a vítima em superfície rígida</li>
                <li>Ajoelhe-se ao lado da vítima</li>
                <li>Coloque a base de uma mão no centro do tórax (entre os mamilos)</li>
                <li>Coloque a outra mão sobre a primeira</li>
                <li>Mantenha os braços estendidos e os ombros alinhados com as mãos</li>
                <li>Comprima o tórax em pelo menos 5 cm (não excedendo 6 cm)</li>
                <li>Permita o retorno completo do tórax após cada compressão</li>
                <li>Realize compressões na frequência de 100 a 120 por minuto</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">6. Continue a RCP</h5>
              <p>Continue as compressões até a chegada do serviço de emergência, até que a vítima mostre sinais de vida ou até que você esteja exausto para continuar.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://cdn.pixabay.com/photo/2024/11/07/14/37/cpr-9180856_1280.jpg" 
              alt="Demonstração de RCP" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
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
            O desmaio é uma perda temporária da consciência causada pela diminuição do fluxo sanguíneo para o cérebro. Geralmente, é precedido por sintomas como tontura, visão turva, suor frio e palidez.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Como agir em caso de desmaio:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Se perceber que alguém vai desmaiar, ajude-a a sentar-se ou deitar-se para evitar quedas</li>
              <li>Afrouxe roupas apertadas, especialmente no pescoço</li>
              <li>Eleve as pernas da vítima cerca de 30 cm do chão para melhorar o fluxo sanguíneo para o cérebro</li>
              <li>Mantenha o ambiente ventilado</li>
              <li>Não ofereça alimentos ou bebidas até que a pessoa esteja completamente recuperada</li>
              <li>Se a pessoa não recuperar a consciência rapidamente, acione o serviço de emergência</li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4 mt-8">Convulsões</h3>
          
          <p>
            As convulsões são causadas por atividade elétrica anormal no cérebro, resultando em movimentos involuntários do corpo, alteração da consciência e outras manifestações.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Como agir em caso de convulsão:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a calma e note o horário de início da convulsão</li>
              <li>Afaste objetos perigosos que possam machucar a pessoa</li>
              <li>Não tente conter os movimentos da pessoa</li>
              <li>Não coloque nada na boca da pessoa (incluindo dedos, líquidos ou medicamentos)</li>
              <li>Se possível, coloque algo macio sob a cabeça da pessoa</li>
              <li>Vire a pessoa de lado (posição lateral de segurança) após cessarem os movimentos para evitar aspiração de secreções</li>
              <li>Permaneça com a pessoa até que ela recupere completamente a consciência</li>
              <li>Acione o serviço de emergência se:
                <ul className="list-disc pl-5 mt-2">
                  <li>For a primeira convulsão da pessoa</li>
                  <li>A convulsão durar mais de 5 minutos</li>
                  <li>A pessoa não recuperar a consciência após a convulsão</li>
                  <li>Ocorrer nova convulsão sem recuperação completa</li>
                  <li>A pessoa estiver grávida ou tiver diabetes</li>
                  <li>Houver lesão durante a convulsão</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://blog.volkdobrasil.com.br/wp-content/uploads/2020/04/75934afinaloqueeconsideradoacidentedetrabalho.jpg" 
              alt="Atendimento de emergência" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
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
            Ferimentos são lesões que causam danos aos tecidos do corpo. Podem ser classificados como abertos (quando há ruptura da pele) ou fechados (quando a pele permanece intacta).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Tipos de ferimentos abertos:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Escoriações:</span> Lesões superficiais da pele</li>
                <li><span className="font-medium">Cortes:</span> Ferimentos com bordas regulares</li>
                <li><span className="font-medium">Lacerações:</span> Ferimentos com bordas irregulares</li>
                <li><span className="font-medium">Perfurações:</span> Ferimentos profundos causados por objetos pontiagudos</li>
                <li><span className="font-medium">Avulsões:</span> Arrancamento parcial ou total de um tecido</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Tipos de ferimentos fechados:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Contusões:</span> Lesões causadas por impacto sem romper a pele</li>
                <li><span className="font-medium">Hematomas:</span> Acúmulo de sangue sob a pele</li>
                <li><span className="font-medium">Entorses:</span> Lesões em ligamentos</li>
                <li><span className="font-medium">Luxações:</span> Deslocamento de ossos nas articulações</li>
                <li><span className="font-medium">Fraturas:</span> Quebra parcial ou total de ossos</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-8">
            <h4 className="font-semibold text-blue-700 mb-2">Cuidados com ferimentos leves:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Lave as mãos antes de tocar no ferimento</li>
              <li>Limpe o ferimento com água corrente e sabão neutro</li>
              <li>Remova delicadamente sujeiras visíveis com gaze ou pano limpo</li>
              <li>Seque a área com gaze ou pano limpo, sem esfregar</li>
              <li>Aplique antisséptico (como clorexidina aquosa)</li>
              <li>Cubra o ferimento com curativo estéril</li>
              <li>Troque o curativo sempre que estiver úmido ou sujo</li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Hemorragias</h3>
          
          <p>
            Hemorragia é a perda de sangue devido ao rompimento de vasos sanguíneos. Pode ser externa (visível) ou interna (não visível).
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2">Como controlar uma hemorragia externa:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Use luvas de proteção, se disponíveis</li>
              <li>Aplique pressão direta sobre o ferimento com gaze ou pano limpo</li>
              <li>Mantenha a pressão por pelo menos 10 minutos</li>
              <li>Se o sangramento continuar, não remova o material, adicione mais gaze ou pano por cima</li>
              <li>Eleve o membro afetado acima do nível do coração, se possível</li>
              <li>Se o sangramento for intenso ou não parar, acione imediatamente o serviço de emergência</li>
            </ol>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Sinais de hemorragia interna:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dor, sensibilidade ou inchaço em uma área</li>
              <li>Sangue na urina, fezes ou vômito</li>
              <li>Hematomas extensos</li>
              <li>Tontura, fraqueza ou desmaio</li>
              <li>Pele fria e pálida</li>
              <li>Sede intensa</li>
              <li>Confusão mental</li>
              <li>Respiração rápida e superficial</li>
              <li>Pulso rápido e fraco</li>
            </ul>
            <p className="mt-3 font-medium">
              Se suspeitar de hemorragia interna, acione imediatamente o serviço de emergência. Não ofereça alimentos ou bebidas à vítima.
            </p>
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
            Queimaduras são lesões nos tecidos do corpo causadas por calor, produtos químicos, eletricidade, radiação ou atrito. A gravidade da queimadura depende da profundidade, extensão e localização da lesão.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Classificação das Queimaduras</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Queimaduras de 1º Grau</h4>
              <p className="mb-2">Afetam apenas a camada mais superficial da pele (epiderme).</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vermelhidão</li>
                <li>Dor</li>
                <li>Leve inchaço</li>
                <li>Sem bolhas</li>
                <li>Cura em 3-5 dias sem cicatrizes</li>
              </ul>
              <p className="mt-2 text-sm italic">Exemplo: Queimadura solar leve</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Queimaduras de 2º Grau</h4>
              <p className="mb-2">Afetam a epiderme e parte da derme (camada mais profunda).</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vermelhidão intensa</li>
                <li>Dor acentuada</li>
                <li>Formação de bolhas</li>
                <li>Aspecto úmido</li>
                <li>Cura em 2-3 semanas, podendo deixar cicatrizes</li>
              </ul>
              <p className="mt-2 text-sm italic">Exemplo: Contato com água fervente</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Queimaduras de 3º Grau</h4>
              <p className="mb-2">Destroem todas as camadas da pele e podem atingir tecidos mais profundos.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aparência esbranquiçada, acastanhada ou carbonizada</li>
                <li>Pouca ou nenhuma dor (devido à destruição das terminações nervosas)</li>
                <li>Textura seca e dura</li>
                <li>Requer tratamento médico especializado</li>
                <li>Deixa cicatrizes permanentes</li>
              </ul>
              <p className="mt-2 text-sm italic">Exemplo: Contato prolongado com chama</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Quando buscar atendimento médico imediato:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Queimaduras de 3º grau, independentemente do tamanho</li>
              <li>Queimaduras de 2º grau com área maior que a palma da mão</li>
              <li>Queimaduras em face, mãos, pés, genitais, articulações ou que circundam um membro</li>
              <li>Queimaduras químicas ou elétricas</li>
              <li>Queimaduras em crianças ou idosos</li>
              <li>Presença de dificuldade respiratória</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Primeiros Socorros para Queimaduras</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Queimaduras térmicas (calor):</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Afaste a vítima da fonte de calor</li>
              <li>Resfrie a área queimada com água corrente em temperatura ambiente por 10-20 minutos</li>
              <li>Não use gelo, pois pode agravar a lesão</li>
              <li>Remova acessórios como anéis, pulseiras e relógios antes que ocorra inchaço</li>
              <li>Não rompa bolhas</li>
              <li>Cubra a área com gaze ou pano limpo e úmido</li>
              <li>Não aplique pasta de dente, manteiga, óleo ou outros produtos caseiros</li>
              <li>Busque atendimento médico conforme a gravidade</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Queimaduras químicas:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Proteja-se para não se contaminar</li>
              <li>Remova as roupas contaminadas</li>
              <li>Lave a área com água corrente em abundância por pelo menos 20 minutos</li>
              <li>Não tente neutralizar o produto químico com outra substância</li>
              <li>Cubra a área com gaze ou pano limpo</li>
              <li>Busque atendimento médico</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Queimaduras elétricas:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Certifique-se de que a fonte de eletricidade está desligada antes de tocar na vítima</li>
              <li>Verifique os sinais vitais e inicie RCP, se necessário</li>
              <li>Procure por pontos de entrada e saída da corrente elétrica no corpo</li>
              <li>Cubra as áreas queimadas com gaze ou pano limpo</li>
              <li>Busque atendimento médico imediatamente, mesmo que a queimadura pareça pequena (pode haver danos internos graves)</li>
            </ol>
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
            Fraturas são quebras parciais ou completas de um osso. Podem ser classificadas como fechadas (quando a pele permanece intacta) ou expostas (quando o osso rompe a pele).
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Sinais e sintomas de fratura:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dor intensa que piora com o movimento</li>
              <li>Inchaço e hematoma</li>
              <li>Deformidade visível</li>
              <li>Incapacidade de usar ou mover a parte afetada</li>
              <li>Crepitação (sensação ou som de atrito entre os fragmentos ósseos)</li>
              <li>Exposição do osso (em fraturas expostas)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-8">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para fraturas:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a vítima imóvel e acalme-a</li>
              <li>Não tente realinhar o osso ou empurrar fragmentos expostos de volta</li>
              <li>Em caso de fratura exposta, cubra o ferimento com gaze ou pano limpo, sem pressionar o osso</li>
              <li>Imobilize a área afetada, incluindo as articulações acima e abaixo da fratura</li>
              <li>Aplique gelo envolto em pano (nunca diretamente sobre a pele) por 15-20 minutos para reduzir o inchaço</li>
              <li>Eleve o membro afetado, se possível, para reduzir o inchaço</li>
              <li>Acione o serviço de emergência ou transporte a vítima para atendimento médico, mantendo a imobilização</li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Entorses e Luxações</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Entorses</h4>
              <p className="mb-2">
                Entorses são lesões nos ligamentos (tecidos que conectam os ossos) causadas por um movimento brusco que força a articulação além de seu limite normal.
              </p>
              <h5 className="font-medium mb-1">Sinais e sintomas:</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dor na articulação</li>
                <li>Inchaço</li>
                <li>Hematoma</li>
                <li>Dificuldade para mover a articulação</li>
                <li>Instabilidade articular</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Luxações</h4>
              <p className="mb-2">
                Luxações são deslocamentos dos ossos nas articulações, fazendo com que as superfícies articulares percam o contato entre si.
              </p>
              <h5 className="font-medium mb-1">Sinais e sintomas:</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dor intensa</li>
                <li>Deformidade visível</li>
                <li>Inchaço rápido</li>
                <li>Incapacidade de mover a articulação</li>
                <li>Alteração no comprimento do membro</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para entorses e luxações:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Siga o protocolo RICE:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>R</strong>est (Repouso): Evite movimentar a área afetada</li>
                  <li><strong>I</strong>ce (Gelo): Aplique gelo envolto em pano por 15-20 minutos a cada 2-3 horas</li>
                  <li><strong>C</strong>ompression (Compressão): Use uma bandagem elástica para comprimir levemente a área</li>
                  <li><strong>E</strong>levation (Elevação): Mantenha o membro elevado acima do nível do coração</li>
                </ul>
              </li>
              <li>Não tente recolocar uma articulação luxada no lugar</li>
              <li>Imobilize a articulação na posição em que se encontra</li>
              <li>Busque atendimento médico, especialmente para luxações</li>
            </ol>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://runnersworld.com.br/wp-content/uploads/sites/4/2019/06/fratura-por-estresse.jpg" 
              alt="Atendimento de emergência para lesões" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Emergências Respiratórias",
      content: (
        <div className="space-y-6">
          <p>
            Emergências respiratórias são situações que comprometem a respiração normal de uma pessoa, podendo levar à falta de oxigenação adequada dos tecidos. Essas emergências requerem ação rápida, pois a falta de oxigênio pode causar danos cerebrais irreversíveis em poucos minutos.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Engasgo (Obstrução de Vias Aéreas)</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Sinais de obstrução parcial das vias aéreas:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>A pessoa consegue falar, tossir ou respirar, ainda que com dificuldade</li>
              <li>Ruídos respiratórios ao inspirar</li>
              <li>Tosse forte</li>
            </ul>
            <p className="mt-3">
              <strong>O que fazer:</strong> Incentive a pessoa a continuar tossindo para expelir o objeto. Não interfira enquanto a pessoa conseguir tossir efetivamente.
            </p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2">Sinais de obstrução total das vias aéreas:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Incapacidade de falar, tossir ou respirar</li>
              <li>A pessoa pode levar as mãos à garganta (sinal universal de engasgo)</li>
              <li>Lábios e unhas podem ficar azulados</li>
              <li>Perda de consciência (em estágios avançados)</li>
            </ul>
            <p className="mt-3">
              <strong>O que fazer:</strong> Realize a Manobra de Heimlich imediatamente.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <h4 className="font-semibold text-blue-700 mb-2">Manobra de Heimlich (para adultos conscientes):</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Posicione-se atrás da vítima</li>
              <li>Envolva a cintura da vítima com seus braços</li>
              <li>Feche uma mão, formando um punho</li>
              <li>Posicione o lado do polegar do punho contra o abdômen da vítima, entre o umbigo e a caixa torácica (região epigástrica)</li>
              <li>Segure o punho com a outra mão</li>
              <li>Pressione o abdômen com movimentos rápidos para dentro e para cima</li>
              <li>Repita os movimentos até que o objeto seja expelido ou a vítima perca a consciência</li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Asma</h3>
          
          <p>
            A asma é uma doença inflamatória crônica das vias aéreas que causa episódios recorrentes de falta de ar, chiado no peito, aperto no peito e tosse.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Sinais de crise asmática:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dificuldade para respirar</li>
              <li>Chiado ao respirar (sibilo)</li>
              <li>Tosse persistente</li>
              <li>Sensação de aperto no peito</li>
              <li>Ansiedade e agitação</li>
              <li>Dificuldade para falar frases completas</li>
              <li>Uso da musculatura acessória para respirar (músculos do pescoço e ombros)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-8">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para crise asmática:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a calma e acalme a vítima</li>
              <li>Ajude a pessoa a sentar-se em posição confortável, inclinada ligeiramente para frente</li>
              <li>Afrouxe roupas apertadas</li>
              <li>Ajude a pessoa a usar sua medicação de alívio (inalador/bombinha)</li>
              <li>Incentive a pessoa a respirar lenta e profundamente</li>
              <li>Remova a pessoa de possíveis alérgenos ou irritantes (fumaça, poeira, etc.)</li>
              <li>Acione o serviço de emergência se:
                <ul className="list-disc pl-5 mt-2">
                  <li>A pessoa não tiver medicação disponível</li>
                  <li>A medicação não aliviar os sintomas após 5-10 minutos</li>
                  <li>Os sintomas piorarem</li>
                  <li>A pessoa tiver dificuldade para falar ou caminhar</li>
                  <li>Os lábios ou unhas ficarem azulados</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Hiperventilação</h3>
          
          <p>
            A hiperventilação é uma respiração rápida e profunda que pode ocorrer durante situações de ansiedade, pânico ou estresse, levando a um desequilíbrio nos níveis de oxigênio e dióxido de carbono no sangue.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para hiperventilação:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Mantenha a calma e acalme a pessoa</li>
              <li>Leve a pessoa para um local tranquilo</li>
              <li>Incentive a pessoa a respirar lenta e profundamente</li>
              <li>Peça para a pessoa contar mentalmente durante a expiração para torná-la mais lenta</li>
              <li>Oriente a pessoa a respirar em um ritmo de 4 segundos para inspirar e 6 segundos para expirar</li>
              <li>Não use sacos de papel para a pessoa respirar (prática antiga não mais recomendada)</li>
              <li>Se os sintomas persistirem ou piorarem, busque atendimento médico</li>
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
          <p>
            Emergências cardíacas são situações que afetam o funcionamento normal do coração, podendo comprometer a circulação sanguínea e a oxigenação dos tecidos. Essas emergências requerem ação rápida, pois podem levar a danos graves ou morte em poucos minutos.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Infarto Agudo do Miocárdio (Ataque Cardíaco)</h3>
          
          <p>
            O infarto ocorre quando há bloqueio do fluxo sanguíneo para uma parte do músculo cardíaco, causando morte do tecido por falta de oxigênio.
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Sinais e sintomas de infarto:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dor ou desconforto no peito (sensação de pressão, aperto, queimação ou peso)</li>
              <li>Dor que pode irradiar para o braço esquerdo, mandíbula, pescoço, costas ou estômago</li>
              <li>Falta de ar</li>
              <li>Sudorese fria</li>
              <li>Náuseas ou vômitos</li>
              <li>Tontura ou desmaio</li>
              <li>Palidez</li>
              <li>Ansiedade ou sensação de morte iminente</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Atenção:</strong> Em mulheres, idosos e diabéticos, os sintomas podem ser atípicos, como fadiga incomum, desconforto abdominal ou falta de ar sem dor no peito.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-8">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para suspeita de infarto:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Acione imediatamente o serviço de emergências</li>
              <li>Mantenha a vítima em repouso, preferencialmente sentada, com as pernas para baixo</li>
              <li>Afrouxe roupas apertadas</li>
              <li>Monitore os sinais vitais</li>
              <li>Se a pessoa estiver consciente e não for alérgica a AAS (ácido acetilsalicílico), ofereça um comprimido de aspirina (100mg a 325mg) para mastigar (se disponível e se não houver contraindicação médica conhecida)</li>
              <li>Se a pessoa tiver medicação própria para angina (como nitroglicerina), ajude-a a tomá-la</li>
              <li>Se a pessoa ficar inconsciente e parar de respirar, inicie imediatamente as manobras de RCP</li>
              <li>Se houver um Desfibrilador Externo Automático (DEA) disponível, utilize-o seguindo as instruções do aparelho</li>
            </ol>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Acidente Vascular Cerebral (AVC)</h3>
          
          <p>
            O AVC ocorre quando há interrupção do fluxo sanguíneo para uma parte do cérebro (AVC isquêmico) ou quando há ruptura de um vaso sanguíneo no cérebro (AVC hemorrágico).
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h4 className="font-semibold text-red-700 mb-2">Sinais e sintomas de AVC - Lembre-se do acrônimo:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>S</strong>orriso/Face: Peça para a pessoa sorrir. Em caso de AVC, um lado do rosto pode ficar caído</li>
              <li><strong>A</strong>braço: Peça para a pessoa levantar os dois braços. Em caso de AVC, um braço pode não se mover ou cair rapidamente</li>
              <li><strong>M</strong>ensagem/Fala: Peça para a pessoa repetir uma frase simples. Em caso de AVC, a fala pode estar arrastada ou incompreensível</li>
              <li><strong>U</strong>rgência: Se qualquer um desses sinais estiver presente, ligue imediatamente para a ( Nordeste Emergências: (85) 9 8766-107 )</li>
            </ul>
            <p className="mt-3">
              Outros sintomas podem incluir:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Dormência súbita no rosto, braço ou perna, especialmente em um lado do corpo</li>
              <li>Confusão mental</li>
              <li>Dificuldade para enxergar com um ou ambos os olhos</li>
              <li>Dificuldade para caminhar, tontura ou perda de equilíbrio</li>
              <li>Dor de cabeça súbita e intensa sem causa conhecida</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">Primeiros socorros para suspeita de AVC:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Acione imediatamente o serviço de emergência</li>
              <li>Anote o horário exato em que os sintomas começaram (informação crucial para o tratamento)</li>
              <li>Mantenha a vítima deitada com a cabeça e ombros ligeiramente elevados</li>
              <li>Afrouxe roupas apertadas</li>
              <li>Se a pessoa estiver inconsciente, mas respirando, coloque-a na posição lateral de segurança</li>
              <li>Monitore os sinais vitais</li>
              <li>Não ofereça alimentos ou líquidos</li>
              <li>Não administre medicamentos</li>
              <li>Tranquilize a vítima enquanto aguarda o socorro</li>
            </ol>
          </div>
          
          <div className="flex justify-center mt-6">
            <img 
              src="https://drpaolorubez.com.br/wp-content/uploads/2020/12/tipos-de-enxaqueca-1000x600.jpg" 
              alt="Atendimento de emergência cardíaca" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
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
            Um kit de primeiros socorros bem equipado é essencial em qualquer ambiente de trabalho. Ele deve conter itens básicos para atender emergências comuns até a chegada de ajuda especializada.
          </p>
          
          <div className="flex justify-center mb-8">
            <img 
              src="https://static.wixstatic.com/media/1a1c95_0cff0f4e0d7242a4b7ea59cd404b592f~mv2.jpg/v1/crop/x_0,y_14,w_3040,h_1746/fill/w_518,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sem%20t%C3%ADtulo-1.jpg" 
              alt="Kit de primeiros socorros" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Itens Essenciais para um Kit de Primeiros Socorros</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Bandage className="h-5 w-5 mr-2 text-blue-500" />
                Materiais para curativos:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Compressas de gaze estéril (vários tamanhos)</li>
                <li>Ataduras de crepe (5 cm, 10 cm, 15 cm)</li>
                <li>Esparadrapo hipoalergênico</li>
                <li>Curativos adesivos (band-aid) em vários tamanhos</li>
                <li>Algodão hidrófilo</li>
                <li>Compressas não aderentes para queimaduras</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Pill className="h-5 w-5 mr-2 text-blue-500" />
                Medicamentos básicos:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Antisséptico (clorexidina aquosa ou PVPI)</li>
                <li>Soro fisiológico 0,9% (pequenos frascos)</li>
                <li>Analgésicos (paracetamol, dipirona)</li>
                <li>Anti-inflamatórios (ibuprofeno)</li>
                <li>Antialérgicos (loratadina)</li>
                <li>Pomada para queimaduras</li>
                <li>Gel para contusões</li>
              </ul>
              <p className="mt-3 text-sm italic">
                Nota: Medicamentos devem ser administrados apenas com orientação médica ou seguindo protocolos estabelecidos.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Thermometer className="h-5 w-5 mr-2 text-blue-500" />
                Instrumentos e equipamentos:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tesoura de ponta romba</li>
                <li>Pinça</li>
                <li>Termômetro</li>
                <li>Lanterna pequena</li>
                <li>Esfigmomanômetro (aparelho de pressão)</li>
                <li>Estetoscópio</li>
                <li>Máscara para RCP (pocket mask)</li>
                <li>Cobertor térmico</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-blue-500" />
                Materiais para imobilização:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Talas flexíveis (diversos tamanhos)</li>
                <li>Colar cervical</li>
                <li>Tipoia triangular</li>
                <li>Bandagens elásticas</li>
                <li>Fita adesiva</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Droplet className="h-5 w-5 mr-2 text-blue-500" />
                Materiais para proteção:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Luvas de procedimento (vários tamanhos)</li>
                <li>Máscaras descartáveis</li>
                <li>Óculos de proteção</li>
                <li>Avental descartável</li>
                <li>Álcool em gel 70%</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Clipboard className="h-5 w-5 mr-2 text-blue-500" />
                Outros itens importantes:
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lista de telefones de emergência</li>
                <li>Manual básico de primeiros socorros</li>
                <li>Formulário para registro de atendimentos</li>
                <li>Caneta e bloco de anotações</li>
                <li>Sacos plásticos para descarte de material contaminado</li>
                <li>Água potável</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Manutenção do Kit de Primeiros Socorros</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Dicas para manter seu kit sempre pronto para uso:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Verifique regularmente a data de validade dos medicamentos e materiais</li>
              <li>Reponha imediatamente os itens utilizados</li>
              <li>Mantenha o kit em local de fácil acesso, conhecido por todos os funcionários</li>
              <li>Proteja o kit de calor, umidade e luz solar direta</li>
              <li>Faça uma revisão completa do kit a cada 3-6 meses</li>
              <li>Mantenha uma lista atualizada do conteúdo do kit</li>
              <li>Identifique claramente o kit com símbolos de primeiros socorros</li>
              <li>Treine a equipe para conhecer o conteúdo e a localização do kit</li>
            </ol>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Importante:
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>O conteúdo do kit deve ser adaptado às necessidades específicas do seu ambiente de trabalho e aos riscos presentes</li>
              <li>Em empresas, o dimensionamento e conteúdo do kit devem seguir as normas regulamentadoras (NR 7) e orientações de profissionais de saúde ocupacional</li>
              <li>Ter um kit bem equipado não substitui o treinamento adequado em primeiros socorros</li>
              <li>Sempre que possível, o atendimento de primeiros socorros deve ser realizado por pessoa treinada</li>
            </ul>
          </div>
        </div>
      )
    }
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    currentModule === index 
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
                className={`flex items-center px-4 py-2 rounded-md font-medium ${
                  currentModule === 0
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