import { useState } from "react";
import axios from "axios";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  /* function onSubmit(e){
      e.preventDefault();
      axios.post('')
    }
    function onInputChange(e){
      setSearch(e.target.value);
    } */
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(search);
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
