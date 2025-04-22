import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, LogOut, Users as UsersIcon, Trash2, Save } from 'lucide-react';

type QuizUser = {
  id: number;
  name: string;
  score: number;
  timeSpent: number;
  avatar: string;
};

const formatTime = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};

const AdminPage = () => {
  const [users, setUsers] = useState<QuizUser[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setIsAdmin(true);
      fetchUsers();
    }
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/resultados');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar resultados:', error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsAdmin(false);
    navigate('/login');
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este usuário/recorde?');
    if (!confirm) return;

    await fetch(`http://localhost:3001/api/resultados/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  const startEdit = (user: QuizUser) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditAvatar(user.avatar);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName('');
    setEditAvatar('');
  };

  const handleSave = async (id: number) => {
    await fetch(`http://localhost:3001/api/resultados/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName, avatar: editAvatar }),
    });
    cancelEdit();
    fetchUsers();
  };

  if (!isAdmin) return null;

  const avgScore = users.length > 0
    ? (users.reduce((acc, user) => acc + user.score, 0) / users.length).toFixed(1)
    : '0';

  const avgTime = users.length > 0
    ? formatTime(Math.round(users.reduce((acc, user) => acc + user.timeSpent, 0) / users.length))
    : '00:00';

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 text-white p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Painel do Administrador</h1>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </button>
          </div>

          {/* Estatísticas */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard icon={<UsersIcon className="h-6 w-6 text-blue-600" />} label="Total de Participantes" value={users.length.toString()} bg="blue" />
              <StatCard icon={<Award className="h-6 w-6 text-green-600" />} label="Pontuação Média" value={avgScore} bg="green" />
              <StatCard icon={<Clock className="h-6 w-6 text-red-600" />} label="Tempo Médio" value={avgTime} bg="red" />
            </div>

            {/* Tabela */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Avatar</th>
                    <th className="px-4 py-2 border-b">Nome</th>
                    <th className="px-4 py-2 border-b">Pontuação</th>
                    <th className="px-4 py-2 border-b">Tempo Gasto</th>
                    <th className="px-4 py-2 border-b">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    const isEditing = editId === user.id;
                    return (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b text-center">
                          {isEditing ? (
                            <div>
                              <select
                                value={editAvatar}
                                onChange={(e) => setEditAvatar(e.target.value)}
                                className="border rounded px-2 mb-2"
                              >
                                <option value="https://api.dicebear.com/7.x/adventurer/svg?seed=Amaya">Avatar 1</option>
                                <option value="https://api.dicebear.com/7.x/adventurer/svg?seed=Eden">Avatar 2</option>
                                <option value="https://api.dicebear.com/7.x/adventurer/svg?seed=Chase">Avatar 3</option>
                                <option value="https://api.dicebear.com/7.x/adventurer/svg?seed=Sara">Avatar 4</option>
                              </select>
                              <img src={editAvatar} className="w-10 h-10 rounded-full mx-auto" />
                            </div>
                          ) : (
                            <img src={user.avatar} className="w-10 h-10 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {isEditing ? (
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="border rounded px-2"
                            />
                          ) : (
                            user.name
                          )}
                        </td>
                        <td className="px-4 py-2 border-b text-center">{user.score}</td>
                        <td className="px-4 py-2 border-b text-center">{formatTime(user.timeSpent)}</td>
                        <td className="px-4 py-2 border-b text-center">
                          {isEditing ? (
                            <>
                              <button
                                onClick={() => handleSave(user.id)}
                                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                              >
                                <Save className="inline w-4 h-4" />
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                              >
                                Cancelar
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => startEdit(user)}
                                className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                              >
                                Editar
                              </button>
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                              >
                                <Trash2 className="inline w-4 h-4" />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-4 text-gray-500">
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

// Componente para exibir cartões de estatísticas
const StatCard = ({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: 'blue' | 'green' | 'red';
}) => {
  const bgMap = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    red: 'bg-red-50',
  };
  const iconBgMap = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    red: 'bg-red-100',
  };
  const textColorMap = {
    blue: 'text-blue-700',
    green: 'text-green-700',
    red: 'text-red-700',
  };

  return (
    <div className={`${bgMap[bg]} rounded-lg p-6 flex items-center`}>
      <div className={`${iconBgMap[bg]} p-3 rounded-full mr-4`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className={`text-2xl font-bold ${textColorMap[bg]}`}>{value}</p>
      </div>
    </div>
  );
};

export default AdminPage;