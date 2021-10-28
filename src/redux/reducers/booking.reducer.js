const initialState = {
    danhSachGhe: [],
    thongTinPhim: [],
};

export default function bookingReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_BOOKING_SUCCESS': {
            return { ...state, danhSachGhe: payload.danhSachGhe };
        }
        case 'GET_INFO_MOVIE_BOOKING_SUCCESS': {
            return { ...state, thongTinPhim: payload.thongTinPhim };
        }
        case 'CHON_GHE': {
            const index = state.danhSachGhe.findIndex(
                (ghe) => ghe.maGhe === payload.maGhe
            );
            const gheCU = state.danhSachGhe[index];
            const gheMOI = { ...gheCU, dangChon: !gheCU.dangChon };
            state.danhSachGhe[index] = gheMOI;
            const danhSachGhe = [...state.danhSachGhe];
            return { ...state, danhSachGhe };
        }
        default:
            return state;
    }
}
