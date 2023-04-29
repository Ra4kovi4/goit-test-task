
import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.css';

const HomePage = lazy(()=>import('./pages/Home/Home'))
const TweetsPage = lazy(()=>import('./pages/Tweets/Tweets'))


function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/tweets" element={ <TweetsPage/>}/>
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes></>)
}

export default App;
