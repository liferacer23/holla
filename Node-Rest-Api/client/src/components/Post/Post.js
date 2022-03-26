import { useState, useEffect } from "react";
import styles from "./Post.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";

import {Link} from 'react-router-dom'

export default function Post({ data }) {
  const [likes, setLikes] = useState(data.likes.length);
  const [comments, setComments] = useState(data.comments.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState({});
  //const user = Users.filter((u)=>u.id===data.userId);
  useEffect(() => {
    axios.get(`users/${data.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [data.userId]);
  const likeHandler = (liked) => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
    }
  };
  return (
    <div className={styles.postContainer}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postLeft}>
            <Link to ={`profile/${user._id}`}>

            <img
              className={styles.postProfileImg}
              src={
                user.profilePicture
                ? user.profilePicture
                : "/assets/person/noAvatar.png"
              }
              alt=""
              />
              </Link>
            <span className={styles.postUserName}>{user.username}</span>
            <span className={styles.postTime}>{data.createdAt}</span>
          </div>
          <div className={styles.postRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.postMiddle}>
          <span className={styles.postText}>{data?.description}</span>
          <img className={styles.postImg} src={data.image} alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <ThumbUpIcon
              onClick={() => {
                likeHandler(liked);
              }}
              htmlColor="#345eeb"
              className={styles.likeIcon}
            />
            <span className={styles.postBottomLeftText}>{likes} liked it</span>
          </div>

          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>{comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
