import React from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => (
  <LabelFilter>
    Find contact by name:
    <InputFilter type="text" value={value} onChange={onChange} />
  </LabelFilter>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
