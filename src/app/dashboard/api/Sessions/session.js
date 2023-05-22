import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';



const Session = (props) => {

    const sessionsChart1Data = {
        labels: ['Search', 'Email'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#007bff', '#cad0e8'],
            borderColor: ['#007bff', '#cad0e8'],
        }]
    };

    const sessionsChart1Options = {
        cutoutPercentage: 78,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    const sessionsChart2Data = {
        labels: ['Search', 'Email'],
        datasets: [{
            data: [25, 75],
            backgroundColor: ['#00cccc', '#cad0e8'],
            borderColor: ['#00cccc', '#cad0e8']
        }]
    };

    const sessionsChart2Options = {
        cutoutPercentage: 78,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    const sessions = useSwr('sessions');
    const dataSessions = sessions?.data?.data;

    return (
        <div className="col-md-6 col-lg-12">
            <div className="card card-dashboard-five">
                <div className="card-header">
                    <h6 className="card-title">Sessions</h6>
                    <span className="card-text"> A session is the period time a user is actively engaged with your website, app, etc.</span>
                </div>{/* card-header */}
                <div className="card-body row row-sm">
                    <div className="col-6">
                        <div className="d-sm-flex align-items-center">
                            <div className="mg-b-10 mg-sm-b-0 mg-sm-r-10 wd-50 ht-40">
                                <Pie data={sessionsChart1Data} options={sessionsChart1Options} />
                            </div>
                            <div>
                                <label>% New Sessions</label>
                                <h4>{dataSessions?.newSession ? dataSessions?.newSession : 0}</h4>
                            </div>
                        </div>
                    </div>{/* col */}
                    <div className="col-6">
                        <div className="d-sm-flex align-items-center">
                            <div className="mg-b-10 mg-sm-b-0 mg-sm-r-10 wd-50 ht-40">
                                <Pie data={sessionsChart2Data} options={sessionsChart2Options} />
                            </div>
                            <div>
                                <label>Pages/Session</label>
                                <h4>{dataSessions?.pagePerSession ? dataSessions?.pagePerSession : 0}</h4>
                            </div>
                        </div>
                    </div>{/* col */}
                </div>{/* card-body */}
            </div>{/* card-dashboard-five */}
        </div>
    )
};
export default Session;