
import './App.css'
import RouterItem from '../Config/Routes/Router';
import { ThemeProvider } from '@mui/material';
import theme from './../Config/muitheme-config'

const App = () => {
  

  return (
    <ThemeProvider theme={theme}>
     <RouterItem />
    </ThemeProvider>
    
  )
}

export default App
