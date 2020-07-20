import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(1, 'Must be 1 characters at minimum')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
});
