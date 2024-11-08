import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';

const Menu = () => { 
    const { pathname } = useLocation();
    let activePath = pathname.split('/').at(-1); 
    
    return (
        <nav className='fixed h-[100vh] min-w-[250px] w-[20%]'>
            <ul style={{ listStyleType: 'none', fontSize: '22px', marginTop: '50px' }}>
                <li className={`pl-5 leading-[60px] hover:bg-gray-600 cursor-pointer border-l-4 hover:border-orange-600
                    ${activePath === 'dashboard' ? 'border-lime-600 bg-gray-700' : 'border-gray-800'}`}>
                    <Link to="/dashboard">
                        <p className='w-full'>Dashboard</p>
                    </Link>
                </li> 

                <li className={`pl-5 leading-[60px] hover:bg-gray-600 cursor-pointer border-l-4 hover:border-orange-600
                    ${activePath === 'all-users' ? 'border-lime-600 bg-gray-700' : 'border-gray-800'}`}>
                    <Link to="/dashboard/all-users">
                        <p className='w-full'>Users</p>
                    </Link> 
                </li> 

                <li className={`pl-5 leading-[60px] hover:bg-gray-600 cursor-pointer border-l-4 hover:border-orange-600
                    ${['tours', 'create-tour'].includes(activePath) ? 'border-lime-600 bg-gray-700' : 'border-gray-800'}`}>
                    <Link to="/dashboard/tours">
                        <p className='w-full'>Tours</p>
                    </Link>
                </li> 

                <li className={`pl-5 leading-[60px] hover:bg-gray-600 cursor-pointer border-l-4 hover:border-orange-600
                    ${activePath === 'orders' ? 'border-lime-600 bg-gray-700' : 'border-gray-800'}`}>
                    <Link to="/dashboard/orders">
                        <p className='w-full'>Orders</p>
                    </Link>
                </li> 
            </ul> 
        </nav> 
    ) 
} 

export default Menu; 