import React from 'react';
import { NinjasServiceConsumer } from '../service-context';

function withNinjasService(mapMethodsToProps) {
  return function withWrapped(Wrapped) {
    return function withProps(props) {
      return (
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
    };
  };
}

export default withNinjasService;
