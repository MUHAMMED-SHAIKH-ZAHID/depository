/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import styles from '../profile.module.css';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import {
  forgotPasswordLabels,
  profileLabel,
  signInLabels,
} from '../../../string';
import TextFields from '../../../components/inputFields/TextFields';
import viaLogo from '../../../../src/assets/viaLogo.svg';
import eyeIcon from '../../../../src/assets/eyeIcon.svg';
import {
  newUserPassword,
  resetUserPassword,
} from '../../../services/profileService';
import Loader from '../../../components/loader/Loader';
import {
  changePasswordSchema,
  oldPasswordSchema,
} from '../../../helpers/schema';

import {
  logout as logOutUser,
  setSuccessMessage,
} from '../../../store/reducers/authSlice';

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleNavigate = () => {
    navigate('/forgot-password');
  };
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
    },
    validationSchema: oldPasswordSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const result = await resetUserPassword({
          old_password: values.oldPassword,
        });
        if (result.status === 200) {
          setLoading(false);
          const newToken = result?.data?.data?.token;
          setToken(newToken);
        } else {
          setOldPasswordError(result?.data?.msg);
          // formik.resetForm();
          setSubmitBtnDisabled(false);
          setLoading(false);
          setTimeout(() => {
            setOldPasswordError('');
          }, 3000);
        }
      } catch (err: any) {
        setTimeout(() => {
          setSubmitBtnDisabled(false);
        }, 2000);
        throw new Error(err);
      }
    },
  });

  const formik1 = useFormik({
    initialValues: {
      token: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const result = await newUserPassword({
          token: token,
          password: values.newPassword,
          confirm_password: values.confirmPassword,
        });
        if (result.status === 200) {
          dispatch(logOutUser());
          navigate('/signin');
          dispatch(setSuccessMessage(result?.data?.msg));
          setLoading(false);
        } else {
          setNewPasswordError(result?.data?.msg);
          // formik.resetForm();
          setSubmitBtnDisabled(false);
          setLoading(false);
          setTimeout(() => {
            setNewPasswordError('');
          }, 2000);
        }
      } catch (err: any) {
        setTimeout(() => {
          setSubmitBtnDisabled(false);
        }, 2000);
        throw new Error(err);
      }
    },
  });
  return (
    <div className={styles.resetPasswordContainer}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.resetPasswordWrapper}>
          <img src={viaLogo} alt="" />
          <h2 className={styles.resetPassword}>{profileLabel.resetPassword}</h2>
          {token ? (
            <form onSubmit={formik1.handleSubmit}>
              <div className={styles.wrapper}>
                <div className={styles.eyeIconWrapper}>
                  <TextFields
                    label="New password"
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    className={`${styles.textField} ${
                      formik1.errors.newPassword && formik1.touched.newPassword
                        ? styles.errorTextField1
                        : ''
                    }`}
                    value={formik1.values.newPassword}
                    onChange={(event) => {
                      formik1.handleChange(event);
                    }}
                    errors={
                      formik1.errors.newPassword && formik1.touched.newPassword
                        ? formik1.errors.newPassword
                        : null
                    }
                  />
                  <img
                    className={`${styles.eyeIcon} ${
                      formik1.errors.newPassword && formik1.touched.newPassword
                        ? styles.errorEyeIcon
                        : ''
                    }`}
                    onClick={() => {
                      setShowNewPassword(!showNewPassword);
                    }}
                    src={eyeIcon}
                    alt=""
                  />
                </div>
                <div className={styles.eyeIconWrapper}>
                  <TextFields
                    type={showConfirmPassword ? 'text' : 'password'}
                    label="Confirm password"
                    name="confirmPassword"
                    className={`${styles.textField} ${
                      formik1.errors.confirmPassword &&
                      formik1.touched.confirmPassword
                        ? styles.errorTextField2
                        : ''
                    }`}
                    value={formik1.values.confirmPassword}
                    onChange={(event) => {
                      formik1.handleChange(event);
                    }}
                    errors={
                      formik1.errors.confirmPassword &&
                      formik1.touched.confirmPassword
                        ? formik1.errors.confirmPassword
                        : null
                    }
                  />
                  <img
                    className={`${styles.eyeIcon} ${
                      formik1.errors.confirmPassword &&
                      formik1.touched.confirmPassword
                        ? styles.errorEyeIcon
                        : ''
                    }`}
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    src={eyeIcon}
                    alt=""
                  />
                </div>
                <p className={styles.errors}>{newPasswordError}</p>

                <PrimaryButton type="submit" className={styles.button}>
                  {profileLabel.submit}
                </PrimaryButton>
              </div>
            </form>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.wrapper}>
                <div className={styles.eyeIconWrapper}>
                  <TextFields
                    label="Old password"
                    type={show ? formik.values.oldPassword : 'text'}
                    name="oldPassword"
                    className={`${styles.textField} ${
                      formik.errors.oldPassword && formik.touched.oldPassword
                        ? styles.errorTextField1
                        : ''
                    }`}
                    value={formik.values.oldPassword}
                    onChange={(event) => {
                      formik.handleChange(event);
                    }}
                    errors={
                      formik.errors.oldPassword && formik.touched.oldPassword
                        ? formik.errors.oldPassword
                        : null
                    }
                  />
                  <img
                    className={`${styles.eyeIcon} ${
                      formik.errors.oldPassword && formik.touched.oldPassword
                        ? styles.errorEyeIcon
                        : ''
                    }`}
                    onClick={() => {
                      setShow(!show);
                    }}
                    src={eyeIcon}
                    alt=""
                  />
                </div>
                <p className={styles.errors}>{oldPasswordError}</p>
                <div className={styles.innerContainer}>
                  <div>
                    <span onClick={handleNavigate}>
                      {signInLabels.forgotPassword}
                    </span>
                  </div>
                </div>
                <PrimaryButton
                  type="submit"
                  className={styles.button}
                  disabled={submitBtnDisabled}
                >
                  {forgotPasswordLabels.submit}
                </PrimaryButton>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default ResetPassword;