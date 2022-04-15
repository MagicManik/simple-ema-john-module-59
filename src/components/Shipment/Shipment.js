import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



// video: 7.ii
const Shipment = () => {

    // video 8.i
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleName = event => {
        setName(event.target.value);
    }

    const handleNumber = event => {
        setNumber(event.target.value);
    }

    const handleAddress = event => {
        setAddress(event.target.value);
    }

    console.log(name, email, number, address)

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log('submit')
    }
    return (
        <section className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleFormSubmit}>


                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" placeholder='Your name' required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        {/* video 8.i */}
                        <input value={user ? user.email : ''} type="email" name="email" id="" placeholder='Your email' required readOnly />
                    </div>


                    <div className='input-group'>
                        <label htmlFor="number">Number</label>
                        <input onBlur={handleNumber} type="tel" name="number" id="" required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" placeholder='Your address' required />
                    </div>


                    <div className="input-group">
                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Shipment;