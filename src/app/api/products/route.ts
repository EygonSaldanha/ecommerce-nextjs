import { Pool } from "pg";

if (
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_HOST ||
  !process.env.POSTGRES_DB ||
  !process.env.POSTGRES_PASSWORD ||
  !process.env.POSTGRES_PORT
) {
  throw new Error(
    "Faltam variáveis de ambiente para conectar ao banco de dados"
  );
}

// Configurando o pool de conexão
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT, 10), // Convertendo a porta para número
});

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM products");
    const products = result.rows;

    return new Response(JSON.stringify({ name: "John Doe", data: products }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
