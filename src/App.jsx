import { HashRouter, Routes, Route } from 'react-router-dom';  

import './App.css';

import { NavBar } from './NavBar';
import { HomePage } from './Page/HomePage';
import { CarPage } from './Page/CarPage';
import { TopChannelsPage } from './Page/TopChannelsPage';
import { ProfilePage } from './Page/ProfilePage';
import { NotFoundPage } from './Page/NotFoundPage';
import { StorePage } from './Page/StorePage';

import { CarPost } from './Components/CarPost';

function App() {

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/car' element={<CarPage/>}/>
          <Route path='/car/:slug' element={<CarPost/>}/>
          <Route path='/top-channels' element={<TopChannelsPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
      </HashRouter>

    </>
  )
}

export default App
