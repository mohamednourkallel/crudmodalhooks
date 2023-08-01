import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import ArticlesApp from './components/article/ArticlesApp';
import CategorieApp from './components/categorie/CategorieApp';
import Scategorie from './components/scategorie/Scategorie';
import Navscroll from './components/Navscroll';

function App() {
  return (
    <div className="App">
    <Router>
      <Navscroll/>
    <Routes>
    <Route path='/articles' element={<ArticlesApp/>}/>
    <Route path='/categories' element={<CategorieApp/>}/>
    <Route path='/scategories' element={<Scategorie/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
