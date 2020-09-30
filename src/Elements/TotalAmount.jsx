import React, { useContext } from 'react'
import { Context } from '../Context/Context';
import s from '../assests/styles/Elements.module.css';

const TotalAmount = () => {
    const StateContext = useContext(Context);
    if (StateContext.state.TotalCountryAmount && StateContext.state.finderText && 
        !StateContext.state.isErrorQuery && !StateContext.state.isFetching )  {
        return <div className = {s.TotalAmount}>Total search results found:{StateContext.state.TotalCountryAmount} </div>
    }
    return null
}
export default TotalAmount