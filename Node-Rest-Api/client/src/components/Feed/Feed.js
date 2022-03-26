import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";
export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/posts/timeline/62313af5398bffdb03122de1').then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className={styles.feedContainer}>
      <div className={styles.feedWrapper}>
        <Share />
        {posts.map((data) => {
          return <Post key={data._id} data={data} />;
        })}
      </div>
    </div>
  );
}
