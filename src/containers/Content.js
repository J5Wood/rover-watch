import React, {useState, useEffect} from 'react'
import Post from './Post'

const Content = () => {

    const [currentUrl, setCurrentUrl] = useState("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3359&api_key=7iOnoLRhQuWpZJTy7D76y65CbiAEHjOhqezrD6bj")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(currentUrl)
        .then(resp => resp.json())
        .then(data => setPosts(data.photos))
    }, [])

    const renderPosts = () => {
        if(posts.length > 0){
            return posts.map(post => <Post data={post} key={post["id"]}/>)
        }
    }


    return (
        <div className="content">
            <h2>Content:</h2>
            {renderPosts()}
            {/* <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post> */}
            {console.log(posts)}

        </div>
    )
}

export default Content