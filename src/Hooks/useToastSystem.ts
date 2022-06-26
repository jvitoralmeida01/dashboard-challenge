import { useToast } from '@chakra-ui/react';
import React from 'react';

function useToastSystem() : { error : (e:any)=>void } {
  const toast = useToast();

  const error = (e:any) : void => {
    if (!toast.isActive('error-toast')) {
      toast({
        id: 'error-toast',
        title: 'Oops, something went wrong!',
        description: e.message,
        position: 'top-right',
        status: 'error',
        isClosable: true
      });
    }
  };

  return ({
    error
  });
}

export default useToastSystem;
