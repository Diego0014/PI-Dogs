import {useState} from 'react';
import axios from 'axios';

export default function SearchBar() {
    const [search,setSearch] = useState('');
    function onSubmit(e){
      e.preventDefault();
      axios.post('')
    }
    function onInputChange(e){
      setSearch(e.target.value);
    }
    return (
         <div>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onInputChange} value="search" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }