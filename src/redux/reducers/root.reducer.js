import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';
import commonReducer from './common.reducer';
import detailReducer from './detail.reducer';
import cinemaReducer from './cinema.reducer';
import UserReducer from './user.reducer';
import bookingReducer from './booking.reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    common: commonReducer,
    detail: detailReducer,
    cinema: cinemaReducer,
    user: UserReducer,
    booking: bookingReducer,
});

export default rootReducer;
