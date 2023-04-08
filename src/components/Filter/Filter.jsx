import '../Filter/Filter.css';

export const Filter = ({ handleInputChange }) => {
    return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className="input"
        onChange={handleInputChange}
      />
    </>
  );
}