import { useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../../firebase/config";

const usePostBug = (bug) => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (!bug) return;
    setMsg("adding to database");
    // references
    const collectionRef = projectFirestore.collection("BUGENGLISH_BUGS");

    const postData = async () => {
      const createdAt = await timestamp(); // I added await on server stamp
      await collectionRef.add({ ...bug, createdAt });
      setMsg("Success");
    };
    postData(bug);
  }, [bug]);

  return { msg };
};

export default usePostBug;
