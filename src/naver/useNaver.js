import { useEffect } from "react";
import { searchNaverAction } from "../redux/actions";
import { useDispatch } from "react-redux";
const axios = require("axios");

// TO DO:

// 1. Remove coords or update based on person location
// 2. Clear linting error

const useNaver = (input) => {
  const dispatchPlace = useDispatch();

  useEffect(() => {
    const fetchResults = async (query) => {
      if (!query) return;
      const config = {
        method: "get",
        url: `https://map.naver.com/v5/api/search?caller=pcweb&query=${query}&type=all&searchCoord=127.01173782348604;37.496686389783726&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=en`,

        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4",
          "cache-control": "no-cache",
          "content-type": "application/json",
          // expires: "Sat, 01 Jan 2000 00:00:00 GMT",
          pragma: "no-cache",
        },
        referrer: "https://map.naver.com/",
      };

      try {
        const res = await axios(config);
        const naverResult = res.data.result.place.list;

        dispatchPlace(searchNaverAction(naverResult));
        console.log(naverResult);
      } catch (error) {
        // Handle Error
        alert(error);
      }
    };
    fetchResults(input);
  }, [input, dispatchPlace]);
};

export default useNaver;
