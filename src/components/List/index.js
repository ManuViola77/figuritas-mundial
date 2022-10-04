import React, { useState, useMemo } from "react";

import Card from "../Card";
import Input from "../Input";
import data, { getFilteredData } from "../../data/index";
import { useLocalStorageState } from "../../utils/utils";
import RadioButtonRN from "../RadioButton";

const duplicatedOptions = ["no", "si", "todas"];
const haveOptions = ["no", "comun", "dorada", "todas"];
const modeOptions = ["have", "duplicated"];

const List = () => {
  const [filters, setFilters] = useState({
    duplicatedOption: "todas",
    haveOption: "todas",
    modeOption: "have",
  });
  const [storageData, setStorageData] = useLocalStorageState("data", data);
  const [
    storageDuplicatedData,
    setStorageDuplicatedData,
  ] = useLocalStorageState("DuplicatedData", data);

  const dataToShow = useMemo(() => getFilteredData(storageData, filters), [
    filters,
    storageData,
  ]);

  const duplicatedDataToShow = useMemo(
    () => getFilteredData(storageDuplicatedData, filters),
    [filters, storageDuplicatedData]
  );

  const getFilter = (key) => filters[key];
  const setFilter = (key, value) => {
    const newFilters = { ...filters };
    newFilters[key] = value;
    setFilters(newFilters);
  };

  const changeStickerStatus = ({
    id,
    countryIndex,
    isGold,
    isAdd,
    isDuplicated = false,
  }) => {
    if (isDuplicated) {
      const newData = { ...storageDuplicatedData };
      const selectedItem = newData.data[countryIndex][id];
      const currentValue = selectedItem.duplicated;
      const newSelectedItem = {
        ...selectedItem,
        duplicated: isAdd ? currentValue + 1 : currentValue - 1,
      };
      newData.data[countryIndex][id] = newSelectedItem;
      setStorageDuplicatedData(newData);
    } else {
      const newData = { ...storageData };
      const selectedItem = newData.data[countryIndex][id];
      const removeGold = !isAdd && isGold;
      const newSelectedItem = {
        ...selectedItem,
        have: isAdd || removeGold,
        haveGold: isAdd ? isGold : false,
      };
      newData.data[countryIndex][id] = newSelectedItem;
      setStorageData(newData);
    }
  };

  const isHaveMode = filters.modeOption === "have";
  const colectionToShow = isHaveMode ? dataToShow : duplicatedDataToShow;

  return (
    <div>
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
          <Input
            value={getFilter("id")}
            onChange={(event) => setFilter("id", event.target.value)}
            label="Lugar (#)"
          ></Input>
          <div>
            <label className="radio-button-label">Modo:</label>
            <RadioButtonRN
              options={modeOptions}
              selectedOption={filters.modeOption}
              onValueChange={(event) =>
                setFilter("modeOption", event.target.value)
              }
            />
          </div>
          {isHaveMode ? (
            <div>
              <label className="radio-button-label">Tengo:</label>
              <RadioButtonRN
                options={haveOptions}
                selectedOption={filters.haveOption}
                onValueChange={(event) =>
                  setFilter("haveOption", event.target.value)
                }
              />
            </div>
          ) : (
            <div>
              <label className="radio-button-label">Tengo:</label>
              <RadioButtonRN
                options={duplicatedOptions}
                selectedOption={filters.duplicatedOption}
                onValueChange={(event) =>
                  setFilter("duplicatedOption", event.target.value)
                }
              />
            </div>
          )}
        </div>
        <div className="cards-list">
          {colectionToShow.map((countryItems, countryIndex) =>
            countryItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                changeStickerStatus={changeStickerStatus}
                countryIndex={countryIndex}
                isHaveMode={isHaveMode}
              ></Card>
            ))
          )}
        </div>
      </form>
    </div>
  );
};

export default List;
