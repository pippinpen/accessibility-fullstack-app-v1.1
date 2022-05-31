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

function FormMaterials({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    formatBefore: '',
    dyslexicFont: '',
    largeFont: '',
    contrast: '',
    digital: '',
    paper: '',
    braille: '',
    tactileLabels: '',
  };

  const schema = yup.object().shape({
    formatBefore: yup.boolean().required(),
    dyslexicFont: yup.boolean().required(),
    largeFont: yup.boolean().required(),
    contrast: yup.boolean().required(),
    digital: yup.boolean().required(),
    paper: yup.boolean().required(),
    braille: yup.boolean().required(),
    tactileLabels: yup.boolean().required(),
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
      <h2>Materials Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require the running order of the event in advance?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.formatBefore}
                  helperText={errors.formatBefore?.message}
                  id="formatBefore"
                  name={name}
                  aria-label="formatBefore"
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
            name="formatBefore"
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
                  Will you require a dyslexic font version of the event's
                  materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.dyslexicFont}
                  helperText={errors.dyslexicFont?.message}
                  id="dyslexicFont"
                  name={name}
                  aria-label="dyslexicFont"
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
            name="dyslexicFont"
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
                  Will you require a large font version of the event's
                  materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.largeFont}
                  helperText={errors.largeFont?.message}
                  id="largeFont"
                  name={name}
                  aria-label="largeFont"
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
            name="largeFont"
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
                  Will you require a high contrast version of the event's
                  materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.contrast}
                  helperText={errors.contrast?.message}
                  id="contrast"
                  name={name}
                  aria-label="contrast"
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
            name="contrast"
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
                  Will you require a digital version of the event's materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.digital}
                  helperText={errors.digital?.message}
                  id="digital"
                  name={name}
                  aria-label="digital"
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
            name="digital"
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
                  Will you require a paper copy of the event's materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.paper}
                  helperText={errors.paper?.message}
                  id="paper"
                  name={name}
                  aria-label="paper"
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
            name="paper"
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
                  Will you require a braille copy of the event's materials?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.braille}
                  helperText={errors.braille?.message}
                  id="braille"
                  name={name}
                  aria-label="braille"
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
            name="braille"
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
                  Will you require any visual materials to have tactile labels?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.tactileLabels}
                  helperText={errors.tactileLabels?.message}
                  id="tactileLabels"
                  name={name}
                  aria-label="tactileLabels"
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
            name="tactileLabels"
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

export default FormMaterials;
