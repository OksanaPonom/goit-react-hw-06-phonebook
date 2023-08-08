import PropTypes from 'prop-types';

import { Label, Input, SearchIIcon } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contact"
      />
      <SearchIIcon />
    </Label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
