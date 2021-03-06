import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

export default class WhitespacePreview extends (PureComponent || Component) {
  static propTypes = {
    value: PropTypes.object,
    prefix: PropTypes.string,
  };

  render() {
    const { value, prefix } = this.props;

    return (
      <div
        className={`${prefix}-design-component-whitespace-preview`}
        style={{ height: `${value.height}px` }}
      />
    );
  }
}
