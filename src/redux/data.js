import { v4 as uuidv4 } from "uuid";

export const initialState = {
  bugs: [
    {
      id: uuidv4(),
      timeStamp: "10.30",
      name: "McDonalds",
      img: "url of the image",
      description:
        "Come and join the incredible super team at the most optimum place that you can elevate your english language skill ability to benefit your future generations and beyond",
      compId: 18777471,
    },
    {
      id: uuidv4(),
      timeStamp: "10.30",
      name: "Samsung",
      img: "url of the image",
      description: "The no-one place to get a TV",
      compId: "11764793",
    },
    {
      id: uuidv4(),
      timeStamp: "10.30",
      name: "Hanwah",
      img: "url of the image",
      description: "We are your friend",
      compId: "13450993",
    },
    {
      id: uuidv4(),
      timeStamp: "10.30",
      name: "Tims BBQ",
      img: "url of the image",
      description: "All the cow and the pig you wonder",
      compId: 18777472,
    },
    {
      id: uuidv4(),
      timeStamp: "10.30",
      name: "McDonalds",
      img: "url of the image",
      description: "Enjoy life of the BigMac Holiday",
      compId: 18777471,
    },
  ],
  bug: {},
  filterBugs: [],
  companies: [
    // {
    //   id: "18777471",
    //   name: "McDonalds",
    //   logo: "url of the logo",
    //   website: "www.mcDonalds.com",
    //   email: "mcDonalds@naver.com",
    // },
    // {
    //   id: "2",
    //   name: "Samsung",
    //   logo: "url of the logo",
    //   website: "www.samsung.com",
    //   email: "samsung@naver.com",
    // },
    // {
    //   id: "3",
    //   name: "Hanwah",
    //   logo: "url of the logo",
    //   website: "www.hanwah.com",
    //   email: "hanwah@naver.com",
    // },
  ],
  company: {},
  searchResults: [],
  searchResult: {},
};
