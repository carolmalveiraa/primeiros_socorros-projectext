import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { Award, Clock, LogOut, Users as UsersIcon } from 'lucide-react';

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

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      console.log('Sessão recuperada:', session); // Verifica se a sessão foi recuperada

      if (!session) {
        navigate('/login'); // Redireciona para login se não houver sessão
      } else {
        setIsAdmin(true);
      }
    };

    checkSession();
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('usuariosne').select('*');
      if (error) {
        console.error('Erro ao buscar usuários:', error);
      } else {
        console.log('Usuários recuperados:', data); // Verifica os dados recuperados
        setUsers(data || []);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('isAdmin'); // Remove o estado de autenticação
    navigate('/login');
  };

  if (!isAdmin) {
    return null; // Evita renderizar a página enquanto verifica a autenticação
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
                  <p className="text-2xl font-bold text-red-700">{'00:00'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;