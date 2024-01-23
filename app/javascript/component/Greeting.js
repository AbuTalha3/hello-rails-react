import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  fetchGreeting  from '../redux/thunk';

function Greeting () {
    const  greeting  = useSelector((store) => store.greeting.greeting);
    const  isLoading  = useSelector((store) => store.greeting.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Random Greeting :</h1>
            <p>{ greeting }</p>
        </div>
    );
}

export default Greeting;