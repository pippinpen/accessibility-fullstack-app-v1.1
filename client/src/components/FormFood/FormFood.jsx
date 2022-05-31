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

function FormFood({ prevStep, buttonAction, buttonText }) {
  const defaultValues = {
    vegetarian: '',
    vegan: '',
    kosher: '',
    halal: '',
    dairyFree: '',
    glutenFree: '',
    wheatAllergy: '',
    nutAllergy: '',
    fishAllergy: '',
    eggAllergy: '',
    soyAllergy: '',
    otherAllergy: '',
  };

  const schema = yup.object().shape({
    vegetarian: yup.boolean().required(),
    vegan: yup.boolean().required(),
    kosher: yup.boolean().required(),
    halal: yup.boolean().required(),
    dairyFree: yup.boolean().required(),
    glutenFree: yup.boolean().required(),
    wheatAllergy: yup.boolean().required(),
    nutAllergy: yup.boolean().required(),
    fishAllergy: yup.boolean().required(),
    eggAllergy: yup.boolean().required(),
    soyAllergy: yup.boolean().required(),
    otherAllergy: yup.string().min(3).max(10),
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
      <h2>Food Questions</h2>
      <form onSubmit={handleSubmit(buttonAction)}>
        <div className="formRow">
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require Vegetarian food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.vegetarian}
                  helperText={errors.vegetarian?.message}
                  id="vegetarian"
                  name={name}
                  aria-label="vegetarian"
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
            name="vegetarian"
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
                  Will you require Vegan food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.vegan}
                  helperText={errors.vegan?.message}
                  id="vegan"
                  name={name}
                  aria-label="vegan"
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
            name="vegan"
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
                  Will you require Kosher food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.kosher}
                  helperText={errors.kosher?.message}
                  id="kosher"
                  name={name}
                  aria-label="kosher"
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
            name="kosher"
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
                  Will you require halal food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.halal}
                  helperText={errors.halal?.message}
                  id="halal"
                  name={name}
                  aria-label="halal"
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
            name="halal"
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
                  Will you require dairy free food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.dairyFree}
                  helperText={errors.dairyFree?.message}
                  id="dairyFree"
                  name={name}
                  aria-label="dairyFree"
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
            name="dairyFree"
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
                  Will you require gluten-free food?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.glutenFree}
                  helperText={errors.glutenFree?.message}
                  id="glutenFree"
                  name={name}
                  aria-label="glutenFree"
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
            name="glutenFree"
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
                  Do you have a wheat allergy?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.wheatAllergy}
                  helperText={errors.wheatAllergy?.message}
                  id="wheatAllergy"
                  name={name}
                  aria-label="wheatAllergy"
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
            name="wheatAllergy"
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
                  Do you have a nut allergy?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.nutAllergy}
                  helperText={errors.nutAllergy?.message}
                  id="nutAllergy"
                  name={name}
                  aria-label="nutAllergy"
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
            name="nutAllergy"
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
                  Do you have a fish allergy?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.fishAllergy}
                  helperText={errors.fishAllergy?.message}
                  id="fishAllergy"
                  name={name}
                  aria-label="fishAllergy"
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
            name="fishAllergy"
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
                  Do you have an egg allergy?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.eggAllergy}
                  helperText={errors.eggAllergy?.message}
                  id="eggAllergy"
                  name={name}
                  aria-label="eggAllergy"
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
            name="eggAllergy"
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
                  Do you have a soy allergy?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.soyAllergy}
                  helperText={errors.soyAllergy?.message}
                  id="soyAllergy"
                  name={name}
                  aria-label="soyAllergy"
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
            name="soyAllergy"
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
                  If you have another allergy not mentioned please tell us:
                </FormLabel>
                <TextField
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.otherAllergy}
                  helperText={errors.otherAllergy?.message}
                  id="otherAllergy"
                  name={name}
                  aria-label="otherAllergy"
                />
              </FormControl>
            )}
            name="otherAllergy"
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

export default FormFood;
