import alemania from "./alemania";
import arabiaSaudita from "./arabiaSaudita";
import argentina from "./argentina";
import australia from "./australia";
import belgica from "./belgica";
import brasil from "./brasil";
import camerun from "./camerun";
import canada from "./canada";
import catar from "./catar";
import corea from "./corea";
import costaRica from "./costaRica";
import croacia from "./croacia";
import dinamarca from "./dinamarca";
import ecuador from "./ecuador";
import espana from "./espana";
import estadosUnidos from "./estadosUnidos";
import francia from "./francia";
import gales from "./gales";
import ghana from "./ghana";
import holanda from "./holanda";
import inglaterra from "./inglaterra";
import iran from "./iran";
import japon from "./japon";
import marruecos from "./marruecos";
import mexico from "./mexico";
import polonia from "./polonia";
import portugal from "./portugal";
import senegal from "./senegal";
import serbia from "./serbia";
import suiza from "./suiza";
import tunez from "./tunez";
import uruguay from "./uruguay";

const data = {
  countryMapping: [
    "Alemania",
    "ArabiaSaudita",
    "Argentina",
    "Australia",
    "Belgica",
    "Brasil",
    "Camerun",
    "Canada",
    "Catar",
    "Corea",
    "CostaRica",
    "Croacia",
    "Dinamarca",
    "Ecuador",
    "España",
    "EstadosUnidos",
    "Francia",
    "Gales",
    "Ghana",
    "Holanda",
    "Inglaterra",
    "Iran",
    "Japon",
    "Marruecos",
    "Mexico",
    "Polonia",
    "Portugal",
    "Senegal",
    "Serbia",
    "Suiza",
    "Tunez",
    "Uruguay",
  ],
  data: [
    alemania,
    arabiaSaudita,
    argentina,
    australia,
    belgica,
    brasil,
    camerun,
    canada,
    catar,
    corea,
    costaRica,
    croacia,
    dinamarca,
    ecuador,
    espana,
    estadosUnidos,
    francia,
    gales,
    ghana,
    holanda,
    inglaterra,
    iran,
    japon,
    marruecos,
    mexico,
    polonia,
    portugal,
    senegal,
    serbia,
    suiza,
    tunez,
    uruguay,
  ],
};

export const getFilteredData = (
  oldData,
  {
    country: countryFilter = "",
    duplicatedOption = "todas",
    haveOption = "todas",
    modeOption = "have",
    name: nameFilter = "",
    id: idFilter,
  }
) =>
  oldData.data.map((countryItem = [], index) => {
    const filteredData = countryItem.filter((item) => {
      const { have, haveGold, name, id, duplicated } = item;

      const country = oldData.countryMapping[index];
      const matchCountry =
        country.toLowerCase().includes(countryFilter.toLowerCase()) ||
        !countryFilter;
      const matchName =
        name.toLowerCase().includes(nameFilter.toLowerCase()) || !nameFilter;
      const matchId = id.toString() === idFilter || !idFilter;

      let matchHave = true;
      switch (haveOption) {
        case "no":
          matchHave = !have && !haveGold;
          break;
        case "comun":
          matchHave = have && !haveGold;
          break;
        case "dorada":
          matchHave = have && haveGold;
          break;
        default:
          matchHave = true;
          break;
      }

      let matchDuplicated = true;
      switch (duplicatedOption) {
        case "no":
          matchDuplicated = !duplicated;
          break;
        case "si":
          matchDuplicated = duplicated > 0;
          break;
        default:
          matchDuplicated = true;
          break;
      }

      const matchMode = modeOption === "have" ? matchHave : matchDuplicated;

      const isMatch = matchCountry && matchMode && matchName && matchId;

      return isMatch ? item : null;
    });

    return filteredData;
  });

export default data;
