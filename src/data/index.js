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
    "Arabia Saudita",
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
    "Estados Unidos",
    "Francia",
    "Gales",
    "Ghana",
    "Holanda",
    "Inglaterra",
    "Iran",
    "Japon",
    "marruecos",
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

export const getFilteredData = ({
  country: countryFilter,
  have: haveFilter,
  haveGold: haveGoldFilter,
  name: nameFilter,
  id: idFilter,
}) =>
  data.data.map((item, index) => {
    const { have, haveGold, name, id } = item;

    const country = data.countryMapping[index];
    const matchCountry = country === countryFilter || !countryFilter;
    const matchHave = have === haveFilter || !haveFilter;
    const matchHaveGold = haveGold === haveGoldFilter || !haveGoldFilter;
    const matchName = name === nameFilter || !nameFilter;
    const matchId = id === idFilter || !idFilter;

    const isMatch =
      matchCountry && matchHave && matchHaveGold && matchName && matchId;

    return isMatch ? item : null;
  });

export default data;
