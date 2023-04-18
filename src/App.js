//import logo from './logo.svg';
import './App.css';
import Layout from './component/shared/Layout';
import AllMTGArenaCards from './pages/AllMTGArenaCards';
import AddMTGArenaCard from './pages/AddMTGArenaCard';
import MTGArenaPaginatedCards from './pages/MTGArenaPaginatedCards';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMTGArenaCards></AllMTGArenaCards>}></Route>
      </Routes> 
      <Routes>
        <Route exact path="/:id" element={<MTGArenaPaginatedCards></MTGArenaPaginatedCards>}></Route>
      </Routes>
      <Routes>
        <Route path="/add-card" element={<AddMTGArenaCard></AddMTGArenaCard>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
