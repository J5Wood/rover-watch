import React from 'react'

const Post = ({"data": {img_src, rover, camera, earth_date, sol}}) => {


    // debugger
    return (
        <div className="post">
            <a href={img_src}>
            <img src={img_src}></img>
            </a>
            <h3>{rover["name"]} - {camera["full_name"]}</h3>
            <p>{earth_date}</p>
            <button>{String.fromCharCode(9829)}</button>
        </div>
    )
}

export default Post