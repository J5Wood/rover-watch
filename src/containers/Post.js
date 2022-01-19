import { useState } from 'react'

const Post = ({"data": {img_src, rover, camera, earth_date}}) => {

    const [liked, setLiked] = useState(false)

    const handleLike = liked => {
        setLiked(!liked)
    }

    const renderLikeChar = () => {
        if(liked){
            return String.fromCharCode("0x2764")
        } else {
            return String.fromCharCode("0x2661")
        }
    }


    return (
        <div className="post">
            <a target="_blank" rel="noopener noreferrer" href={img_src}>
            <img src={img_src}></img>
            </a>
            <h3>{rover["name"]} - {camera["full_name"]}</h3>
            <p>{earth_date}</p>
            <button onClick={() => handleLike(liked)}>{renderLikeChar()}</button>
        </div>
    )
}

export default Post