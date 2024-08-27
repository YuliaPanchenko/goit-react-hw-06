import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { selectNameFilter, setFilterValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    const action = setFilterValue(value);
    dispatch(action);
  };

  return (
    <div className={css.searchForm}>
      <label className={css.label}>
        <h2 className={css.searchText}>Find contacts by name</h2>
        <input
          className={css.searchField}
          type="text"
          name="findContact"
          placeholder=""
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
