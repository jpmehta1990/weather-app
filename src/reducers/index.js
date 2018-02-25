import { combineReducers } from 'redux';
import Weather from './weather';

const rootReducer = combineReducers({
    weather: Weather
});

export default rootReducer;
