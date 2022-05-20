
import { Link, useParams } from 'react-router-dom';
import useSerViceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useSerViceDetail(serviceId);

    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <img src={service.img} alt="" />
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;