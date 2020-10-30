import { useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

const usePostBug = (url) => {
  const newBug = {
    description: "testing testing testing",
    url: url,
    compId: "11764793",
    compName: "testComp",
  };

  useEffect(() => {
    // references
    const collectionRef = projectFirestore.collection("images");

    const postData = async () => {
      console.log(newBug);
      const createdAt = timestamp();
      await collectionRef.add({ newBug, createdAt });
    };
    postData(url);
  }, [url, newBug]);

  return url;
};
// console.log("this is a new bug ")

// // need to look at how the bug is being added to firebase as I am just trying to create an object

//     // id: AUTOMATICALLY FROM FIREBASE
//     timeStamp: createdAt
//     img: await storageRef.getDownloadURL()
//     text: bugValues.bugDescription,
//     name: place.name,
//     compId: place.id,
//   };

export default usePostBug;
