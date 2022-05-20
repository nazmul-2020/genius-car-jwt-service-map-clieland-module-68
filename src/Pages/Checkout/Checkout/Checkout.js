import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useSerViceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useSerViceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handelPlaceOrder = event => {
        event.preventDefault();

        const order = {
            email: user.name,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please  your booking :{service.name}</h2>
            <form onSubmit={handelPlaceOrder}>
                <input className='w-75 mb-3' type="text" value={user.displayName} name="name" id="" placeholder='name' required disabled />
                <br />
                <input className='w-75 mb-3' type="email" value={user.email} name="email" id="" placeholder='email' required disabled />
                <br />
                <input className='w-75 mb-3' type="text" value={service.name} name="service" id="" placeholder='service' required />
                <br />
                <input className='w-75 mb-3' type="text" name="Adders" id="" placeholder='Adders' required autoComplete='off' />
                <br />
                <input className='w-75 mb-3' type="text" name="phone" id="" placeholder='phone' required />
                <br />
                <input type="submit" value="Order" />
            </form>
        </div>
    );
};

export default Checkout;