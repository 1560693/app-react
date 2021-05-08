import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({
                field: { onChange, onBlur, value, name },
                fieldState: { invalid, error },
            }) => (
                <TextField
                    variant="outlined"
                    margin="normal"
                    error={invalid}
                    helperText={error?.message}
                    label={label}
                    disabled={disabled}
                    fullWidth
                    required
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )}
        />
    );
}

export default InputField;
