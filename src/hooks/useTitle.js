import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Curious Kids - ${title}`;
  }, [title]);
};

export default useTitle;
