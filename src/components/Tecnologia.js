import React from 'react'

export const Tecnologia = ({ tecnologia }) => {
    return (
        <div className='caja__iconos'>
            {
                tecnologia.map( (t, idx) => (
                    <img key={ idx } src={ t.src } alt={ t.alt }/>
                ))
            }
        </div>
    )
}
