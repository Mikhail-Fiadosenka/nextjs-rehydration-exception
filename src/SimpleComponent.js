import React from 'react';

export default class Container extends React.Component {
  render() {
    const isClientSide = typeof document !== 'undefined';

    if (isClientSide) {
      throw new Error('fake client-side error');
    }

    return (
      <div>
        Nested React component. It's essential to have exception thrown in a
        nested component.
      </div>
    );
  }
}
