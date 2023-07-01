import "./CostFilter.css";

function CostFilter(props) {
  function yearChangeHandler(event) {
    props.onChangeYear(event.target.value);
  }
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Year</label>
        <select value={props.curentYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2015">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </div>
    </div>
  );
}

export default CostFilter;
