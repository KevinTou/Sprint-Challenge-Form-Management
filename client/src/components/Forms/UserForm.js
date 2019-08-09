import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ type, touched, errors }) => {
  return (
    <div className='max-w-md mx-auto bg-gray-500 my-8 p-16'>
      <h2>{type} Form</h2>
      <Form className='flex flex-col'>
        <label htmlFor='username' className='my-6'>
          Username:
          <Field
            type='text'
            name='username'
            placeholder='Enter your username'
            data-testid='username'
          />
          {touched.username && errors.username && (
            <p className='text-red-800'>{errors.username}</p>
          )}
        </label>
        <label htmlFor='password'>
          Password:
          <Field
            type='password'
            name='password'
            placeholder='Enter your password'
            data-testid='password'
          />
          {touched.password && errors.password && (
            <p className='text-red-800'>{errors.password}</p>
          )}
        </label>
        <button type='submit' className='bg-green-200 my-6'>
          {type}
        </button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || '',
      password: values.password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Password is required'),
  }),

  handleSubmit(values, { resetForm }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        alert(res.data.message);
        resetForm();
      })
      .catch(err => console.log(err));
  },
})(UserForm);

export default FormikUserForm;
