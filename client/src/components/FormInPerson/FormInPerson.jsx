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

function FormInPerson({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    stepFree: '',
    wideRoutes: '',
    seatingSpecialist: '',
    seatingSpace: '',
    seatingPower: '',
    quietArea: '',
    hearingSystem: '',
    assistanceDog: '',
  };

  const schema = yup.object().shape({
    stepFree: yup.boolean().required(),
    wideRoutes: yup.boolean().required(),
    seatingSpecialist: yup.boolean().required(),
    seatingSpace: yup.boolean().required(),
    seatingPower: yup.boolean().required(),
    quietArea: yup.boolean().required(),
    hearingSystem: yup.boolean().required(),
    assistanceDog: yup.boolean().required(),
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
      <h2>In-person Event Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require step free access?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.stepFree}
                  helperText={errors.stepFree?.message}
                  id="stepFree"
                  name={name}
                  aria-label="stepFree"
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
            name="stepFree"
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
                  Will you require wide routes throughout the venue? For example
                  if you are using a wheelchair or other mobility aid
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.wideRoutes}
                  helperText={errors.wideRoutes?.message}
                  id="wideRoutes"
                  name={name}
                  aria-label="wideRoutes"
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
            name="wideRoutes"
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
                  Will you require specialist seating? For example seating with
                  back support
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.seatingSpecialist}
                  helperText={errors.seatingSpecialist?.message}
                  id="seatingSpecialist"
                  name={name}
                  aria-label="seatingSpecialist"
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
            name="seatingSpecialist"
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
                  Will you seating space instead of a seat? For example if you
                  are using a wheelchair or other mobility aid
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.seatingSpace}
                  helperText={errors.seatingSpace?.message}
                  id="seatingSpace"
                  name={name}
                  aria-label="seatingSpace"
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
            name="seatingSpace"
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
                  Will you require a seat near power sources to charge
                  specialist equipment?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.seatingPower}
                  helperText={errors.seatingPower?.message}
                  id="seatingPower"
                  name={name}
                  aria-label="seatingPower"
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
            name="seatingPower"
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
                  Will you require a quiet area for those who need to take
                  medicine or reduce sensory overload?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.quietArea}
                  helperText={errors.quietArea?.message}
                  id="quietArea"
                  name={name}
                  aria-label="quietArea"
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
            name="quietArea"
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
                  Will you require a hearing enhancement system?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.hearingSystem}
                  helperText={errors.hearingSystem?.message}
                  id="hearingSystem"
                  name={name}
                  aria-label="hearingSystem"
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
            name="hearingSystem"
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
                  Will you be bringing an assistance dog?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.assistanceDog}
                  helperText={errors.assistanceDog?.message}
                  id="assistanceDog"
                  name={name}
                  aria-label="assistanceDog"
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
            name="assistanceDog"
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

export default FormInPerson;
