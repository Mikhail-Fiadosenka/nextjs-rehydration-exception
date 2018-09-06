import React from 'react';
import SimpleComponent from '../src/SimpleComponent';

export default class A extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid green' }}>
        Original page content.
        <SimpleComponent />
      </div>
    );
  }
}
