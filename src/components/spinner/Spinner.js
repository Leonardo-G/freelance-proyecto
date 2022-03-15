import React from 'react';

import "./Spinner.scss"

export const Spinner = () => {
    return (
        <div className='cargando'>
            <div className="lds-roller absolute">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
