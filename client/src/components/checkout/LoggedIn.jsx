import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';


const LoggedIn = () => {
    const { user } = useContext(AppContext);

    return (
        <div>
        <div>
            <h1>Hey {user.name}!</h1>
            <h3>Your veggies have been waiting for this moment.</h3>
            <h3>Please confirm your info below</h3>
            <h3><span>Contact  </span><span>{user.name}  </span><span>Change</span></h3>
            <h3><span>Delivery  </span><span>{user.address}, {user.apt} {user.city} {user.zipcode}  </span><span>Change</span></h3>
        </div>
        </div>
    )

}

export default LoggedIn;