import createElement from "./createElement.js";
import AddText from "./textAdd.js";
import digimonData from "./digimonData.js";
import defaultSet from "./defaultSet.js";

defaultSet.flexSetting(document.body, "center", "center");
document.body.style.flexWrap = "wrap";

digimonData().then((value) =>
  setTimeout(() => {
    createElement(value);

    AddText("");
  }, 100)
);
