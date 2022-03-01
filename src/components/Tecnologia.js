import React from 'react'

export const Tecnologia = ({ tecnologia, anchoVentana }) => {
    return (
        <div className='caja__iconos' style={{ "width": ` ${ anchoVentana !== null ? `${anchoVentana - 100}px` : "1050px" }` }}>
            {
                tecnologia.map( (t, idx) => (
                    <img key={ idx } src={ t.src } alt={ t.alt }/>
                ))
            }
        </div>
    )
}
