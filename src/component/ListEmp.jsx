import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { listContext } from "../App";

const ListEmp = () => {

    //const context = useContext(listContext);
    const { employeeList, setEmployeeList } = useContext(listContext);
    //console.log('context',context);
    console.log(employeeList);

    const navigate = useNavigate();

    const handleView = (index) => {
        navigate(`/view/${index + 1}`);
    }

    const handleDelete = (deleteIndex) => {
        const afterDelete = employeeList?.filter((_, index) => index !== deleteIndex);
        setEmployeeList(afterDelete);
    }

    const handleEdit = (emp, index) => {
        navigate("/add", { state: { data: emp, ind: index } });
    }

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-12 px-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h4>List Employee</h4>
                            <NavLink to="/add" className="btn btn-primary">Create New</NavLink>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Sr No</th>
                                        <th scope="col" className="text-center">Name</th>
                                        <th scope="col" className="text-center">ID</th>
                                        <th scope="col" className="text-center">Email</th>
                                        <th scope="col" className="text-center">Education</th>
                                        <th scope="col" className="text-center">Designation</th>
                                        <th scope="col" className="text-center">Joining Date</th>
                                        <th scope="col" className="text-center">Performance</th>
                                        <th scope="col" className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employeeList?.map((employee, index) => {
                                        return (
                                            <tr key={index + 1}>
                                                <td className="text-center">{index + 1}</td>
                                                <td className="text-center">{employee?.empName}</td>
                                                <td className="text-center">{employee?.empId}</td>
                                                <td className="text-center">{employee?.empEmail}</td>
                                                <td className="text-center">{employee?.empEducation}</td>
                                                <td className="text-center">{employee?.empDesignation}</td>
                                                <td className="text-center">{employee?.empJoiningDate}</td>
                                                <td className="text-center">{employee?.empPerformance}</td>
                                                <td className="text-center">
                                                    <i className="fa-regular fa-eye pe-2 text-primary text-primary pointer" onClick={() => handleView(index)}></i>
                                                    <i className="fa-solid fa-pen-to-square  pe-2 text-success pointer" onClick={() => handleEdit(employee, index)}></i>
                                                    <i className="fa-solid fa-trash pe-2 text-danger pointer" onClick={() => handleDelete(index)}></i>

                                                </td>
                                            </tr>
                                        );

                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListEmp;