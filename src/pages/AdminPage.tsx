import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, LogOut, Users as UsersIcon } from 'lucide-react';

type QuizUser = {
  id: number;
  name: string;
  score: number;
  timeSpent: number;
  avatar: string;
};

function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

const AdminPage = () => {
  const [users, setUsers] = useState<QuizUser[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/resultados');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar resultados:', error);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setIsAdmin(true);
      fetchUsers();
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsAdmin(false);
    navigate('/login');
  };

  if (!isAdmin) {
    return null;
  }

  // Estatísticas
  const avgScore =
    users.length > 0
      ? (users.reduce((acc, user) => acc + user.score, 0) / users.length).toFixed(1)
      : '0';
  const avgTime =
    users.length > 0
      ? formatTime(
          Math.round(users.reduce((acc, user) => acc + user.timeSpent, 0) / users.length)
        )
      : '00:00';

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                  <p className="text-2xl font-bold text-green-700">{avgScore}</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tempo Médio</p>
                  <p className="text-2xl font-bold text-red-700">{avgTime}</p>
                </div>
              </div>
            </div>

            {/* Tabela de usuários */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Avatar</th>
                    <th className="px-4 py-2 border-b">Nome</th>
                    <th className="px-4 py-2 border-b">Pontuação</th>
                    <th className="px-4 py-2 border-b">Tempo Gasto</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b text-center">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">{user.name}</td>
                      <td className="px-4 py-2 border-b text-center">{user.score}</td>
                      <td className="px-4 py-2 border-b text-center">{formatTime(user.timeSpent)}</td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-4 text-gray-500">
                        Nenhum participante encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;