import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext';
import axios from 'axios'


const CheckoutLoggedIn = () => {

    const { user, setUser } = useContext(AppContext);
    const [updateUser, setUpdateUser] = useState(false)

    const [name, setName] = useState(user && user.name);
    const [address, setAddress] = useState(user && user.address);
    const [city, setCity] = useState(user && user.city);
    const [apt, setApt] = useState(user && user.apt);
    const [state, setState] = useState(user && user.state);
    const [zipcode, setZipcode] = useState(user && user.zipcode);
    const [cardNumber, setCardNumber] = useState(user && user.cardNumber);
    const [cardName, setCardName] = useState(user && user.cardName);
    const [expirationDate, setExpirationDate] = useState(user && user.expirationDate);
    
    const cardDigits = user && user.cardNumber.split('')
    const lastDigits = cardDigits && cardDigits.splice((cardDigits.lenght - 4), 4)
    
    const updateUserInfo = async (name, address, apt, city, state, zipcode, cardName, cardNumber, expirationDate, e) => {
        e.preventDefault();
        console.log(user)
        await axios({
            method: 'PATCH',
            url: `/users/${user && user._id}`,
            data: {
                name, address, apt, city, state, zipcode, cardName, cardNumber, expirationDate
          }
        })
          .then(({ data }) => {
            setUser(data);
          })
          .catch((e) => {
            console.log(e.message.toString(), 'Credentials Error');
          });
      };

      useEffect(() => {
         setUpdateUser(false)
      }, [user])

    return (
        <div>
        {
        updateUser ? (
        <div>
            <h1>Hey {user && user.name}!</h1>
            <h3>Your veggies have been waiting for this moment.</h3>
            <h3>Please confirm your info below</h3>
            <form 
            className="updateCheckoutInfo"
            onSubmit={(e)=>updateUserInfo(name, address, apt, city, state, zipcode, cardName, cardNumber, expirationDate, e)}
            >
            <div>
            <label htmlFor="Contact">Contact</label>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="Delivery">Delivery</label>
            <input 
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
             <input 
            type="text"
            value={apt}
            onChange={(e) => setApt(e.target.value)}
            />
             <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
             <input 
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            />
            <input 
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="Payment">Payment Info</label>
            <input 
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            />
            <input 
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            />
             <input 
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            />
            </div>
            <button type="submit">
                Change</button>
            </form>
        </div>
        ): (
        
        <div>
            <h1>Hey {user && user.name}!</h1>
            <h3>Your veggies have been waiting for this moment.</h3>
            <h3>Please confirm your info below</h3>
            <h3><span>Contact  </span><span>{user && user.name}  </span></h3>
            <h3><span>Delivery  </span><span>{user && user.address}, {user && user.apt} {user && user.city} {user && user.zipcode}  </span></h3>
            <h3><span>Payment Info  </span><span>Card ending in {lastDigits}</span></h3>
            <button onClick={()=>setUpdateUser(true)}>Change</button>
        </div>
            )
        }
        </div>
    )

}

export default CheckoutLoggedIn;