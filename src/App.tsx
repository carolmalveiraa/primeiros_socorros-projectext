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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <QuizProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curso" element={<CoursePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </QuizProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;