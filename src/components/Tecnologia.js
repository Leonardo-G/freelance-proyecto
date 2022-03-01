import React from 'react'

export const Tecnologia = ({ tecnologia, anchoVentana }) => {
    return (
        <div 
            className='caja__iconos' 
            style={{ "width": ` ${ anchoVentana === null ? "ancho-iconos" : (anchoVentana < 540) ? `${anchoVentana - 50}px` : `${anchoVentana - 100}px` }` }}>
            {
                tecnologia.map( (t, idx) => (
                    <img key={ idx } src={ t.src } alt={ t.alt }/>
                ))
            }
        </div>
    )
}
