import './App.css';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IndexScreen from './screens/Index'
import New from './screens/New'
import { getDirection } from './localization/index'

function App() {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IndexScreen />
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IndexScreen />
    </ThemeProvider>
  )
}

export default App;
