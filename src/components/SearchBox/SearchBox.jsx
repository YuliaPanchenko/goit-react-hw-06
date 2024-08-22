import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilter }) => {
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
