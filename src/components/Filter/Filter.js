import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        name="filter"
        type="text"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};
