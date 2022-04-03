import styles from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MoreIcon from '@mui/icons-material/More';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
export default function Share() {
  const {user} = useContext(AuthContext)
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img className={styles.shareTopImg} src={user.profilePicture?user.profilePicture:"/assets/person/noAvatar.png"} alt="" />
          <input
            className={styles.shareInput}
            placeholder="Whats on your mind..."
            type="text"
          />
        </div>
        <hr className={styles.shareHr} />

        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMediaIcon  htmlColor="orange" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <MoreIcon htmlColor="green" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <FmdGoodIcon htmlColor="blue" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotionsIcon htmlColor="gold" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Mood</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
