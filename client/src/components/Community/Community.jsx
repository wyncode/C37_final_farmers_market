import React from 'react';
import comPic from '../Community/gardenkids.jpg'
import '../Community/Community.css'

const Community = () => {
    return(
        <div>
            <h1>Community Connection</h1>
<img src={comPic} className="comPicture" >
</img>
    We believe in healthy food accessible to all. We offer
    educational programs & veggie boxes for families.

<button type='button'>Get Involved</button>
        </div>
    )
}


export default Community;