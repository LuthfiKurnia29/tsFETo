import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Barangs from './components/Barangs';
import 'tailwindcss/tailwind.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Barangs />
    </>
  )
}

export default App
