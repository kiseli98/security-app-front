import React from "react";
import Datetime from "react-datetime";

import CustomInput from "./CustomInput.js";

export default function DateTimePicker(props) {
  const {
    inputProps: {onBlur, onFocus, value, onChange, ...restInputProps},
    formControlProps,
    labelText,
    ...restProps
  } = props;
  return (
    <Datetime
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      renderInput={(dateInputProps, open, close) => (
        <CustomInput
          inputProps={{ ...dateInputProps, ...restInputProps }}
          onBlur={close}
          onFocus={open}
          labelText={labelText}
          formControlProps={formControlProps}
        />
      )}
      {...restProps}
    />
  );
}
