import React, { useEffect, useState } from "react";

const useContent = (data) => {
  const [content, setContent] = useState();

  useEffect(() => {
    if (data?.sections?.length) {
      let temObject = {};
      for (let section of data?.sections) {
        temObject[section?.title] = section?.items;
      }
      setContent(temObject);
    }
  }, [data]);
  return { content };
};

export default useContent;
