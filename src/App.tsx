import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Conectar ao banco Neon
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Inserir o comentário no banco
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }

  return (
    <form action={create}>
      <input type="text" placeholder="Escreva um comentário" name="comment" />
      <button type="submit">Enviar</button>
    </form>
  );
}
