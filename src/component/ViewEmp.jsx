import React, { useEffect, useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { listContext } from "../App";

const ViewEmp = () => {

    const { employeeList, setEmployeeList } = useContext(listContext);
    const [viewData, setViewData] = useState("");

    const { id } = useParams();

    useEffect(() => {

        if (id) {
            const filtered = employeeList?.filter((_, index) => index + 1 == id);
            setViewData(filtered[0]);
        }

    }, [id]);


    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-12 px-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h4>View Employee Details</h4>
                            <NavLink to="/add" className="btn btn-primary">Create New</NavLink>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row row-gap-3">
                                    <div className="col-3">
                                        <label htmlFor="">Employee Name</label>
                                        <input value={viewData?.empName} name="empName" type="text" placeholder="Employee Name" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Employee ID</label>
                                        <input value={viewData?.empId} name="empId" type="text" placeholder="Employee ID" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Designation</label>
                                        <input value={viewData?.empDesignation} name="empDesignation" type="text" placeholder="Designation" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Email</label>
                                        <input value={viewData?.empEmail} name="empEmail" type="email" placeholder="Email" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Education</label>
                                        <input value={viewData?.empEducation} name="empEducation" type="text" placeholder="Education" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Address</label>
                                        <input value={viewData?.empAddress} name="empAddress" type="text" placeholder="Address" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Salary</label>
                                        <input value={viewData?.empSalary} name="empSalary" type="text" placeholder="Salary" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Joining Date</label>
                                        <input value={viewData?.empJoiningDate} name="empJoiningDate" type="text" placeholder="" className="form-input" disabled />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Performance</label>
                                        <input value={viewData?.empPerformance} name="empPerformance" type="text" placeholder="" className="form-input" disabled />
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEmp;