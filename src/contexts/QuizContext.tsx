import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types
export interface QuizUser {
  name: string;
  avatar: string;
  score: number;
  timeSpent: number; // in seconds
}

interface QuizContextType {
  users: QuizUser[];
  currentUser: QuizUser | null;
  setCurrentUser: (user: QuizUser) => void;
  addUser: (user: QuizUser) => void;
  updateUserScore: (score: number) => void;
  updateUserTime: (time: number) => void;
  resetCurrentUser: () => void;
}

// Create context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Provider component
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<QuizUser[]>([]);
  const [currentUser, setCurrentUser] = useState<QuizUser | null>(null);

  // Load users from localStorage on initial render
  useEffect(() => {
    const storedUsers = localStorage.getItem('quizUsers');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('quizUsers', JSON.stringify(users));
  }, [users]);

  const addUser = (user: QuizUser) => {
    setUsers(prevUsers => [...prevUsers, user]);
    setCurrentUser(user);
  };

  const updateUserScore = (score: number) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, score };
    setCurrentUser(updatedUser);

    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.name === currentUser.name ? updatedUser : user
      )
    );
  };

  const updateUserTime = (time: number) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, timeSpent: time };
    setCurrentUser(updatedUser);

    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.name === currentUser.name ? updatedUser : user
      )
    );
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
        resetCurrentUser
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the quiz context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};