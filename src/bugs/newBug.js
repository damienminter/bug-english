import {
    projectStorage,
    timestamp,
  } from "../firebase/config";

const newBug = (url) => {
//   const [description, setDescription] = useState(null);
  const newBug = {
      description: "testing testing testing",
      compId: "11764793",
      compName: "testComp",
  }

useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");


async () => {
    console.log(newBug);
    const url = await storageRef.getDownloadURL();
    const createdAt = timestamp();
    await collectionRef.add({ newBug, url, createdAt });
    
  }

}, [url])

return {url};

export default newBug;

// console.log("this is a new bug ")

// // need to look at how the bug is being added to firebase as I am just trying to create an object

//     // id: AUTOMATICALLY FROM FIREBASE
//     timeStamp: createdAt
//     img: await storageRef.getDownloadURL()
//     text: bugValues.bugDescription,
//     name: place.name,
//     compId: place.id,
//   };

  export default newBug;