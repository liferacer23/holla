import { useState, useEffect,useContext } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
export default function Feed({username}) {
  const {user} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  console.log(user);
  useEffect(() => {
    username
    ? axios.get(`/posts/profile/${username}`).then((res) => {
      setPosts(res.data);
    }) 
    : axios.get(`/posts/timeline/${user._id}`).then((res) => {
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
