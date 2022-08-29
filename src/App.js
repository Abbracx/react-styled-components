import { Navbar } from './components';
import GlobalStyle from './globalSyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar /> 
    </Router>
  );
}

export default App;
