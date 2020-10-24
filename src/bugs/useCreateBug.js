import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// import { addBugAction, selectBugAction } from "../redux/actions";

export default useCreateBug = (bugValues) => {
  //   const dispatchBug = useDispatch();
  const place = useSelector((state) => state.searchResult);

  const newBug = {
    id: uuidv4(),
    // timeStamp: new Date(),
    timeStamp: "10.30",
    name: bugValues.bugName,
    img: "url of the image",
    description: bugValues.bugDescription,
    compId: place.id,
  };
  return "";
};
