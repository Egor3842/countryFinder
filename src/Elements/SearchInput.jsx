import React, { useContext } from 'react'
import { SetCountryInfo,SetError, Context,SetFetching, SetTextFinder } from '../Context/Context';
import { MainApi } from '../API/Api';
import s from '../assests/styles/Elements.module.css';


const SearchInput = () => {
    const StateContext = useContext(Context);

     const Get_Data = async(finderText)=> {
         try{
            StateContext.dispatch(SetFetching(true))
            StateContext.dispatch(SetError(false))
            let response = await MainApi.TakeCountryData(finderText)
            StateContext.dispatch(SetCountryInfo(response))
            StateContext.dispatch(SetFetching(false))
         }
         catch{
            StateContext.dispatch(SetFetching(false))
            StateContext.dispatch(SetError(true))
         }
        
    }
    
    const SetNewTextCountry = (e)=>{
        let finderText = e.target.value;
        StateContext.dispatch(SetTextFinder(finderText))
        Get_Data(finderText)
    }

    return ( 
            <div className = {s.SearchInput}>
            <input placeholder = {'Find country...'} value = {StateContext.state.finderText} onChange={SetNewTextCountry}/>
        </div>
    )
}

export default SearchInput 