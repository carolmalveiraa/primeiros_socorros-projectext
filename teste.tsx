import { useEffect, useState } from 'react';
import { supabase } from './supabase';

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

const TestSupabase = () => {
  const [data, setData] = useState<Usuario[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from<Usuario>('usuariosne').select('*');
      if (error) {
        console.error('Erro ao conectar ao Supabase:', error);
        setError('Erro ao carregar os dados.');
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dados do Supabase</h1>
      {data && data.length > 0 ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Não há dados para exibir.</p>
      )}
    </div>
  );
};

export default TestSupabase;
