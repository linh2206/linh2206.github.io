import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';
import { useEffect } from 'react';



const SessionByChannel = (props) => {

    const sessions = useSwr('sessions');
    const dataSession = sessions?.data?.data;
    var color = '';

    const SessionChart = [];

    const data = dataSession?.sessionsByChannel?.map((item) => {
        SessionChart.push(item.percent.substring(0, item.percent.length - 1))

    });

    const sessionsChannelChartData = {
        labels: ['RootPage', 'Crossed Rederal', 'Calendar Reminder'],
        datasets: [{
            data: SessionChart,
            backgroundColor: ['#6f42c1', '#007bff', '#17a2b8', '#28a745', '#ffc107'],
        }]
    };

    const sessionsChannelChartOptions = {
        cutoutPercentage: 50,
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

    return (
        <div className="col-lg-8 mg-t-20 mg-lg-t-0">
            <div className="card card-dashboard-four">
                <div className="card-header">
                    <h6 className="card-title">Succeeded purchased by channel</h6>
                </div>{/* card-header */}
                <div className="card-body row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="chart">
                            <Pie data={sessionsChannelChartData} options={sessionsChannelChartOptions} />
                        </div>
                    </div>{/* col */}
                    <div className="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
                        {
                            dataSession?.sessionsByChannel && (dataSession?.sessionsByChannel)?.map((item, index) => {
                                color = 'progress-bar bg-' + (index === 0 ? 'purple' : index === 1 ? 'primary' : index === 2 ? 'teal' : index === 3 ? 'gray-500' : 'info') + ' wd-25p'
                                return (
                                    <div className="az-traffic-detail-item">
                                        <div>
                                            <span>{item.name}</span>
                                            <span>{item?.total} <span>({item?.percent})</span></span>
                                        </div>

                                        <div className="progress">
                                            <div className={color} role="progressbar" aria-valuenow={item?.percent} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        {/* <div className="az-traffic-detail-item">
                            <div>
                                <span>Organic Search</span>
                                <span><OrganicSearch /> <span>(25%)</span></span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-purple wd-25p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="az-traffic-detail-item">
                            <div>
                                <span>Email</span>
                                <span><Email /> <span>(20%)</span></span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-primary wd-20p" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="az-traffic-detail-item">
                            <div>
                                <span>Referral</span>
                                <span><Referral /> <span>(30%)</span></span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info wd-30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="az-traffic-detail-item">
                            <div>
                                <span>Social</span>
                                <span><Social /> <span>(15%)</span></span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-teal wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="az-traffic-detail-item">
                            <div>
                                <span>Other</span>
                                <span><Other /> <span>(10%)</span></span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-gray-500 wd-10p" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div> */}
                    </div>{/* col */}
                </div>{/* card-body */}
            </div>{/* card-dashboard-four */}
        </div>
    )
}
export default SessionByChannel;