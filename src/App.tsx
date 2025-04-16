import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <QuizProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curso" element={<CoursePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<div>Página não encontrada</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QuizProvider>
  );
}

export default App;