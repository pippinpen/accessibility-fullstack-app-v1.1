import React from 'react';
import Button from '../Button/Button';
import {
  FormControl,
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

function FormDrink({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    nonAlcoholic: '',
  };

  const schema = yup.object().shape({
    nonAlcoholic: yup.boolean().required(),
  });

  const { handleSubmit, errors, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  const { isDirty, isValid } = formState;
  return (
    <>
      <h2>Drinks Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require non-alcoholic drinks?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.nonAlcoholic}
                  helperText={errors.nonAlcoholic?.message}
                  id="nonAlcoholic"
                  name={name}
                  aria-label="nonAlcoholic"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            )}
            name="nonAlcoholic"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="formButtonContainer">
          <Button text="Previous" onClick={prevStep} />
          <Button
            text={buttonText}
            disabled={!isValid || !isDirty}
            type="submit"
          />
        </div>
      </form>
    </>
  );
}

export default FormDrink;
