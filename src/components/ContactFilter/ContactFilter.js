import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterInput } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
      <FilterInput
        id="filter"
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
        name="filter"
        placeholder="Search contacts"
      />
  );
};


