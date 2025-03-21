import { useEffect, useState } from 'react';
import { supabase } from './supabase';

const TestSupabase = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('usuariosne').select('*');
      if (error) {
        console.error('Erro ao conectar ao Supabase:', error);
        setError(error.message);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Erro: {error}</p>;
  if (!data) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Dados do Supabase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestSupabase;