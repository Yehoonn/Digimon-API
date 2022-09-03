import createElement from "./createElement.js";
import AddText from "./textAdd.js";
import defaultSet from "./defaultSet.js";
import digimonData from "./digimonData.js";

defaultSet.flexSetting(document.body, "center", "center");
document.body.style.flexWrap = "wrap";

const data = await digimonData();

createElement(data);
// AddText('');
