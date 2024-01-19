import { Controller, useFormContext } from 'react-hook-form'
import { useReactHookForm } from './FormProvider'
import { TextField } from '@mui/material'

export default function RHFTextField({
  name,
  disabled = false,
  TextFieldProps,
  ...other
}) {
  const { control } = useFormContext()
  const { checkFormChanged = false, setIsFormProviderChanged } =
    useReactHookForm()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          checked={field.value}
          onChange={(event) => {
            setIsFormProviderChanged(checkFormChanged)

            if (TextFieldProps?.onChange) {
              TextFieldProps.onChange(event, field)
              return
            }

            field.onChange(event?.target?.value)
          }}
          disabled={disabled}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  )
}
