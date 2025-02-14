  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes , Route } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { HotstarHome } from './components/Hotstar/HotstarHome'
import { HotstarWelcome } from './components/Hotstar/HotstarWelcome'
import { HotstarMovies } from './components/Hotstar/HotstarMovies'
import { Error } from './components/Hotstar/Error'
import { Play } from './components/Hotstar/Play'
import { FormDemo1 } from './components/Form/FormDemo1'
import { FormDemo2 } from './components/Form/FormDemo2'
import { FormDemo3 } from './components/Form/FormDemo3'
import { FormDemo4 } from './components/Form/FormDemo4'
import { FormDemo5 } from './components/Form/FormDemo5'
import { FormDemo6 } from './components/Form/FormDemo6'
import { FormDemo7 } from './components/Form/FormDemo7'
import { LoginForm } from './components/Form/LoginForm'


function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element= {<HotstarHome  />} />
        <Route path="/" element= {<HotstarWelcome />} />
        <Route path="/movies" element= {<HotstarMovies />} />
        <Route path="/play/:id" element= {<Play />} />
        <Route path="/formdemo1" element= {<FormDemo1 />} />
        <Route path="/formdemo2" element= {<FormDemo2 />} />
        <Route path="/formdemo3" element= {<FormDemo3 />} />
        <Route path="/formdemo4" element= {<FormDemo4 />} />
        <Route path="/formdemo5" element= {<FormDemo5 />} />
        <Route path="/formdemo6" element= {<FormDemo6 />} />
        <Route path="/formdemo7" element= {<FormDemo7 />} />
        <Route path="/login" element= {<LoginForm />} />
        <Route path="/error" element= {<Error />} />
      </Routes> 
    </>
  )
}

export default App
