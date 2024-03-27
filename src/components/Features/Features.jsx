import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineInbox } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import '../style.css';

const Features = () => {
    
    let featuresData = [
        {
            icon : CiDeliveryTruck,
            title : "Free Shipping",
            content : "Enjoy free shipping on all orders"
        },
        {
            icon : AiOutlineInbox,
            title : "Product Replace",
            content : "Easy Product Replacement Available!"
        },
        {
            icon : FiDollarSign,
            title : "Emi Available",
            content : "No cost EMI available on all major credit cards"
        },
        {
            icon : FiHeadphones,
            title : "24/7 Support",
            content : "Dedicated 24/7 support via chat and email"
        },
    ]
  
    return (
    <div className='features'>
        {
            featuresData.map((item) => {
                return (
                    <div className='features-card d-flex gap-3 justify-content-center align-items-center'>
                        <div className='feature-icon d-flex justify-content-center align-items-center'>
                            <item.icon fontSize={'2rem'} /> 
                        </div>
                        <div>
                            <p className='feature-title'>{item.title}</p>
                            <p className='feature-para'>{item.content}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Features