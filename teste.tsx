import { useEffect, useState } from 'react';
import { supabase } from './src/supabase';  // ou o caminho onde você criou o arquivo

const TestSupabase = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('usuariosne').select('*');
      if (error) {
        console.error('Erro ao conectar ao Supabase:', error);
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Dados do Supabase</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Não há dados para exibir.</p>
      )}
    </div>
  );
};

export default TestSupabase;
