import Post from './Post'

const Content = ({posts, loading}) => {
    const renderPosts = () => {
        if(posts.length > 0){
            return posts.map(post => <Post data={post} key={post["id"]}/>)
        }
    }

    const renderTitle = () => {
        if(posts.length > 0){
            return <h2>{posts[0]["rover"]["name"]}</h2>
        } else {
            if(loading === "initial-load"){
                return <h2>Select a Rover and a Date to see pictures from that Earth day on Mars!</h2>
            } else if(loading){
                return <h2>Loading Pictures...</h2>
            } else {
                return <h2>"No Pictures for Selected Date"</h2>
            }
        }
    }

    return (
        <div className="content">
            {renderTitle()}
            {renderPosts()}
        </div>
    )
}

export default Content