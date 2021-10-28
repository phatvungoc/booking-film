import { userService } from '../../Services';

export const login = (user) => {
    return (dispatch) => {
        userService
            .signIn(user)
            .then((res) => {
                if (res.data.maLoaiNguoiDung === 'KhachHang') {
                    dispatch(loginUser(res.data));
                    localStorage.setItem(
                        'credentials',
                        JSON.stringify(res.data)
                    );
                    document
                        .querySelector('[rel="js-header-signin"]')
                        .classList.remove('active');
                } else {
                    alert('Sai Tên đăng nhập hoặc Mật khẩu! Vui lòng thử lại!');
                }
            })
            .catch((err) => {
                alert('Sai Tên đăng nhập hoặc Mật khẩu! Vui lòng thử lại!');
                console.log(err);
            });
    };
};

function loginUser(userLogin) {
    return {
        type: 'FETCH_CREDENTIAL',
        payload: userLogin,
    };
}
