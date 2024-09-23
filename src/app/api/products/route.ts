import data from "./data.json";

export async function GET() {
  return new Response(
    JSON.stringify({ name: "John Doe", data: data.products }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
