import { useState, useEffect } from "react";
import {
  projectStorage,
  // projectFirestore,
  // timestamp,
} from "../firebase/config";
import { v4 as uuidv4 } from "uuid";

// 1. Take the Description from inout screen OR
// 1. URL from from server
// 2. Take Naver id and name from input screen
// 3. Get UUID from server
// 4. Get Timestamp from server

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;
    // references
    const storageRef = projectStorage.ref("BUGENGLISH_IMAGES").child(uuidv4());
    // const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imgUrl = await storageRef.getDownloadURL();
        setUrl(imgUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
