
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import ActorList from './pages/ActorList';
import ActorDetail from './pages/ActorDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main /> }/>
          <Route path="actors">
            <Route index element={ <ActorList/> }/>
            <Route path=":peopleCd" element={ <ActorDetail/> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
