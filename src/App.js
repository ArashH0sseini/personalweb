import './App.css';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IndexScreen from './screens/Index'


function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <IndexScreen />
    </ThemeProvider>
  )
}

export default App;
