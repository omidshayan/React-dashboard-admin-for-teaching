import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Routes from './Routes';
import {useRoutes} from 'react-router-dom';

function App() {
  const router = useRoutes(Routes)
  return (
    <>
      <Sidebar />
      <Header />

      {router}

    </>
  );
}

export default App;
