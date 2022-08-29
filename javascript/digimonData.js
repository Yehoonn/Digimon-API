export default async function digimonData() {
  let dataObject = {
    nameArray: [],
    imgArray: [],
  };

  let response = await fetch("https://digimon-api.vercel.app/api/digimon");
  let result = response.json();
  result.then((value) => {
    for (let key of value) {
      dataObject.nameArray.push(key.name);
      dataObject.imgArray.push(key.img);
    }
  });
  return dataObject;
}
