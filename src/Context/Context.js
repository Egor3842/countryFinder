import React from 'react'
import { IS_FETCHING, SET_COUNTRY_INFO, SET_CURRENT_FINDER_AMOUNT, SET_ERROR_QUERY, SET_FINDER_TEXT } from './ActionTypes';

export const initialState = {
    isFetching: false,
    finderText: '',
    finderAmount: [10, 20, 50],
    currentFinderAmount: 10,
    countryInfo: [],
    TotalCountryAmount:null,
    isErrorQuery: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_COUNTRY_INFO: {
            let newCountryArray = []
            for (let i = 0; i < state.currentFinderAmount; i++) {
                if (action.countryInfo[i]){
                    newCountryArray.push(action.countryInfo[i])
                }
            }
            return { ...state, countryInfo: [...newCountryArray], TotalCountryAmount:action.countryInfo.length }
        }
        case SET_CURRENT_FINDER_AMOUNT: {
            console.log(action.currentFinderAmount)
            return { ...state, currentFinderAmount: action.currentFinderAmount }
        }
        case SET_FINDER_TEXT:{
            return {...state, finderText:action.finderText}
        }
        case SET_ERROR_QUERY:{
            return {...state,isErrorQuery:action.isErrorQuery}
        }
        default:
            return state
    }
}
export const SetCountryInfo = (countryInfo) => ({type:SET_COUNTRY_INFO, countryInfo})
export const SetError = (isErrorQuery) => ({type: SET_ERROR_QUERY, isErrorQuery})
export const SetFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const SetCurrentFinderAmount = (currentFinderAmount) => ({type:SET_CURRENT_FINDER_AMOUNT, currentFinderAmount})
export const SetTextFinder = (finderText) => ({type:SET_FINDER_TEXT,finderText})
export const Context = React.createContext()




