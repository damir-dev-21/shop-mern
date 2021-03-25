import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory,allProducts } from '../redux/actions/products'

import { Filter } from './Filter'

export const Category = () =>{

    const [check,setCheck] = useState(false)

    let category = [
        {value:'Men',check:false,id:0},
        {value:'Women',check:false,id:1},
        {value:'Child',check:false,id:2},
    ]

    const dispatch = useDispatch()

    const changeCategory = (value,id) => {
        // let item = category.find(i=>i.id === id)
        // item.check = true
        // console.log(item);
        category.forEach(i=>{
            if(i.id === id){
                i.check = true
                return i
            }else{
                i.check = false
                return i
            }
        })
        dispatch(setCategory(value))
    }

    const defaultProducts = () => {
        dispatch(allProducts())
    }

    return(
        <div className="category-screen">
                <div className="category-screen__body container">
                    <div className="category-screen__left">
                        <form>
                            {category.map(i=>{
                                return(
                                    <Filter
                                        value={i.value}
                                        
                                        active={i.check}
                                        changeC={()=>changeCategory(i.value,i.id)}
                                    />
                                )
                            })}

                            {/* <Filter value="Men"  changeC={()=>changeCategory('Men')}/> */}
                            {/* <input type="checkbox" id="men"/>
                            <label for="men">Men</label> */}
                            {/* <input type="checkbox" id="women"/>
                            <label for="women">Women</label>
                            <input type="checkbox" id="child"/>
                            <label for="child">Children</label> */}
                        </form>
                    </div>
                    <div className="category-screen__right">
                        <button onClick={defaultProducts}>
                            see all products
                        </button>
                    </div>
                </div>
            </div>
    )
}