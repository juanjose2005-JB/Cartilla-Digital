import { useParams } from "next/navigation";

export default function SharePage() {
  const params = useParams();
  const token = params.token;

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Cartilla compartida</h1>
      <p>Token recibido: {token}</p>
      <p>Aquí más adelante mostraremos los datos de la mascota.</p>
    </div>
  );
}
