import Contato from "./componentes/pages/Contato";
import Home from "./componentes/pages/Home";
import Pagina from "./componentes/pages/Pagina";
import Sair from "./componentes/pages/Sair";
import Sobre from "./componentes/pages/Sobre";
import Sidebar from "./componentes/sidebar/Sidebar";


export default function App() {
  // Verifica a URL atual e escolhe o componente a ser renderizado
  const renderPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        return <Home/>;
      case '/contato':
        return <Contato/>;
      case '/sobre':
        return <Sobre/>;
      case '/pagina':
        return <Pagina/>;
      case '/sair':
        return <Sair/>;
      default:
        return <Home />; // Página padrão
    }
  };

  return (
    <div className="app-container">
      <Sidebar/>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
