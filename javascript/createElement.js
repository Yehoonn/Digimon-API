import defaultSet from "./defaultSet.js";

export default function createElement(array) {
  let count = 0;
  defaultSet.bodySetting();
  for (let key of array.nameArray) {
    let newElement = document.createElement("li");
    let newElementImg = document.createElement("img");
    defaultSet.liSetting(newElement, key);
    defaultSet.imgSetting(newElementImg, array.imgArray[count]);
    document.body.appendChild(newElement);
    document.body.appendChild(newElementImg);
    count++;
  }
}
