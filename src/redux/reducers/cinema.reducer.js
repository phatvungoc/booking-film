const initialState = {
    listCinema: [],
    listDetailCinema: [],
    listMovieDetailByLocation: null,
};

const cinemaReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_CINEMA_LIST_SUCCESS':
            return { ...state, listCinema: payload };
        case 'GET_CINEMA_DETAIL_SUCCESS':
            return { ...state, listDetailCinema: payload };
        case 'GET_LIST_MOVIE_DETAIL_BY_LOCATION_SUCCESS':
            return { ...state, listMovieDetailByLocation: payload };
        default:
            return state;
    }
};

export default cinemaReducer;
