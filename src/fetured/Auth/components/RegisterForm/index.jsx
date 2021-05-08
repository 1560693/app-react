import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/passwordField';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
RegisterForm.defaultValues = {};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your fullname')
            .test('should', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        password: yup
            .string()
            .required('Please enter your password')
            .min(6, 'Please enter at least six character'),
        retypePassword: yup
            .string()
            .required('Please retype your password')
            .oneOf([yup.ref('password')], 'Password does not match'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" label="Full Name" form={form} />
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <PasswordField name="retypePassword" label="Retype Password" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </form>
    );
}

export default RegisterForm;
