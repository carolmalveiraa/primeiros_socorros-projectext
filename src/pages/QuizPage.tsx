import React, { useState, useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { Award, Clock, User, ChevronRight, AlertTriangle, Check, X } from 'lucide-react';

// Define avatar options
const avatarOptions = [
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Amaya',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Eden&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Caleb&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Christopher&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Christian&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Avery&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Katherine&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&skinColor=ecad80,f2d3b1',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Chase&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&skinColor=ecad80,f2d3b1',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Sara&earringsProbability=100&features=birthmark,blush,freckles&featuresProbability=80&glasses=variant01,variant02,variant05&glassesProbability=80&hairColor=0e0e0e,562306,6a4e35,ac6511,b9a05f,cb6820,transparent&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&skinColor=ecad80,f2d3b1',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Maria&earringsProbability=100&features=birthmark,blush,freckles&featuresProbability=80&glasses=variant01,variant02,variant05&glassesProbability=80&hairColor=0e0e0e,562306,6a4e35,ac6511,b9a05f,cb6820,transparent&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&skinColor=ecad80,f2d3b1',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Maria&randomizeIds=true&earringsProbability=100&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30',
  'https://api.dicebear.com/9.x/adventurer/svg?seed=Eden&earringsProbability=100&features=birthmark,blush,freckles&featuresProbability=80&glasses=variant01,variant02,variant05&glassesProbability=80&hairColor=0e0e0e,562306,6a4e35,ac6511,b9a05f,cb6820,transparent&mouth=variant01,variant03,variant05,variant10,variant12,variant16,variant17,variant19,variant20,variant21,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&skinColor=ecad80,f2d3b1'
  
];

// Define quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "Qual é o número de telefone da Nordeste Emergências?",
    options: ["1076-8766", "9161-8454", "8766-1076", "8187-4688"],
    correctAnswer: 2,

Answer: 2,
    difficulty: "Fácil"
  },
  {
    id: 2,
    question: "Qual é a sequência correta para avaliação inicial de uma vítima?",
    options: [
      "ABCDE (Vias aéreas, Respiração, Circulação, Disfunção neurológica, Exposição)",
      "DCBAE (Disfunção neurológica, Circulação, Respiração, Vias aéreas, Exposição)",
      "CABDE (Circulação, Vias aéreas, Respiração, Disfunção neurológica, Exposição)",
      "EDCBA (Exposição, Disfunção neurológica, Circulação, Respiração, Vias aéreas)"
    ],
    correctAnswer: 0,
    difficulty: "Médio"
  },
  {
    id: 3,
    question: "O que significa a sigla RCP?",
    options: [
      "Respiração Cardiopulmonar",
      "Reanimação Cardiopulmonar",
      "Recuperação Cardiopulmonar",
      "Restauração Cardiopulmonar"
    ],
    correctAnswer: 1,
    difficulty: "Fácil"
  },
  {
    id: 4,
    question: "Qual a frequência recomendada de compressões torácicas durante a RCP em adultos?",
    options: [
      "60 a 80 compressões por minuto",
      "80 a 100 compressões por minuto",
      "100 a 120 compressões por minuto",
      "120 a 140 compressões por minuto"
    ],
    correctAnswer: 2,
    difficulty: "Médio"
  },
  {
    id: 5,
    question: "Qual a profundidade correta das compressões torácicas durante a RCP em adultos?",
    options: [
      "2 a 3 cm",
      "3 a 4 cm",
      "4 a 5 cm",
      "5 a 6 cm"
    ],
    correctAnswer: 3,
    difficulty: "Médio"
  },
  {
    id: 6,
    question: "O que NÃO deve ser feito em caso de queimadura?",
    options: [
      "Resfriar a área com água corrente em temperatura ambiente",
      "Remover acessórios como anéis e pulseiras",
      "Aplicar pasta de dente ou manteiga na área queimada",
      "Cobrir a área com gaze ou pano limpo"
    ],
    correctAnswer: 2,
    difficulty: "Fácil"
  },
  {
    id: 7,
    question: "Qual o procedimento correto para controlar uma hemorragia externa?",
    options: [
      "Aplicar torniquete imediatamente",
      "Aplicar pressão direta sobre o ferimento",
      "Elevar o membro afetado sem aplicar pressão",
      "Aplicar compressas frias sem pressão direta"
    ],
    correctAnswer: 1,
    difficulty: "Médio"
  },
  {
    id: 8,
    question: "Quais são os sinais do AVC que podem ser identificados pelo acrônimo?",
    options: [
      "Sorriso, Abraço, Movimento, Urgência",
      "Sorriso, Abraço, Mensagem, Urgência",
      "Sintoma, Alerta, Movimento, Urgência",
      "Sintoma, Alerta, Mensagem, Urgência"
    ],
    correctAnswer: 1,
    difficulty: "Difícil"
  },
  {
    id: 9,
    question: "O que deve ser feito em caso de convulsão?",
    options: [
      "Segurar a língua da pessoa para evitar que ela a engula",
      "Tentar conter os movimentos da pessoa",
      "Colocar algo na boca da pessoa para evitar mordedura da língua",
      "Afastar objetos perigosos e proteger a cabeça da pessoa"
    ],
    correctAnswer: 3,
    difficulty: "Médio"
  },
  {
    id: 10,
    question: "Qual é o procedimento correto para ajudar uma pessoa que está engasgada e não consegue falar, tossir ou respirar?",
    options: [
      "Oferecer água para ajudar a desengasgar",
      "Dar tapas nas costas apenas",
      "Realizar a Manobra de Heimlich",
      "Colocar a pessoa deitada e aguardar o socorro"
    ],
    correctAnswer: 2,
    difficulty: "Médio"
  },
  {
    id: 11,
    question: "Em caso de suspeita de fratura, o que NÃO deve ser feito?",
    options: [
      "Imobilizar a área afetada",
      "Tentar realinhar o osso",
      "Aplicar gelo envolto em pano",
      "Acionar o serviço de emergência"
    ],
    correctAnswer: 1,
    difficulty: "Médio"
  },
  {
    id: 12,
    question: "Qual é a posição recomendada para uma pessoa inconsciente que está respirando?",
    options: [
      "Posição supina (de barriga para cima)",
      "Posição prona (de barriga para baixo)",
      "Posição lateral de segurança",
      "Posição sentada com a cabeça entre os joelhos"
    ],
    correctAnswer: 2,
    difficulty: "Difícil"
  },
  {
    id: 13,
    question: "Quais são os sinais de um infarto que devem ser observados?",
    options: [
      "Apenas dor no peito",
      "Dor no peito, falta de ar, sudorese fria e náuseas",
      "Apenas dor no braço esquerdo",
      "Dor de cabeça intensa e visão turva"
    ],
    correctAnswer: 1,
    difficulty: "Médio"
  },
  {
    id: 14,
    question: "O que significa o acrônimo RICE, utilizado no tratamento inicial de lesões musculoesqueléticas?",
    options: [
      "Rest, Ice, Compression, Elevation (Repouso, Gelo, Compressão, Elevação)",
      "Rest, Immobilization, Cold, Exercise (Repouso, Imobilização, Frio, Exercício)",
      "Recovery, Ice, Care, Evaluation (Recuperação, Gelo, Cuidado, Avaliação)",
      "Rest, Isolation, Compression, Examination (Repouso, Isolamento, Compressão, Exame)"
    ],
    correctAnswer: 0,
    difficulty: "Difícil"
  },
  {
    id: 15,
    question: "Qual é a conduta correta em caso de queimadura química?",
    options: [
      "Neutralizar o produto químico com outra substância",
      "Aplicar pomada antes de lavar a área afetada",
      "Lavar a área com água corrente em abundância por pelo menos 20 minutos",
      "Cobrir imediatamente a área sem lavar"
    ],
    correctAnswer: 2,
    difficulty: "Difícil"
  }
];

