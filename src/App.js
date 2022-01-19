import './App.css'
import { useState, useEffect } from 'react'
import SearchField from './components/SearchField'
import Content from './components/Content'

function App() {

  const [currentUrl, setCurrentUrl] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState("initial-load")

  useEffect(() => {
    if(currentUrl.length > 0){
      fetch(currentUrl)
      .then(resp => resp.json())
      .then(data => {
        if(data.photos.length === 0){
          setPosts([])
          setLoading(false)
        } else {
          setPosts(data.photos)
        }
      })
    }
  }, [currentUrl])

  return (
    <div className="App">
      <main>
        <h1>Search through Mars rover photos</h1>
        <SearchField setPosts={setPosts} setUrl={setCurrentUrl} url={currentUrl} setLoading={setLoading}/>
        <Content posts={posts} loading={loading}/>
      </main>
    </div>
  );
}

export default App;
