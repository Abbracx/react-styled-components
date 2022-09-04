import { Navbar } from './components';
import GlobalStyle from './globalSyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
