import React from 'react';
import { Form, Formik, Field } from 'formik';
import { login } from '../../redux/actions/user.action';
import { useDispatch } from 'react-redux';

export default function SignIn() {
    const dispatch = useDispatch();

    const handleClosePopupSignin = () => {
        document
            .querySelector('[rel="js-header-signin"]')
            .classList.remove('active');
    };

    const handleSubmitLogin = (value) => {
        dispatch(login(value));
    };

    return (
        <Formik
            initialValues={{
                taiKhoan: '',
                matKhau: '',
            }}
            type="button"
            onSubmit={(value) => {
                handleSubmitLogin(value);
            }}
        >
            {({ handleChange }) => (
                <div className="popup header-signin" rel="js-header-signin">
                    <div className="popup-content">
                        <Form>
                            <div className="popup-header">
                                Đăng nhập
                                <i
                                    className="fa fa-close"
                                    onClick={() => handleClosePopupSignin()}
                                ></i>
                            </div>
                            <div className="form-group">
                                <label className="popup-label">Tài Khoản</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="taiKhoan"
                                    placeholder="Nhập tài khoản"
                                    onChange={handleChange}
                                />
                                <label className="popup-label mt-4">
                                    Mật Khẩu
                                </label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    name="matKhau"
                                    placeholder="Nhập mật khẩu"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">
                                    Đăng Nhập
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
}
