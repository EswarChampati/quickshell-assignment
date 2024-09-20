import { useRef } from "react";
import { useFilterContext } from "../utils/filterContext";
const Filters = () => {
  const { setFilterValues } = useFilterContext();
  const groupingRef = useRef(null);
  const orderingRef = useRef(null);

  const handleGroupingChange = () => {
    setFilterValues((prev) => ({
      ...prev,
      grouping: groupingRef.current.value,
    }));
  };

  const handleOrderingChange = () => {
    setFilterValues((prev) => ({
      ...prev,
      ordering: orderingRef.current.value,
    }));
  };

  return (
    <div className="headerFilter">
      <div>
        <label>Grouping</label>
        <select
          ref={groupingRef}
          onChange={handleGroupingChange}
          defaultValue="Status"
        >
          <option>Status</option>
          <option>User</option>
          <option> Priority</option>
        </select>
      </div>
      <div>
        <label>Ordering</label>
        <select
          ref={orderingRef}
          onChange={handleOrderingChange}
          defaultValue="Priority"
        >
          <option>Priority</option>
          <option>Title</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
