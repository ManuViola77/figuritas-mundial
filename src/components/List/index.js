import React, { useEffect, useState, useMemo } from "react";

import Card from "../Card";
import Input from "../Input";
import data, { getFilteredData } from "../../data/index";
import { useLocalStorageState } from "../../utils/utils";

const List = () => {
  const [filters, setFilters] = useState({});
  const [storageData, setStorageData] = useLocalStorageState("data", data);

  const dataToShow = useMemo(() => getFilteredData(storageData, filters), [
    filters,
    storageData,
  ]);
  console.log("filters: ", filters);

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
        <div className="cards-list">
          {dataToShow.map((countryItems) =>
            countryItems.map((item) => <Card key={item.id} item={item}></Card>)
          )}
        </div>
      </form>
    </div>
  );
};

export default List;
