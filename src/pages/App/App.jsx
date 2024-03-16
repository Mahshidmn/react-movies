import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css'


function App() {
  const[user,setUser]= useState(null);

  function submitUser(user) {
    setUser(user);
  }


  return (
  
      <main className="App">
       { user ? 
        <>
          <NavBar />
           <Routes>
             <Route path="/" element={<MoviesListPage />} />
             <Route path="/movies/:moviename" element={<MovieDetailPage />} />
             <Route path="/actors" element={<ActorsListPage />} />

           </Routes>
           </>
           : 
           <LoginPage submitUser= {submitUser} />
       }
        
      </main>
  )
}

export default App;
