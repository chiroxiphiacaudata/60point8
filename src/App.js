import { Routes, Route } from 'react-router-dom';
import ENGB from './en-GB/en-GB.js';
import FRFR from './fr-FR/fr-FR.js';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" index element={<ENGB />} />
          <Route path="/fr-FR" element={<FRFR />} />
          <Route path="/en-GB" element={<ENGB />} />
       </Routes>
    </>
 );
};

export default App;
