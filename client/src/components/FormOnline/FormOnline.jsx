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

function FormOnline({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    regularBreaks: '',
    technologyHelp: '',
    technologyMissing: '',
    wifiHelp: '',
    multiCommunication: '',
  };

  const schema = yup.object().shape({
    regularBreaks: yup.boolean().required(),
    technologyHelp: yup.boolean().required(),
    technologyMissing: yup.boolean().required(),
    wifiHelp: yup.boolean().required(),
    multiCommunication: yup.boolean().required(),
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
      <h2>Online Event Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require regular breaks? For example, a break every 45
                  minutes
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.regularBreaks}
                  helperText={errors.regularBreaks?.message}
                  id="regularBreaks"
                  name={name}
                  aria-label="regularBreaks"
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
            name="regularBreaks"
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
                  Will you require any assistance to set up or use the
                  technology the event is hosted with?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.technologyHelp}
                  helperText={errors.technologyHelp?.message}
                  id="technologyHelp"
                  name={name}
                  aria-label="technologyHelp"
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
            name="technologyHelp"
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
                  Will you require options for participating without a
                  microphone or camera?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.technologyMissing}
                  helperText={errors.technologyMissing?.message}
                  id="technologyMissing"
                  name={name}
                  aria-label="technologyMissing"
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
            name="technologyMissing"
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
                  Will you require advice for unreliable wifi?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.wifiHelp}
                  helperText={errors.wifiHelp?.message}
                  id="wifiHelp"
                  name={name}
                  aria-label="wifiHelp"
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
            name="wifiHelp"
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
                  Will you require multiple forms of communication? For example
                  using a chat for written questions as well as a microphone for
                  spoken questions
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.multiCommunication}
                  helperText={errors.multiCommunication?.message}
                  id="multiCommunication"
                  name={name}
                  aria-label="multiCommunication"
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
            name="multiCommunication"
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

export default FormOnline;
