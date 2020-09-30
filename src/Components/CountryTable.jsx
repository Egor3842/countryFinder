import React, { useContext } from 'react'
import { Context } from '../Context/Context';
import s from '../assests/styles/Countrytable.module.css'
import CountryDescription from '../Elements/CountryDescription';
import Preloader from '../Preloader/Preloader';

const Countrytable = () => {
    const StateContext = useContext(Context);
    const AllSearchValue = StateContext.state.countryInfo.map((x,key)=> <CountryDescription key = {x.name}
        id = {key}    name = {x.name} capital = {x.capital} region = {x.region} population = {x.population} flag = {x.flag}/>)
        if (StateContext.state.isFetching) return <div className = {s.Notification}><Preloader/></div>
        if (!StateContext.state.finderText) return <div  className = {s.Notification}>Start search</div> 
        if (StateContext.state.isErrorQuery) return <div  className = {s.Notification}>No countries found for this query</div>
    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Flag</th>
                </tr>
            </thead>
            <tbody>
                {AllSearchValue}
            </tbody>
        </table>
       
    )
}
export default Countrytable
