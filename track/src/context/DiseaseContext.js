import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const diseaseReducer =(state, action)=>{
    switch(action.type)
    {
        case 'PredictDisease':
            return action.payload;
        default:
            return state;

    }
};


const predictDisease = dispatch => async ({Symptom1, Symptom2, Symptom3, Symptom4, Symptom5})=>{
    console.log({Symptom1});
    try {
        const response = await trackerApi.post('/predictDisease',{Symptom1, Symptom2, Symptom3, Symptom4, Symptom5});
        dispatch({ type: 'PredictDisease', payload: response });
         
    } catch (err) {
        
    }
};

export const { Provider, Context } = createDataContext(
    diseaseReducer,
    { predictDisease },
    {erroMessage:""}
  );