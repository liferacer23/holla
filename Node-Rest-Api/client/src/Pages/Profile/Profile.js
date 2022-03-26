import Feed from "../../components/Feed/Feed";
import LeftBar from "../../components/LeftBar/LeftBar";
import Navbar from "../../components/Navbar/Navbar";
import RightBar from "../../components/RightBar/RightBar";
import styles from "./Profile.module.css";
import { Users } from "../../dummyData";
export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className={styles.profileContainer}>
        <LeftBar users={Users} />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileImages}>
              <img
                className={styles.profileCoverImg}
                src="/assets/person/noCover.png"
                alt=""
              />
              <img
                className={styles.profileUserImg}
                src="/assets/person/3.jpg"
                alt=""
              />
            </div>
            <div className={styles.profileInfo}>
          <h3 className={styles.profileInfoName}> Tracy Macgrady</h3>
           <p className={styles.profileInfoDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ea incidunt quam labore omnis quo temporibus! Obcaecati quia expedita, minus eveniet, laudantium laboriosam placeat, modi enim explicabo quibusdam perspiciatis provident.</p>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <RightBar profile users={Users} />
          </div>
        </div>
      </div>
    </div>
  );
}
