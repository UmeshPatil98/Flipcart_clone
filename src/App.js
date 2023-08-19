
import './App.css';

//Component
import Header from './Component/Header/Header.jsx';
import Home from './Component/Home/Home.jsx';

import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Header/>
      <Box style={{marginTop:54}}>
      <Home/>
      </Box>
    </div>
  );
}

export default App;
