import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";


const AddEmp = () => {

    const { employeeList, setEmployeeList } = useContext(listContext);
    const [isUpdate, setIsUpdating] = useState(false);
    const navigate = useNavigate();

    //const context = useContext(listContext);
    // console.log('context', employeeList);

    

    const { state } = useLocation();

    console.log("location", state);

    const [formValue, setFormValue] = useState({
        empName: "",
        empId: "",
        empDesignation: "",
        empEmail: "",
        empEducation: "",
        empAddress: "",
        empSalary: "",
        empJoiningDate: "",
        empPerformance: "Normal",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isUpdate) {
            setEmployeeList([...employeeList, formValue]);
            setFormValue({
                empName: "",
                empId: "",
                empDesignation: "",
                empEmail: "",
                empEducation: "",
                empAddress: "",
                empSalary: "",
                empJoiningDate: "",
                empPerformance: "Normal",
            });
            navigate("/");
        } else {
            const updating = employeeList?.map((item, index) => {
                return index === state?.ind ? { ...item, ...formValue } : item
            });
            setEmployeeList(updating);
            setIsUpdating(false);
            navigate("/");
            console.log("updating", updating);

        }


    }

    useEffect(() => {
        if (state?.data) {
            setIsUpdating(true);
            setFormValue({ ...state?.data });
        }

    }, [state?.data]);


    console.log("Employee List", employeeList);

    let submitBtnTXT = "Submit";
    let pageTitle = "Add Employee";
    if(isUpdate){
        submitBtnTXT = "Update";
        pageTitle = "Update Employee";
    }


    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>{pageTitle}</h4>

                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row row-gap-3">
                                    <div className="col-3">
                                        <label htmlFor="">Employee Name</label>
                                        <input onChange={handleChange} value={formValue?.empName} name="empName" type="text" placeholder="Employee Name" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Employee ID</label>
                                        <input onChange={handleChange} value={formValue?.empId} name="empId" type="text" placeholder="Employee ID" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Designation</label>
                                        <input onChange={handleChange} value={formValue?.empDesignation} name="empDesignation" type="text" placeholder="Designation" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Email</label>
                                        <input onChange={handleChange} value={formValue?.empEmail} name="empEmail" type="email" placeholder="Email" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Education</label>
                                        <input onChange={handleChange} value={formValue?.empEducation} name="empEducation" type="text" placeholder="Education" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Address</label>
                                        <input onChange={handleChange} value={formValue?.empAddress} name="empAddress" type="text" placeholder="Address" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Salary</label>
                                        <input onChange={handleChange} value={formValue?.empSalary} name="empSalary" type="text" placeholder="Salary" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Joining Date</label>
                                        <input onChange={handleChange} value={formValue?.empJoiningDate} name="empJoiningDate" type="date" placeholder="Salary" className="form-input" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Performance</label>
                                        <select onChange={handleChange} value={formValue?.empPerformance} name="empPerformance" id="" className="form-input custom-select">
                                            <option value="Normal">Normal</option>
                                            <option value="Average">Average</option>
                                            <option value="Excellent">Excellent</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-end">
                                        <button className="btn btn-primary" type="submit">{submitBtnTXT}</button>
                                        </div>
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

export default AddEmp;