import React from "react";
import categorysvg from '../imgs/category.svg'
import weeksvg from '../imgs/week.svg'
//import {weeksvg} from '../imgs/ExportSvg';

const InputTodo = () => {
    return (
        <div className="InputTodo">
            <input type='text' placeholder="입려어어억ㄱ"></input>
            <img src={categorysvg} width="13px"/>&nbsp;&nbsp;&nbsp;
            <img src={weeksvg} width="17px" fill='white' />
        </div>
    )
}

export default InputTodo;