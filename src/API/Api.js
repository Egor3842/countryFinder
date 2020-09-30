import * as axios from 'axios'

export const MainApi = {
    TakeCountryData(finderText){
        return axios.get(`https://restcountries.eu/rest/v2/name/${finderText}?fields=name;capital;region;population;flag`)
          .then(response => {
            return response.data
          })
      }
} 