// Define quiz stages
enum QuizStage {
  Registration,
  Questions,
  Results
}

const QuizPage: React.FC = () => {
  const { currentUser, addUser, updateUserScore, updateUserTime, users } = useQuiz();
  
  const [stage, setStage] = useState<QuizStage>(QuizStage.Registration);
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // Sound effects
  const playCorrectSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
    audio.play();
  };
  
  const playWrongSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
    audio.play();
  };
  
  // Timer effect
  useEffect(() => {
    let interval: number | undefined;
    
    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);
  
  // Handle registration submission
  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !selectedAvatar) {
      alert('Por favor, preencha seu nome e escolha um avatar para continuar.');
      return;
    }
    
    // Create new user
    const newUser = {
      name: name.trim(),
      avatar: selectedAvatar,
      score: 0,
      timeSpent: 0
    };
    
    addUser(newUser);
    setStage(QuizStage.Questions);
    setIsTimerRunning(true);
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return; // Prevent selection during feedback
  
    setSelectedOption(optionIndex);
    setShowFeedback(true);
  
    const currentQuizQuestion = quizQuestions[currentQuestion];
    const isAnswerCorrect = optionIndex === currentQuizQuestion.correctAnswer;
  
    setIsCorrect(isAnswerCorrect);
  
    if (isAnswerCorrect) {
      playCorrectSound();
      setScore(prevScore => prevScore + 1);
    } else {
      playWrongSound();
    }
  
    // Update user score
    updateUserScore(isAnswerCorrect ? score + 1 : score);
  
    // Automaticamente avança ou finaliza o quiz após 2 segundos
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        // Quiz finalizado
        setIsTimerRunning(false);
        updateUserTime(timer);
        setStage(QuizStage.Results);
  
        // Envia resultado para o backend
        const userToSend = {
          name: currentUser?.name || name,
          avatar: currentUser?.avatar || selectedAvatar,
          score: isAnswerCorrect ? score + 1 : score, // score final
          timeSpent: timer
        };
        fetch('http://localhost:3001/api/resultados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userToSend)
        });
      }
    }, 2000);
  };
  
  // Format time (seconds to MM:SS)
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Restart quiz
  const handleRestartQuiz = () => {
    setStage(QuizStage.Registration);
    setName('');
    setSelectedAvatar('');
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowFeedback(false);
    setTimer(0);
  };
  
  // Sort users by score (descending) and time (ascending)
  const sortedUsers = [...users].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // Higher score first
    }
    return a.timeSpent - b.timeSpent; // Lower time first if scores are equal
  });
  
  // Render registration form
  const renderRegistrationForm = () => (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Registro para o Quiz</h2>
      
      <form onSubmit={handleRegistrationSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu nome"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Escolha seu Avatar
          </label>
          <div className="grid grid-cols-4 gap-3">
            {avatarOptions.map((avatar, index) => (
              <div 
                key={index}
                onClick={() => setSelectedAvatar(avatar)}
                className={`cursor-pointer p-2 rounded-md border-2 ${
                  selectedAvatar === avatar 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <img 
                  src={avatar} 
                  alt={`Avatar ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
        >
          Iniciar Quiz
        </button>
      </form>
    </div>
  );
  
  // Render quiz questions
  const renderQuizQuestions = () => {
    const currentQuizQuestion = quizQuestions[currentQuestion];
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img 
              src={currentUser?.avatar} 
              alt="Avatar" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-medium">{currentUser?.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-blue-700">
              <Award className="h-5 w-5 mr-1" />
              <span>{score}</span>
            </div>
            
            <div className="flex items-center text-red-600">
              <Clock className="h-5 w-5 mr-1" />
              <span>{formatTime(timer)}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-600 mt-1">
            Questão {currentQuestion + 1} de {quizQuestions.length}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
            {currentQuizQuestion.difficulty}
          </div>
          <h3 className="text-xl font-bold mb-4">{currentQuizQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuizQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`quiz-option ${
                  selectedOption === index 
                    ? showFeedback
                      ? isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : 'selected'
                    : ''
                } ${
                  showFeedback && index === currentQuizQuestion.correctAnswer
                    ? 'correct'
                    : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex-shrink-0">
                    {showFeedback ? (
                      index === currentQuizQuestion.correctAnswer ? (
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      ) : selectedOption === index ? (
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <X className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                      )
                    ) : (
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedOption === index 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedOption === index && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-1.5"></div>
                        )}
                      </div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {showFeedback && (
          <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'} mb-4`}>
            <div className="flex items-start">
              {isCorrect ? (
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
              )}
              <div>
                <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? 'Resposta correta!' : 'Resposta incorreta!'}
                </p>
                <p className="text-sm mt-1">
                  {isCorrect 
                    ? 'Você ganhou um ponto!' 
                    : `A resposta correta é: ${quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].correctAnswer]}`
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // Render quiz results
  const renderQuizResults = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
          <Award className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Quiz Concluído!</h2>
        <p className="text-gray-600">
          Você acertou <span className="font-bold text-blue-600">{score}</span> de {quizQuestions.length} questões
          em <span className="font-bold text-red-600">{formatTime(timer)}</span>.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-blue-500" />
          Ranking
        </h3>
        
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-blue-500 text-white p-3 text-sm font-medium">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-7">Usuário</div>
            <div className="col-span-2 text-center">Pontos</div>
            <div className="col-span-2 text-center">Tempo</div>
          </div>
          
          {sortedUsers.map((user, index) => (
            <div 
              key={index}
              className={`grid grid-cols-12 p-3 text-sm border-b border-gray-200 ${
                currentUser?.name === user.name ? 'bg-blue-50' : ''
              }`}
            >
              <div className="col-span-1 text-center font-medium">{index + 1}</div>
              <div className="col-span-7 flex items-center">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className={currentUser?.name === user.name ? 'font-medium' : ''}>
                  {user.name}
                </span>
              </div>
              <div className="col-span-2 text-center font-medium">{user.score}</div>
              <div className="col-span-2 text-center text-gray-600">{formatTime(user.timeSpent)}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleRestartQuiz}
          className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
  
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Quiz Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Quiz de Primeiros Socorros</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre primeiros socorros no ambiente empresarial. 
            Responda às perguntas e veja sua pontuação no ranking!
          </p>
        </div>
        
        {/* Quiz Content */}
        {stage === QuizStage.Registration && renderRegistrationForm()}
        {stage === QuizStage.Questions && renderQuizQuestions()}
        {stage === QuizStage.Results && renderQuizResults()}
      </div>
    </div>
  );
};

export default QuizPage;