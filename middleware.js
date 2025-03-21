// Exemplo de autenticação no React
import { useEffect } from 'react';
import { supabase } from './supabase';

const useAuth = () => {
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log('Usuário não autenticado');
      } else {
        console.log('Usuário autenticado:', session);
      }
    };

    checkSession();
  }, []);
};

export default useAuth;