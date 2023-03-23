/* import React , { useState } from 'react' */

const Alert = ({ color , children }) => {

    return (

        <div>
            <div className={`alert alert-${color} alert-dismissible fade show container col-6 mt-2`} role="alert">
                <strong>{children}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
        

    )
};

export default Alert;