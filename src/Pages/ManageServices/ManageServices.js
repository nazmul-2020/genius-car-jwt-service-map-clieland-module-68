import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices();

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>fsli;jyhwouhkl;fcghoi</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handelDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;