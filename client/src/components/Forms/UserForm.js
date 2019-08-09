import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ type, touched, errors }) => {
  return (
    <div className='max-w-md mx-auto bg-gray-500 p-16 mb-32 rounded shadow-xl'>
      <h2 className='text-center text-xl font-bold'>{type} Form</h2>
      <Form className='flex flex-col'>
        <label
          htmlFor='username'
          className='my-6 font-bold flex justify-between flex-col'>
          Username:
          <Field
            type='text'
            name='username'
            placeholder='Enter your username'
            data-testid='username'
            className='rounded p-2 mt-2'
          />
          {touched.username && errors.username && (
            <p className='text-red-800 font-normal'>{errors.username}</p>
          )}
        </label>
        <label
          htmlFor='password'
          className='font-bold flex justify-between flex-col'>
          Password:
          <Field
            type='password'
            name='password'
            placeholder='Enter your password'
            data-testid='password'
            className='rounded p-2 mt-2'
          />
          {touched.password && errors.password && (
            <p className='text-red-800 font-normal'>{errors.password}</p>
          )}
        </label>
        <button
          type='submit'
          className='bg-gray-300 my-6 p-2 font-medium rounded hover:text-blue-300 hover:bg-gray-7 font-med00'>
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
