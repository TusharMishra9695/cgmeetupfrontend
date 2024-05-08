"use client";
import styles from "../app/page.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Header() {
  const followersCount = useSelector((state) => state.addFollowers.value);

  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("jwtToken");
    router.push("/");
  }

  return (
    <div className={styles.headers}>
      <div className={styles.icon_flex}>
        <span>
          <AccountCircleIcon fontSize="large" className={styles.user_icon} />
        </span>
        <span className={styles.follow_btn}>
          Followers : {followersCount || 0}
        </span>
      </div>
      <span className={styles.follow_btn} onClick={() => handleLogout()}>
        Logout
      </span>
    </div>
  );
}
