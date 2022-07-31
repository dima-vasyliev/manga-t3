import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { FC } from 'react';

const FormInput: FC<{ label: string; name: string }> = ({ label, name }) => {
  const [field, { touched, error }] = useField(name);
  const isError = touched && error;

  return (
    <FormControl isInvalid={!!isError}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} />
      {isError && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
