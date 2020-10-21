import { searchNaverAction } from "../redux/actions";
import { useDispatch } from "react-redux";
const axios = require("axios");

// const mapApi = `https://map.naver.com/v5/api/search?caller=pcweb&query=bmw&type=all&searchCoord=127.01173782348604;37.496686389783726&page=1&displayCount=20&isPlaceRecommendationReplace=${isPlaceRecommendationReplace}&lang=${lang}`;

async function useNaver() {
  const dispatchPlace = useDispatch();

  try {
    const config = {
      method: "get",
      url:
        "https://map.naver.com/v5/api/search?caller=pcweb&query=bmw&type=all&searchCoord=127.01173782348604;37.496686389783726&page=1&displayCount=5&isPlaceRecommendationReplace=true&lang=ko",

      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4",
        "cache-control": "no-cache",
        "content-type": "application/json",
        expires: "Sat, 01 Jan 2000 00:00:00 GMT",
        pragma: "no-cache",
      },
      referrer: "https://map.naver.com/",
    };

    let res = await axios(config);

    let naverResult = res.data.result.place.list;
    const places = dispatchPlace(searchNaverAction(naverResult));
    console.log(places);
  } catch (error) {
    console.log(error);
  }
}

export default useNaver;
