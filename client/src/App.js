import "./App.css";
import Dogs from "./components/dogs/dogs";
import SearchBar from "./components/searchBar/searchBar";
import Index from "./components/landing/initialPage";
function App() {
  return (
    <div className="App">
      <Index />
      {/* <SearchBar />
      <Dogs /> */}
    </div>
  );
}

export default App;
