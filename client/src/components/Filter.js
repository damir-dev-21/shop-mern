import React from 'react'

export const Filter = ({value,active,changeC}) => {
    return(
        <label>
            <input type="checkbox" checked={active} data-value={value} onChange={changeC}/>
            {value}
        </label>
    )
}