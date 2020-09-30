import React, { useContext, useRef } from 'react'
import { MainApi } from '../API/Api';
import s from '../assests/styles/Elements.module.css'
import { SetCountryInfo,SetError, Context,SetFetching, SetCurrentFinderAmount } from '../Context/Context';

const Selector = () => {
    const StateContext = useContext(Context);
    const Get_Data = async()=> {
        try{
           StateContext.dispatch(SetFetching(true))
           StateContext.dispatch(SetError(false))
           let response = await MainApi.TakeCountryData(StateContext.state.finderText)
           StateContext.dispatch(SetCountryInfo(response))
           StateContext.dispatch(SetFetching(false))
        }
        catch{
            StateContext.dispatch(SetFetching(false))
           StateContext.dispatch(SetError(true))
        }
       
   }
   
    const setValue =(currentFinderAmount)=>{
        StateContext.dispatch(SetCurrentFinderAmount(currentFinderAmount))
        Get_Data()
    };
    let selectRef = useRef();
        let AllOptions = StateContext.state.finderAmount.map(x=><option key = {x} value = {x}>{x}</option>)
    return (
        <div className = {s.selector}>
            <div>Show</div>
        <select  ref={selectRef} onChange={()=>setValue(selectRef.current.value)}>
            {AllOptions}
        </select>
        <div>elements</div>
        </div>
    )
}
export default Selector