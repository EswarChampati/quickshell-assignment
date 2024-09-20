const Filters = () => {
  return (
    <div>
      <label>Grouping</label>
      <select>
        <option>Status</option>
        <option>User</option>
        <option> Priority</option>
      </select>
      <label>Ordering</label>
      <select>
        <option>Priority</option>
        <option>Title</option>
      </select>
    </div>
  );
};

export default Filters;
