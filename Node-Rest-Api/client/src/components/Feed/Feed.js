import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";
export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    username
    ? axios.get(`/posts/profile/${username}`).then((res) => {
      setPosts(res.data);
    }) 
    : axios.get('/posts/timeline/62313adb398bffdb03122ddd').then((res) => {
      setPosts(res.data);
    });
   
  }, [username]);
  return (
    <div className={styles.feedContainer}>
      <div className={styles.feedWrapper}>
        <Share />
        {posts.map((data) => {
          return (<Post key={data._id} data={data} />);
        })}
      </div>
    </div>
  );
}
