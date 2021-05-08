import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disable: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disable } = props;
    const { formState } = form;
    const { errors } = form.formState;
    const hasError = errors[name];

    const [showPassword, setShowPassword] = useState(false);
    const toogleShowPassword = () => {
        setShowPassword((x) => !x);
    };
    return (
        <div>
            <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    id={name}
                    name={name}
                    control={form.control}
                    render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { invalid, error },
                    }) => (
                        <OutlinedInput
                            fullWidth
                            label={label}
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toogleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            disabled={disable}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <FormHelperText>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;
