import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title';
import Data from './data/data';
import MediaCard from './components/employeeCard';
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)
console.log(Data);
  return (
    <Container fixed>
    <MediaCard />
    </Container>
  );
}

export default App
