const axios = require("axios");
//cors-anywhere.herokuapp.com/
// X-NCP-APIGW-API-KEY-ID
// const CLIENT_ID = "18ilnjdig8";
// const CLIENT_SECRET = "YPhNAGT67OKlMi17khdUFOTRDNijvoI1HDlGQKan";

// const address = "다이소 봉천2호점";
// const coords = "127.1054328,37.3595963";
// &coordinate=${coords}

// Map API
// const lang = "ko";
// const isPlaceRecommendationReplace = True;
// const displayCount = 20;

// const mapApi = `https://map.naver.com/v5/api/search?caller=pcweb&query=bmw&type=all&searchCoord=127.01173782348604;37.496686389783726&page=1&displayCount=20&isPlaceRecommendationReplace=${isPlaceRecommendationReplace}&lang=${lang}`;

async function makeRequestXhr() {
  try {
    const config = {
      method: "get",
      url:
        "https://map.naver.com/v5/api/search?caller=pcweb&query=bmw&type=all&searchCoord=127.01173782348604;37.496686389783726&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko",

      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4",
        "cache-control": "no-cache",
        "content-type": "application/json",
        expires: "Sat, 01 Jan 2000 00:00:00 GMT",
        pragma: "no-cache",
        // "sec-fetch-dest": "empty",
        // "sec-fetch-mode": "cors",
        // "sec-fetch-site": "same-origin",
        // cookie:
        //   "NRTK=ag#all_gr#1_ma#-2_si#0_en#0_sp#0; NNB=33LNWMS2SOBF6; nx_ssl=2; _naver_usersession_=McLJ/CIamSYChZ55T43CYhD2; page_uid=f2d04dba-84a8-4a9b-83aa-6e5a952fb9da; page_uid=UGV6Cdp0omZssAFXsyh-242202",
      },
      referrer: "https://map.naver.com/",
      // referrerPolicy: "origin",
      // body: null,
      // method: "GET",
      // mode: "cors",
    };

    let res = await axios(config);
    console.log(res.data.result.place.list);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export default makeRequestXhr;
