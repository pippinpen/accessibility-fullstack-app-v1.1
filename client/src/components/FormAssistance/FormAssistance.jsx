import React from 'react';
import Button from '../Button/Button';
import {
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

function FormAssistance({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    extraPlace: '',
    bslInterpreter: '',
    dbInterpreter: '',
    captions: '',
    audioDescription: '',
  };

  const schema = yup.object().shape({
    extraPlace: yup.boolean().required(),
    bslInterpreter: yup.boolean().required(),
    dbInterpreter: yup.boolean().required(),
    captions: yup.boolean().required(),
    audioDescription: yup.boolean().required(),
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
      <h2>Assistance Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require an extra place for a carer or assistant?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.extraPlace}
                  helperText={errors.extraPlace?.message}
                  id="extraPlace"
                  name={name}
                  aria-label="extraPlace"
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
            name="extraPlace"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require a BSL Interpreter?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.bslInterpreter}
                  helperText={errors.bslInterpreter?.message}
                  id="bslInterpreter"
                  name={name}
                  aria-label="bslInterpreter"
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
            name="bslInterpreter"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require a deafblind Interpreter?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.dbInterpreter}
                  helperText={errors.dbInterpreter?.message}
                  id="dbInterpreter"
                  name={name}
                  aria-label="dbInterpreter"
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
            name="dbInterpreter"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require captions? This is a text version of audio
                  information.
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.captions}
                  helperText={errors.captions?.message}
                  id="captions"
                  name={name}
                  aria-label="captions"
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
            name="captions"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require audio description? This is a description of
                  visual information.
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.audioDescription}
                  helperText={errors.audioDescription?.message}
                  id="audioDescription"
                  name={name}
                  aria-label="audioDescription"
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
            name="audioDescription"
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

export default FormAssistance;
