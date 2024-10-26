import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import TableData from './TableData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<TableData />} />
      </Routes>
    </Router>
  );
}

export default App;