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
      {/* O restante do código permanece o mesmo */}
    </div>
  );
};

export default AdminPage;