import Post from './Post'

const Content = ({posts}) => {
    const renderPosts = () => {
        if(posts.length > 0){
            return posts.map(post => <Post data={post} key={post["id"]}/>)
        }
    }


    // ********* Need to render nothing if no pictures on a day
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
        </div>
    )
}

export default Content