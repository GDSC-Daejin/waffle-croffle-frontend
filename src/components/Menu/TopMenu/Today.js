import React from "react";
import '../../../styles/pages.css'
import InputTodo from "../../InputTodo";
// import '../styles/pages.css'

const Today = () => {
    return (
        <div className="page" id="today">
            <h1>Today</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.
            </p>
            <InputTodo></InputTodo>
        </div>
    )
}

export default Today;