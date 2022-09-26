import React, { useEffect, useState, useMemo } from "react";
import { getFilteredData } from "../../data/index";
import Input from "../Input";

const List = () => {
  const [filters, setFilters] = useState({});

  const data = useMemo(() => getFilteredData(filters), [filters]);
  console.log("filters: ", filters);
  console.log("data: ", data);

  const handleApplyFilters = () => {
    setFilters({
      country: "Canada",
    });
  };

  return (
    <div>
      <p>Filtros:</p>
      <form>
        <div className="filters-container">
          <Input label="Futbolista"></Input>
          <Input label="Pais"></Input>
        </div>
        <button type="button" onClick={handleApplyFilters}>
          Aplicar
        </button>
      </form>
    </div>
  );
};

export default List;
