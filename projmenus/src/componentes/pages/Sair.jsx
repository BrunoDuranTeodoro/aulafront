export default function Sair() {
    return (
      <div>
        <h1>Até Breve!</h1>
        <p>Você está saindo do nosso site. Agradecemos por sua visita e esperamos vê-lo novamente em breve.</p>
        <p>Se precisar de mais informações, sinta-se à vontade para voltar a qualquer momento.</p>
        <button onClick={() => window.location.href = '/'}>Voltar para a Home</button>
      </div>
    );
  }
  