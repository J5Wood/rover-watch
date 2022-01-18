import React from 'react'

const Post = ({"data": {id, sol}}) => {

    // debugger
    return (
        <div className="post">
            <h3>I'm post {id}</h3>
            <p>From SOL Date {sol}</p>
        </div>
    )
}

export default Post