import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import { postsContext } from "../shared/context/PostsContext";

interface IPostsData {
    posts?: [];
  }

export function usePostsData() {
    const [data, setData] = useState<IPostsData>({});
    const token = useContext(tokenContext)
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
          headers: {Authorization: `Bearer ${token}`}
        })
        .then((resp) => {
          const postsData = resp.data.data.children;
          console.log({ postsData})
          setData({ posts: postsData});
        })
        .catch(console.log)
      }, [token]);

      return [data]
}