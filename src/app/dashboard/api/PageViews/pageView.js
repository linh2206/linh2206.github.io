import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';


const PageView = (props) => {

    const pageView = useSwr('page-view');
    const dataPageView = pageView?.data?.data;
    return (
        <div className="col-lg-4">
            <div className="card card-dashboard-pageviews">
                <div className="card-header">
                    <h6 className="card-title">Current Activated Campaigns</h6>
                    <p className="card-text">The number are summarised from client side</p>
                </div>{/* card-header */}
                <div className="card-body">

                    {dataPageView?.detail?.map((item, index) => {
                        return (
                            <div className="az-list-item">
                                <div key={index}>
                                    <h6>{item?.name}</h6>
                                    <span>{item?.link}</span>
                                </div>
                                <div key={index}>
                                    <h6 className="tx-primary">{item?.total}</h6>
                                    <span>{item?.percent}</span>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div>
                            <h6>Admin Home</h6>
                            <span>/demo/admin/index.html</span>
                        </div>
                        <div>
                            <h6 className="tx-primary"><AdminHome /></h6>
                            <span>31.74% (-100.00%)</span>
                        </div> */}

                    {/* <div className="az-list-item">
                        <div>
                            <h6>Form Elements</h6>
                            <span>/demo/admin/forms.html</span>
                        </div>
                        <div>
                            <h6 className="tx-primary"><FormElements /></h6>
                            <span>28.53% (-100.00%)</span>
                        </div>
                    </div>{/* list-group-item */}
                    {/* <div className="az-list-item">
                        <div>
                            <h6>Utilities</h6>
                            <span>/demo/admin/util.html</span>
                        </div>
                        <div>
                            <h6 className="tx-primary"><Utilities /></h6>
                            <span>25.35% (-100.00%)</span>
                        </div>
                    </div>
                    <div className="az-list-item">
                        <div>
                            <h6>Form Validation</h6>
                            <span>/demo/admin/validation.html</span>
                        </div>
                        <div>
                            <h6 className="tx-primary"><FormValidation /></h6>
                            <span>23.17% (-100.00%)</span>
                        </div>
                    </div>
                    <div className="az-list-item">
                        <div>
                            <h6>Modals</h6>
                            <span>/demo/admin/modals.html</span>
                        </div>
                        <div>
                            <h6 className="tx-primary"><Modals /></h6>
                            <span>22.21% (-100.00%)</span>
                        </div>
                    </div> */}
                </div>{/* card-body */}
            </div>{/* card */}

        </div>
    )
};
export default PageView;