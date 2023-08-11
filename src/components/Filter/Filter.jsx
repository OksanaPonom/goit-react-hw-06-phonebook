import { Label, Input, SearchIIcon } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Search contact"
      />
      <SearchIIcon />
    </Label>
  );
}
