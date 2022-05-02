import './App.css';
import Dogs from './components/dogs';
import SearchBar from './components/searchBar';
import Temperament from './components/temperament';
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Dogs />
    </div>
  );
}

export default App;
