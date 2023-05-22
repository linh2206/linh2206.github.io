import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';



const Acquisition = (props) => {

    const acquisitionChart1Data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            data: [4, 2.5, 5, 3, 5],
            borderWidth: 1,
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff'
        }]
    };

    const acquisitionChart1Options = {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawBorder: false,
                    display: false
                }
            }],
            xAxes: [{
                display: false,
                barThickness: 5.5,
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawBorder: false,
                    display: false
                }
            }]

        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };

    const acquisitionChart2Data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            data: [5, 2, 3, 5, 1.5],
            borderWidth: 1,
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff'
        }]
    };

    const acquisitionChart2Options = {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawBorder: false,
                    display: false
                }
            }],
            xAxes: [{
                display: false,
                barThickness: 5.5,
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawBorder: false,
                    display: false
                }
            }]

        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };

    const bounceRate = useSwr('bounce-rate');
    const dataBounceRate = bounceRate?.data?.data;
    const sessions = useSwr('sessions');
    const dataSessions = sessions?.data?.data;


    return (
        <div className="col-md-6 col-lg-12 mg-b-20 mg-md-b-0 mg-lg-b-20">
            <div className="card card-dashboard-five">
                <div className="card-header">
                    <h6 className="card-title">Acquisition</h6>
                    <span className="card-text">Tells you where your visitors originated from, such as search engines, social networks or website referrals.</span>
                </div>{/* card-header */}
                <div className="card-body row row-sm">
                    <div className="col-6 d-sm-flex align-items-center">
                        <div className="card-chart bg-primary acquisition-chart">
                            <Bar className="w-50" data={acquisitionChart1Data} options={acquisitionChart1Options} />
                        </div>
                        <div>
                            <label>Bounce Rate</label>
                            <h4>
                                {dataBounceRate?.current ? dataBounceRate?.current : 0}
                            </h4>
                        </div>
                    </div>{/* col */}
                    <div className="col-6 d-sm-flex align-items-center">
                        <div className="card-chart bg-purple acquisition-chart">
                            <Bar data={acquisitionChart2Data} options={acquisitionChart2Options} />
                        </div>
                        <div>
                            <label>Sessions</label>
                            <h4>{dataSessions?.total ? dataSessions?.total : 0}</h4>
                        </div>
                    </div>{/* col */}
                </div>{/* card-body */}
            </div>{/* card-dashboard-five */}
        </div>
    )
};
export default Acquisition;