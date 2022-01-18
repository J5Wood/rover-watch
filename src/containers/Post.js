import React from 'react'

const Post = ({"data": {img_src, rover, camera, earth_date, sol}}) => {

    // debugger
    return (
        <div className="post">
            <a href={img_src}>
            <img src={img_src}></img>
            </a>
            <h3>{rover["name"]} - {camera["full_name"]}</h3>
            <h4>{earth_date}</h4>
            <p></p>
        </div>
    )
}

export default Post