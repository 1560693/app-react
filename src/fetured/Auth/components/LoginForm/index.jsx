import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/passwordField';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
LoginForm.defaultValues = {};

function LoginForm(props) {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password'),
    });
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
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
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="btn-signUp"
                fullWidth
            >
                sign in
            </Button>
        </form>
    );
}

export default LoginForm;
