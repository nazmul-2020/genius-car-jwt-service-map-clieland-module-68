import { useEffect, useState } from "react";

const useSerViceDetail = serviceId => {
    const [service, steService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => steService(data));
        console.log(url);

    }, [serviceId]);
    return [service];

}
export default useSerViceDetail;