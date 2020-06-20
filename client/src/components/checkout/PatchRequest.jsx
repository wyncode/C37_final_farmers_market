import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import axios from 'axios'

const PatchRequest = () => {

    const { user, setUser } = useContext(AppContext);

    const updateUserName = async (name, e) => {
        e.preventDefault();
        await axios({
          method: 'PATCH',
          url: `/users/${user._id}`,
          data: {
            name
          }
        })
          .then(({ data }) => {
            setUser(data.user);
          })
          .catch((e) => {
            console.log(e.message.toString(), 'Credentials Error');
          });
      };

    return (
        <div>
            {
        <div>
            <form action="">
            <h1>Hey {user && user.name}!</h1>
            <h3>Your veggies have been waiting for this moment.</h3>
            <h3>Please confirm your info below</h3>
            <h3><span>Contact  </span><span>{user.name}  </span><button type="submit" onClick={updateUserName}>Change</button></h3>
            <h3><span>Delivery  </span><span>{user.address}, {user.apt} {user.city} {user.zipcode}  </span><span>Change</span></h3>
            </form>
        </div>
        }
        </div>
    )

}
}

export default PatchRequest