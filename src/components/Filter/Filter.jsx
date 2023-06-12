import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by Name</label>
      <input
        className={css.filterName}
        type="text"
        placeholder="Find contacts by name..."
        value={filter}
        onChange={showFilteredContacts} />
    </div>
  );
};
