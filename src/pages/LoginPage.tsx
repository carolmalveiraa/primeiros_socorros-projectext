import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'nordesteadmin',
          password: 'nordesteadmin'
        })
      })
      const result = await res.json();

      if (!res.ok) {
        setError(result.message || 'Erro no login.');
        return;
      }

      sessionStorage.setItem('token', result.token);
      navigate('/admin');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 text-white p-6 text-center">
            <h1 className="text-2xl font-bold">Área do Administrador</h1>
            <p className="text-sm mt-1">Faça login para acessar o painel administrativo</p>
          </div>

          <div className="p-6">
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                  Nome de Usuário
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu usuário"
                    autoComplete="username" // Corrigido
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite sua senha"
                    autoComplete="current-password" // Corrigido
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Solicite suas credenciais aos administradores.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;