import React from 'react';
import { NinjasServiceConsumer } from '../service-context';

const withNinjasService = (mapMethodsToProps) => (Wrapped) => (props) => (
  <NinjasServiceConsumer>
    {
      (ninjasService) => {
        const serviceProps = mapMethodsToProps(ninjasService);
        return (
          <Wrapped {...props} {...serviceProps} />
        );
      }
    }
  </NinjasServiceConsumer>
);

export default withNinjasService;
