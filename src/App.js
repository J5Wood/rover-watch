import './App.css'
import { useState } from 'react'
import SearchField from './containers/SearchField'
import Content from './containers/Content'

function App() {

  const [currentUrl, setCurrentUrl] = useState("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=7iOnoLRhQuWpZJTy7D76y65CbiAEHjOhqezrD6bj")

  return (
    <div className="App">
      <SearchField setUrl={setCurrentUrl}/>
      <Content url={currentUrl}/>
    </div>
  );
}

export default App;
