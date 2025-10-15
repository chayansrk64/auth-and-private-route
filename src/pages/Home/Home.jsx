import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {
    const user = use(AuthContext)
    console.log('user form home', user);
    return (
        <div>
            home page
        </div>
    );
};

export default Home;