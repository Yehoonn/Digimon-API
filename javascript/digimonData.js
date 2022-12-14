// export default async function digimonData() {
//   let dataObject = {
//     nameArray: [],
//     imgArray: [],
//   };

//   let response = await fetch("https://digimon-api.vercel.app/api/digimon");
//   let result = response.json();
//   return result.then((value) => {
//     for (let key of value) {
//       dataObject.nameArray.push(key.name);
//       dataObject.imgArray.push(key.img);
//     }
//     return dataObject;
//   });
// }

// export const digimonData = async () => {
//   return await fetch("https://digimon-api.vercel.app/api/digimon")
//     .then(async (res) => {
//       let dataObject = {
//         nameArray: [],
//         imgArray: [],
//       };

//       const data = await res.json();
//       for (let key of data) {
//         dataObject.nameArray.push(key.name);
//         dataObject.imgArray.push(key.img);
//       }

//       return dataObject;
//     })
//     .catch((err) => {
//       console.log(err);
//       throw new Error(err);
//     });
// };

const digimonData = async () => {
  return await fetch("https://digimon-api.vercel.app/api/digimon").then(
    async (res) => {
      return await res.json();
    }
  );
};

export default digimonData;
