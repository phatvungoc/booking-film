import axios from 'axios';

class UserService {
    signUp(value) {
        return axios({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: value,
        });
    }
    signIn(user) {
        return axios({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user,
        });
    }
}

export default UserService;
