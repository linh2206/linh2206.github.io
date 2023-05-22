import React from 'react';
import useSwr from '../../services/useSwr';


const TestSwr = (props) => {
    const { data } = useSwr('users')
    console.log('LOG ~ TestSwr ~ data:', data);
    return <div >
        {
            JSON.stringify(data)
        }
    </div>;
};
export default TestSwr;