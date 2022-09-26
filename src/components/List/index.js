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

  const getFilter = (key) => filters[key];
  const setFilter = (key, value) => {
    const newFilters = { ...filters };
    newFilters[key] = value;
    setFilters(newFilters);
  };

  return (
    <div>
      <p>Filtros:</p>
      <form>
        <div className="filters-container">
          <Input
            value={getFilter("name")}
            onChange={(event) => setFilter("name", event.target.value)}
            label="Futbolista"
          ></Input>
          <Input
            value={getFilter("country")}
            onChange={(event) => setFilter("country", event.target.value)}
            label="Pais"
          ></Input>
        </div>
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
