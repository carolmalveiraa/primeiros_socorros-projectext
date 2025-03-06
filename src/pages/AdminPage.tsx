import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz, QuizUser } from '../contexts/QuizContext';
import { Award, Clock, User, LogOut, BarChart, Users as UsersIcon, Trash } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { users, setUsers } = useQuiz();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Check if user is admin on component mount
  useEffect(() => {
    const adminStatus = sessionStorage.getItem('isAdmin');
    if (adminStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAdmin(true);
    }
  }, [navigate]);
  
  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/login');
  };
  
  // Format time (seconds to MM:SS)
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate average time
  const calculateAverageTime = (): string => {
    if (users.length === 0) return '00:00';
    
    const totalTime = users.reduce((acc, user) => acc + user.timeSpent, 0);
    const averageSeconds = Math.floor(totalTime / users.length);
    
    return formatTime(averageSeconds);
  };
  
  // Sort users by score (descending) and time (ascending)
  const sortedUsers = [...users].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // Higher score first
    }
    return a.timeSpent - b.timeSpent; // Lower time first if scores are equal
  });

  // Handle delete user
  const handleDeleteUser = (userId: number) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  // Check for duplicate user names
  const isDuplicateUser = (userName: string): boolean => {
    return users.some(user => user.name === userName);
  };

  if (!isAdmin) {
    return null; // Don't render anything if not admin
  }
  
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Admin Header */}
          <div className="bg-blue-500 text-white p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Painel do Administrador</h1>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total de Participantes</p>
                  <p className="text-2xl font-bold text-blue-700">{users.length}</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pontuação Média</p>
                  <p className="text-2xl font-bold text-green-700">
                    {users.length > 0 
                      ? (users.reduce((acc, user) => acc + user.score, 0) / users.length).toFixed(1) 
                      : '0'}
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tempo Médio</p>
                  <p className="text-2xl font-bold text-red-700">{calculateAverageTime()}</p>
                </div>
              </div>
            </div>
            
            {/* Ranking Table */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-500" />
                Ranking Completo
              </h2>
              
              {users.length > 0 ? (
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 bg-blue-500 text-white p-3 text-sm font-medium">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-4">Usuário</div>
                    <div className="col-span-2 text-center">Pontos</div>
                    <div className="col-span-2 text-center">Tempo</div>
                    <div className="col-span-2 text-center">Data</div>
                    <div className="col-span-1 text-center">Ações</div>
                  </div>
                  
                  {sortedUsers.map((user, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-12 p-3 text-sm border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className="col-span-1 text-center font-medium">{index + 1}</div>
                      <div className="col-span-4 flex items-center">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>{user.name}</span>
                      </div>
                      <div className="col-span-2 text-center font-medium">{user.score}</div>
                      <div className="col-span-2 text-center text-gray-600">{formatTime(user.timeSpent)}</div>
                      <div className="col-span-2 text-center text-gray-600">
                        {new Date().toLocaleDateString()}
                      </div>
                      <div className="col-span-1 text-center">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500">
                  <User className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-lg font-medium">Nenhum participante ainda</p>
                  <p className="mt-1">Os resultados aparecerão aqui quando os usuários completarem o quiz.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;