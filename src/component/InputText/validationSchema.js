import * as yup from 'yup';

export const signinScheme = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('wrong email')
      .matches(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        'wrong email',
      )
      .max(58, 'typed 58 symbol')
      .required('Required field'),
    password: yup
      .string()
      .min(8, '8 minimum characters')
      .max(8, '8 maximum characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?!.*\W).{6,8}$/,
        'requird number and characters',
      )
      .required('Required field'),
  });

export const signupScheme = () =>
  yup.object().shape({
    name: yup
      .string()
      .min(2, '2 minimum characters ')
      .max(58, '58 maximum characters')
      .matches(
        /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})$/,
        'plaese enter name without number and symbols',
      )
      .required('Required field'),
    email: yup
      .string()
      .email('wrong email')
      .matches(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        'wrong email',
      )
      .max(58, 'typed 58 symbol')
      .required('Required field'),
    password: yup
      .string()
      .min(8, '8 minimum characters')
      .max(8, '8 maximum characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?!.*\W).{6,8}$/,
        'requird number and characters',
      )
      .required('Required field'),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'confirm password not match with password',
      )
      .required('Required field'),
  });

export const forgotPasswordStepOne = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('wrong email')
      .matches(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        'wrong email',
      )
      .max(58, 'typed 58 symbol')
      .required('Required field'),
    phone: yup
      .string()
      .matches(/^\d*$/, 'Only Number')
      .min(10, '10 number only')
      .max(10, '10 number only')
      .required('Required field'),
  });


  export const forgotPasswordStepThree = () =>
  yup.object().shape({
    passwordNew: yup
      .string()
      .min(8, '8 minimum characters')
      .max(8, '8 maximum characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?!.*\W).{6,8}$/,
        'requird number and characters',
      )
      .required('Required field'),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'confirm password not match with password',
      )
      .required('Required field'),
  });