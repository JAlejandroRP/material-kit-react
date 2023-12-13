import PropTypes from 'prop-types';

import { TextField } from "@mui/material"

const TextInput = ({ id, name, label, variant, fullWidth, type, inputProps, register }) =>
(
  <TextField id={id} name={name} label={label} variant={variant} fullWidth={fullWidth} type={type} {...register}
    InputProps={inputProps}
  />
)

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  register: PropTypes.any,
  inputProps: PropTypes.any,
}