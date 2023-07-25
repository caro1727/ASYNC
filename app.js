const URL = "https://pokeapi.co/api/v2/pokemon/";
const dataApi = [];

const dataApiTwo = [];

const getApi = async (URL) => {
  const resolve = await fetch(URL);
  const resolveJSON = await resolve.json();
  const respuestaURL = resolveJSON.results;
  //   console.log(respuestaURL);
  for (let i = 0; i < respuestaURL.length; i++) {
    const datos = respuestaURL[i];
    // console.log(datos);
    const url = datos.url;
    // console.log(url);
    const obteniendoDataURL = async (url) => {
      const resolve = await fetch(url);
      const resolveJSON = await resolve.json();
      const respuestaURL = resolveJSON;
      const name = respuestaURL.name;
      const id = respuestaURL.id;
      const createObjet = {
        name: name,
        id: id,
      };
      dataApi.push(createObjet);
    };
    await obteniendoDataURL(url);
  }
};
const consumirData = (data) => {
  //   console.log("***********************");
  //   console.log(data);
};

const getApiTwo = async (URL) => {
  const funcionGet = async (URL) => {
    const resolve = await fetch(URL);
    const resolveJSON = await resolve.json();
    const resultado = resolveJSON;

    // console.log(resultado);
    enviarData(resultado);
  };

  const recorrido = (conteo) => {
    for (let i = 0; i <= conteo; i++) {
      const urlData = URL + i;
      //   console.log(urlData);
      funcionGet(urlData);
    }
  };

  recorrido(40);

  const enviarData = (data) => {
    // console.log(data);

    // console.log(data.name);

    const name = data.name;
    const id = data.id;
    const weight = `${data.weight} Kg`;

    const objetoCreatdo = {
      name: name,
      id: id,
      weight: weight,
    };

    dataApiTwo.push(objetoCreatdo);
  };
};

const verData = (data) => {
  console.log(data);
};

(async () => {
  await getApiTwo(URL);
  await getApi(URL);
  consumirData(dataApi);
  verData(dataApiTwo);
})();
