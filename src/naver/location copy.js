const axios = require("axios");
//cors-anywhere.herokuapp.com/
// X-NCP-APIGW-API-KEY-ID
const CLIENT_ID = "18ilnjdig8";
const CLIENT_SECRET = "YPhNAGT67OKlMi17khdUFOTRDNijvoI1HDlGQKan";

const address = "다이소 봉천2호점";
// const coords = "127.1054328,37.3595963";
// &coordinate=${coords}

async function makeRequest() {
  const config = {
    method: "get",
    url: `https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
    headers: {
      "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
      "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
    },
  };

  let res = await axios(config);

  console.log(res);
}

export default makeRequest;
