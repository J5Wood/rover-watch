import './App.css'
import { useState, useEffect } from 'react'
import SearchField from './containers/SearchField'
import Content from './containers/Content'

function App() {

  const [currentUrl, setCurrentUrl] = useState("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=7iOnoLRhQuWpZJTy7D76y65CbiAEHjOhqezrD6bj")
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch(currentUrl)
      .then(resp => resp.json())
      .then(data => setPosts(data.photos))
  }, [currentUrl])

  return (
    <div className="App">
      <SearchField setPosts={setPosts} setUrl={setCurrentUrl}/>
      <Content posts={posts} />
    </div>
  );
}

export default App;
