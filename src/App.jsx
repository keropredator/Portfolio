import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import XoGame from './pages/TikTakTo/XoGame';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/XoGame" element={<XoGame />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
