import React, { createContext, useContext, useState, useEffect } from 'react';

export interface QuizUser {
  id: number;
  name: string;
  avatar: string;
  score: number;
  timeSpent: number;
}

interface QuizContextType {
  users: QuizUser[];
  currentUser: QuizUser | null;
  setCurrentUser: (user: QuizUser) => void;
  addUser: (user: QuizUser) => void;
  updateUserScore: (score: number) => void;
  updateUserTime: (time: number) => void;
  resetCurrentUser: () => void;
  fetchUsers: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<QuizUser[]>([]);
  const [currentUser, setCurrentUser] = useState<QuizUser | null>(null);

  // Buscar usuários do backend ao iniciar
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:3001/api/resultados')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  };

  const addUser = (user: QuizUser) => {
    setCurrentUser(user);
  };

  const updateUserScore = (score: number) => {
    if (!currentUser) return;
    setCurrentUser({ ...currentUser, score });
  };

  const updateUserTime = (time: number) => {
    if (!currentUser) return;
    setCurrentUser({ ...currentUser, timeSpent: time });
  };

  const resetCurrentUser = () => {
    setCurrentUser(null);
  };

  return (
    <QuizContext.Provider
      value={{
        users,
        currentUser,
        setCurrentUser,
        addUser,
        updateUserScore,
        updateUserTime,
        resetCurrentUser,
        fetchUsers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};