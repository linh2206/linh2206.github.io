import React, { Component } from 'react';
import TestSwr from '../testswr/TestSwr';
import Acquisition from './api/Acquisition/acquisition';
import PageView from './api/PageViews/pageView';
import Session from './api/Sessions/session';
import SessionByChannel from './api/SessionsbyChannel/sessionByChanel';
import AudienceMetric from './api/audienceMetrics/audienceMetrics';
import UserVisit from './api/usersVisit/userVisit';


export class Dashboard extends Component {

    state = {
        date: ""
    };

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (!token) {
            this.props.history.push('/general-pages/signin')
        }
        this.getDate();
    }

    getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
    };

    toggleProBanner() {
        document.querySelector('.proBanner').classList.toggle("hide");
    }

    render() {
        return (
            <div>
                <div className="proBanner">
                    <div>
                        {/* <span className="d-flex align-items-center purchase-popup">
                            <p className="m-0">Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
                            <a href="https://www.bootstrapdash.com/product/azia-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary ml-auto">Check Pro Version</a>
                            <i className="typcn typcn-delete-outline bannerClose" onClick={this.toggleProBanner}></i>
                        </span> */}
                    </div>
                </div>
                <div className="container p-md-0">
                    <div className="az-content-body">
                        <div className="az-dashboard-one-title">
                            <div>
                                <h2 className="az-dashboard-title">Hi, welcome back!</h2>
                                {/* <TestSwr /> */}
                                <p className="az-dashboard-text">Your web analytics dashboard template.</p>
                            </div>
                            <div className="az-content-header-right">
                                <div className="media">
                                    <div className="media-body">
                                        <label>Start Date</label>
                                        <h6>{(this.state.date)}</h6>
                                    </div>{/* media-body */}
                                </div>{/* media */}
                                <div className="media">
                                    <div className="media-body">
                                        <label>End Date</label>
                                        <h6>{(this.state.date)}</h6>
                                    </div>{/* media-body */}
                                </div>{/* media */}
                                <a href="#/" className="btn btn-purple">Export</a>
                            </div>
                        </div>{/* az-dashboard-one-title */}

                        <div className="az-dashboard-nav">
                            <nav className="nav">
                                <a className="nav-link active" data-toggle="tab" href="#/">Overview</a>
                                <a className="nav-link" data-toggle="tab" href="#/">Audiences</a>
                                <a className="nav-link" data-toggle="tab" href="#/">Demographics</a>
                                <a className="nav-link" data-toggle="tab" href="#/">More</a>
                            </nav>

                            <nav className="nav">
                                <a className="nav-link" href="#/"><i className="far fa-save"></i> Save Report</a>
                                <a className="nav-link" href="#/"><i className="far fa-file-pdf"></i> Export to PDF</a>
                                <a className="nav-link" href="#/"><i className="far fa-envelope"></i>Send to Email</a>
                                <a className="nav-link" href="#/"><i className="fas fa-ellipsis-h"></i></a>
                            </nav>
                        </div>

                        <AudienceMetric />

                        <div className="row row-sm mg-b-20">
                            <PageView />
                            <SessionByChannel />
                        </div>{/* row */}

                        <div className="row row-sm mg-b-20 mg-lg-b-0">
                            <div className="col-lg-5 col-xl-4">
                                <div className="row row-sm">
                                    <Acquisition />
                                    <Session />
                                </div>{/* row */}
                            </div>{/* col-lg-3 */}
                            <UserVisit />
                            {/* <TestSwr /> */}
                        </div>{/* row */}
                    </div>{/* az-content-body */}
                </div>
            </div>
        )
    }
}

export default Dashboard
