export default function Pagina() {
    return (
      <div>
        <h1>Página de Informações</h1>
        <p>Esta página serve como um exemplo de página genérica. Utilize este espaço para adicionar qualquer conteúdo relevante para seus usuários.</p>
        <p>Você pode personalizar essa página com informações específicas sobre produtos, serviços ou qualquer outra informação que deseja compartilhar.</p>
        <button onClick={() => window.location.href = '/'}>Voltar para a Home</button>
      </div>
    );
  }
  