import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';
import { useEffect, useState } from 'react';



const AudienceMetric = (props) => {

    const user = useSwr('users');
    const bounceRate = useSwr('bounce-rate');
    const pageView = useSwr('page-view');
    const session = useSwr('sessions');
    const [dataUser, setDataUser] = useState();
    const [dataBounceRate, setDataBounceRate] = useState();
    const [dataPageView, setDataPageView] = useState();
    const [dataSession, setDataSession] = useState();
    useEffect(() => {
        setDataUser(user?.data?.data)
        setDataBounceRate(bounceRate?.data?.data ? bounceRate?.data?.data : {})
        setDataPageView(pageView?.data?.data ? pageView?.data?.data : {})
        setDataSession(session?.data?.data ? session?.data?.data : {})
    })

    const bounceRateChartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'],
        datasets: [{
            data: dataBounceRate?.data,
            borderWidth: 2,
            fill: true,
            backgroundColor: ['rgba(0, 204, 212, .2)'],
            borderColor: ['rgb(0, 204, 212)']
        }]
    };

    const bounceRateChartOptions = {
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    drawBorder: false,
                    display: true,
                    drawTicks: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    min: 0,
                    max: 40,
                    stepSize: 10,
                }
            }],
            xAxes: [{
                display: false,
                position: 'bottom',
                gridLines: {
                    drawBorder: false,
                    display: false,
                    drawTicks: false,
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    fontColor: "#a7afb7",
                    padding: 10,
                }
            }],
        },
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            },
            line: {
                tension: 0
            }
        },
        tooltips: {
            backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    };

    const websiteAudienceChartOptions = {
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    drawBorder: false,
                    display: true,
                    drawTicks: false,
                    color: '#eef0fa',
                    zeroLineColor: 'rgba(90, 113, 208, 0)',
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 22,
                    padding: 10,
                }
            }],
            xAxes: [{
                display: false,
                position: 'bottom',
                gridLines: {
                    drawBorder: false,
                    display: false,
                    drawTicks: false,
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    fontColor: "#a7afb7",
                    padding: 10,
                }
            }],
        },
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            },
            line: {
                tension: 0
            }
        },
        tooltips: {
            backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    };
    const websiteAudienceChartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
            '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99',
            '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
        datasets: [{
            label: 'This week',
            data: dataUser?.data?.lastWeek ? dataUser?.data?.lastWeek : [],
            borderWidth: 2,
            fill: true,
            backgroundColor: ['rgba(255, 255, 255, 1)'],
            borderColor: ['rgb(0, 123, 255)']
        }, {
            label: 'Current week',
            data: dataUser?.data?.currentWeek ? dataUser?.data?.currentWeek : [],
            borderWidth: 2,
            fill: true,
            backgroundColor: ['rgba(86, 11, 208, .05)'],
            borderColor: ['rgb(86, 11, 208)'],
        }]
    };

    const allSessionsChartOptions = {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
                    max: 80
                },
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                barPercentage: 0.6,
                gridLines: {
                    color: 'rgba(0,0,0,0.08)',
                    drawBorder: false
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
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

    const totalUsersChartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: dataUser?.totalUser?.chart,
            borderWidth: 1,
            fill: false,
            backgroundColor: '#007bff',
            borderColor: '#007bff'
        }]
    };

    const totalUsersChartOptions = {
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

    const allSessionsChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: '# of Votes',
            data: dataSession?.data,
            borderWidth: 1,
            fill: false,
            backgroundColor: '#560bd0'
        },
        {
            label: '# of Rate',
            data: dataSession?.data,
            borderWidth: 1,
            fill: false,
            backgroundColor: '#cad0e8'
        }]
    };


    return (
        <div className="row row-sm mg-b-20">
            <div className="col-lg-7 ht-lg-100p">
                <div className="card card-dashboard-one">
                    <div className="card-header">
                        <div>
                            <h6 className="card-title">Website Audience Metrics</h6>
                            <p className="card-text">Audience to which the users belonged while on the current date range.</p>
                        </div>
                        <div className="btn-group">
                            {/* <button className="btn active">Day</button>  */}
                            <button className="btn">Week</button>
                            <button className="btn">Month</button>
                        </div>
                    </div>{/* card-header */}
                    <div className="card-body">
                        <div className="card-body-top">
                            <div>
                                <label className="mg-b-0">Users</label>
                                {/* <AudienceMetricUser /> */}
                                <div>
                                    {dataUser?.currentUser}
                                </div>
                            </div>
                            <div>
                                <label className="mg-b-0">Bounce Rate</label>
                                {/* <AudienceMetricBounceRate />    */}
                                <div>
                                    {dataBounceRate?.current ? dataBounceRate?.current : 0}
                                </div>
                            </div>
                            <div>
                                <label className="mg-b-0">Page Views</label>
                                {/* <AudienceMetricPageViews /> */}
                                <div>
                                    {dataPageView?.total ? dataPageView?.total : 0}
                                </div>
                            </div>
                            <div>
                                <label className="mg-b-0">Sessions</label>
                                {/* <AudienceMetricSessions /> */}
                                <div>
                                    {dataSession?.total ? dataSession?.total : 0}
                                </div>
                            </div>
                        </div>{/* card-body-top */}
                        <div className="page-view-chart-wrapper">
                            <Line data={websiteAudienceChartData} options={websiteAudienceChartOptions} />
                        </div>{/* flot-chart-wrapper */}
                    </div>{/* card-body */}
                </div>{/* card */}
            </div>{/* col */}
            <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                <div className="row row-sm">
                    <div className="col-sm-6">
                        <div className="card card-dashboard-two">
                            <div className="card-header">
                                <h6>{dataBounceRate?.current ? dataBounceRate?.current : 0}<i className="icon ion-md-trending-up tx-success"></i> <small>{dataBounceRate?.ratio ? dataBounceRate?.ratio : 0}</small></h6>
                                <p>Bounce Rate</p>
                            </div>{/* card-header */}
                            <div className="card-body">
                                <div className="chart-wrapper">
                                    <Line data={bounceRateChartData} options={bounceRateChartOptions} />
                                </div>{/* chart-wrapper */}
                            </div>{/* card-body */}
                        </div>{/* card */}
                    </div>{/* col */}
                    <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                        <div className="card card-dashboard-two">
                            <div className="card-header">
                                <h6>
                                    {/* <DashboardTotalUser /> */}
                                    {dataUser?.totalUser?.value ? dataUser?.totalUser?.value : 0}
                                    <i className="icon ion-md-trending-down tx-danger"></i>
                                    <small>{dataUser?.ratio ? dataUser?.ratio : 0} </small>
                                </h6>
                                <p>Total </p>
                            </div>{/* card-header */}
                            <div className="card-body">
                                <div className="chart-wrapper">
                                    <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                                </div>{/* chart-wrapper */}
                            </div>{/* card-body */}
                        </div>{/* card */}
                    </div>{/* col */}
                    <div className="col-sm-12 mg-t-20">
                        <div className="card card-dashboard-three">
                            <div className="card-header">
                                <p>All Sessions</p>
                                <h6>{dataSession?.total ? dataSession?.total : 0} <small className="tx-success"><i className="icon ion-md-arrow-up"></i> {dataSession?.ratio ? dataSession?.ratio : 0}</small></h6>
                                <small>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</small>
                            </div>{/* card-header */}
                            <div className="card-body">
                                <div className="chart d-flex align-items-end">
                                    <Bar data={allSessionsChartData} options={allSessionsChartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* row */}
            </div>
        </div>
    )
};
export default AudienceMetric;