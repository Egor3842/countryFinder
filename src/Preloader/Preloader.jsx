import React from 'react'
import preloader from '../assests/img/preloader.gif'
import s from '../assests/styles/Preloader.module.css'

const Preloader = () => {
    return (
        <div className = {s.container}>
            <img alt = '' src = {preloader}/>
        </div>
    )
}
export default Preloader