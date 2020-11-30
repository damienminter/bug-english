import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCompanyAction } from "../../redux/actions";
const axios = require("axios");

const useNaverItem = (input) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchResults = async (queryId) => {
      if (!queryId) return;
      const config = {
        method: "get",
        url: `https://map.naver.com/v5/api/sites/summary/${queryId}?lang=en`,

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

        const naverResultItem = res.data;
        dispatch(addCompanyAction(naverResultItem));
      } catch (error) {
        // dispatch(addCompanyAction());
        console.log(error);
      }
    };
    fetchResults(input);
  }, [input, dispatch]);
};

export default useNaverItem;
