import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Detail: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-dark btn-link text-decoration-none text-white mt-5'>Proced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;