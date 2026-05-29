import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [titulo, setTitulo] = useState("");
  const [chamados, setChamados] = useState([]);

  const carregarChamados = async () => {
    const resposta = await axios.get(
      "http://localhost:3001/chamados"
    );

    setChamados(resposta.data);
  };

  const criarChamado = async () => {
    if (!titulo) return;

    await axios.post(
      "http://localhost:3001/chamados",
      {
        titulo
      }
    );

    setTitulo("");
    carregarChamados();
  };

  useEffect(() => {
    carregarChamados();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Chamados</h1>

      <input
        type="text"
        placeholder="Digite o chamado"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <button onClick={criarChamado}>
        Criar
      </button>

      <hr />

      <h2>Chamados</h2>

      <ul>
        {chamados.map((chamado) => (
          <li key={chamado.id}>
            {chamado.titulo} - {chamado.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
