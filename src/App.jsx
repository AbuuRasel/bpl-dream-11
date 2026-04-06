import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
const PlayerPromis = fetchPlayer()
function App() {
  const [coin, setCoin] = useState(50000)



  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
      }>
        <Players PlayerPromis={PlayerPromis} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      <Footer></Footer>
      {/* react toastify */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
