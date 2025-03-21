import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { Award, Clock, User, LogOut, BarChart, Users as UsersIcon, Trash, Edit } from 'lucide-react';

type QuizUser = {
  id: number;
  name: string;
  score: number;
  timeSpent: number;
  avatar: string;
};

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<QuizUser[]>([]);
  const [editingUser, setEditingUser] = useState<QuizUser | null>(null);
  const [userName, setUserName] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [userTimeSpent, setUserTimeSpent] = useState(0);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAdmin(true);
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('usuariosne').select('*');
      if (error) {
        console.error('Erro ao buscar usuários:', error);
      } else {
        setUsers(data || []);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const calculateAverageTime = (): string => {
    if (users.length === 0) return '00:00';
    const totalTime = users.reduce((acc, user) => acc + user.timeSpent, 0);
    const averageSeconds = Math.floor(totalTime / users.length);
    return formatTime(averageSeconds);
  };

  const handleDeleteUser = async (userId: number) => {
    const { error } = await supabase.from('usuariosne').delete().eq('id', userId);
    if (error) {
      console.error('Erro ao excluir usuário:', error);
    } else {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleEditUser = (user: QuizUser) => {
    setEditingUser(user);
    setUserName(user.name);
    setUserScore(user.score);
    setUserTimeSpent(user.timeSpent);
  };

  const handleSaveUser = async () => {
    if (editingUser) {
      const { error } = await supabase
        .from('usuariosne')
        .update({ name: userName, score: userScore, timeSpent: userTimeSpent })
        .eq('id', editingUser.id);

      if (error) {
        console.error('Erro ao atualizar usuário:', error);
      } else {
        setUsers(users.map(user =>
          user.id === editingUser.id
            ? { ...user, name: userName, score: userScore, timeSpent: userTimeSpent }
            : user
        ));
        setEditingUser(null);
      }
    } else {
      const { data, error } = await supabase
        .from('usuariosne')
        .insert([{ name: userName, score: userScore, timeSpent: userTimeSpent, avatar: 'default-avatar.png' }]);

      if (error) {
        console.error('Erro ao adicionar usuário:', error);
      } else if (data) {
        setUsers([...users, ...data]);
      }
    }

    setUserName('');
    setUserScore(0);
    setUserTimeSpent(0);
  };

  if (!isAdmin) {
    return null;
  }

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

            {/* Ranking e Formulário de Usuários */}
            {/* O restante do código permanece o mesmo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;