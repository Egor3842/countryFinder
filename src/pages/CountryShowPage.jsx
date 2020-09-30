import React from 'react';
import SearchInput from '../Elements/SearchInput';
import s from '../assests/styles/CountryShowPage.module.css'
import Selector from '../Elements/Selector';
import Countrytable from '../Components/CountryTable';
import TotalAmount from '../Elements/TotalAmount';

const CountryShowPage = () => {
    return ( 
        <div className = {s.container}>
            <div className = {s.searchParams}>
            <SearchInput/>
            <Selector/>
            <TotalAmount/>
            </div>
            <Countrytable/>

        </div>
    )
}

export default CountryShowPage