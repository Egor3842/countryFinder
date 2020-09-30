import React from 'react'
import s from '../assests/styles/Elements.module.css'
import { PopulationNumber } from '../utils/PopulationParse'

const CountryDescription = (props) => {
        
    return (
        <tr>
            <td>{props.id + 1}</td>
            <td>{props.name}</td>
            <td>{props.capital ? props.capital : 'unspecified'}</td>
            <td>{props.region}</td>
            <td>{PopulationNumber(props.population)}</td>
            <td><img className = {s.CountryDescription} alt = {props.name} src={props.flag} /></td>
        </tr>
    )
}
export default CountryDescription