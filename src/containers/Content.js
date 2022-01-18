import {useState, useEffect} from 'react'
import Post from './Post'

const Content = ({url}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setPosts(data.photos))
    }, [url])

    const renderPosts = () => {
        if(posts.length > 0){
            return posts.map(post => <Post data={post} key={post["id"]}/>)
        }
    }


    // ********* Render nothing if no pictures on day
    // nothing on spirit 2010-03-15
    const renderTitle = () => {
        if(posts.length > 0){
            return <h2>{posts[0]["rover"]["name"]}</h2>
        } else {
            return <h2>Loading Pictures...</h2>
        }
    }

    return (
        <div className="content">
            {renderTitle()}
            {renderPosts()}
            {console.log(posts)}
        </div>
    )
}

export default Content