import defaultSet from "./defaultSet.js";

export default function createElement(array) {
  defaultSet.bodySetting();
  for (let key of array) {
    let newElement = document.createElement("li");
    let newElementImg = document.createElement("img");
    defaultSet.liSetting(newElement, key.name);
    defaultSet.imgSetting(newElementImg, key.img);
    document.body.appendChild(newElement);
    document.body.appendChild(newElementImg);
  }
}
