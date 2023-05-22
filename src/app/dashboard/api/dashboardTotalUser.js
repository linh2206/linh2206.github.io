import React from 'react';
import useSwr from '../../../services/useSwr';


const DashboardTotalUser = (props) => {
    const { data } = useSwr('users')
    console.log('LOG ~ TestSwr ~ data:', data);
    return <div >
        {
            JSON.stringify(data?.data?.id)
        }
    </div>;
};
export default DashboardTotalUser;