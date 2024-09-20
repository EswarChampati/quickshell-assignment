const Filters = () => {
  return (
    <div className="headerFilter">
      <div>
        <label>Grouping</label>
        <select>
          <option>Status</option>
          <option>User</option>
          <option> Priority</option>
        </select>
      </div>
      <div>
        <label>Ordering</label>
        <select>
          <option>Priority</option>
          <option>Title</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
