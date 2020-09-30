import { reducer, SetCountryInfo } from "./Context";


it('add countries', () => {
    let state={countryInfo:[],
                currentFinderAmount:10
            }
    
    let response = [ 
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
        { name:'AAA', capital: 'BBB', region:'CCC', population:'DDD', flag:'EEE' },
       ]
       
    let action=SetCountryInfo(response);
    
    let newState=reducer(state,action)
    expect (newState.countryInfo.length).toBe(10)
  });