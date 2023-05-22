import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useSwr from '../../../../services/useSwr';



const UserVisit = (props) => {

    const user = useSwr('users');
    const dataUser = user?.data?.data;
    var icon = '';
    return (
        <div className="col-lg-7 col-xl-8 mg-t-20 mg-lg-t-0">
            <div className="card card-table-one">
                <h6 className="card-title">Top Geography Statistics</h6>
                <p className="az-content-text mg-b-20">Part of this date range occurs before the new users metric had been calculated, so the old users metric is displayed.</p>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="wd-5p">&nbsp;</th>
                                <th className="wd-45p">Country</th>
                                <th>Entrances</th>
                                <th>Bounce Rate</th>
                                <th>Exits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataUser?.visit?.map((item, index) => {
                                item?.name === 'Vietnam' ? icon = 'flag-icon flag-icon-vn flag-icon-squared' :
                                    item?.name === 'United States' ? icon = 'flag-icon flag-icon-us flag-icon-squared' :
                                        item?.name === 'singapore' ? icon = 'flag-icon flag-icon-sg flag-icon-squared' :
                                            item?.name === 'Malaysia' ? icon = 'flag-icon flag-icon-my flag-icon-squared' :
                                                item?.name === 'Philippines' ? icon = 'flag-icon flag-icon-ph flag-icon-squared' :
                                                    item?.name === 'Canada' ? icon = 'flag-icon flag-icon-ca flag-icon-squared' :
                                                        icon = 'flag-icon flag-icon-gb flag-icon-squared'
                                return (
                                    <tr>
                                        <td><i className={icon}></i></td>
                                        <td><strong>{item?.name}</strong></td>
                                        <td>{item?.ENTRANCES}</td>
                                        <td>{item?.BOUNCERATE}</td>
                                        <td>{item?.exit}</td>
                                    </tr>
                                )
                            })}
                            {/* <tr>
                                <td><i className="flag-icon flag-icon-us flag-icon-squared"></i></td>
                                <td><strong>United States</strong></td>
                                <td><strong>134</strong> (1.51%)</td>
                                <td>33.58%</td>
                                <td>15.47%</td>
                            </tr>
                            <tr>
                                <td><i className="flag-icon flag-icon-gb flag-icon-squared"></i></td>
                                <td><strong>United Kingdom</strong></td>
                                <td><strong>290</strong> (3.30%)</td>
                                <td>9.22%</td>
                                <td>7.99%</td>
                            </tr>
                            <tr>
                                <td><i className="flag-icon flag-icon-in flag-icon-squared"></i></td>
                                <td><strong>India</strong></td>
                                <td><strong>250</strong> (3.00%)</td>
                                <td>20.75%</td>
                                <td>2.40%</td>
                            </tr>
                            <tr>
                                <td><i className="flag-icon flag-icon-ca flag-icon-squared"></i></td>
                                <td><strong>Canada</strong></td>
                                <td><strong>216</strong> (2.79%)</td>
                                <td>32.07%</td>
                                <td>15.09%</td>
                            </tr>
                            <tr>
                                <td><i className="flag-icon flag-icon-fr flag-icon-squared"></i></td>
                                <td><strong>France</strong></td>
                                <td><strong>216</strong> (2.79%)</td>
                                <td>32.07%</td>
                                <td>15.09%</td>
                            </tr>
                            <tr>
                                <td><i className="flag-icon flag-icon-ph flag-icon-squared"></i></td>
                                <td><strong>Philippines</strong></td>
                                <td><strong>197</strong> (2.12%)</td>
                                <td>32.07%</td>
                                <td>15.09%</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>{/* table-responsive */}
            </div>{/* card */}
        </div>

    )
};
export default UserVisit;