import {
  FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react';

type Props = {
  label?: string;
  type?: string;
}

function FormInput(props: Props) : React.ReactElement {
  const { label, type } = props;
  const [show, setShow] = React.useState(false);
  const handleIconClick = () : void => setShow(!show);
  return (
    <FormControl width="150%">
      <FormLabel ml={4}>{label}</FormLabel>
      <InputGroup>
        <Input id={type} variant="filled" type={show ? '' : type} size="lg" pl={4} pr={4} />
        { type === 'password' ? (
          <InputRightElement height="100%">
            <IconButton aria-label="show or Hide" variant="transparent" color="neutral.200" justifyContent="center" onClick={handleIconClick}>
              { show ? <ViewIcon /> : <ViewOffIcon /> }
            </IconButton>
          </InputRightElement>
        ) : null }
      </InputGroup>
    </FormControl>
  );
}

export default FormInput;
