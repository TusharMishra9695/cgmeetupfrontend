"use client";
import styles from "../app/page.module.css";
import { useDispatch } from "react-redux";
import { addFollow } from "@/store/slice/addFollowers";
export default function UserList(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.username}>
        <h2>Username : {props.item.username}</h2>
      </div>
      <div className={styles.username}>
        <h2>FirstName : {props.item.firstname}</h2>
      </div>
      <span className={styles.follow_btn} onClick={() => dispatch(addFollow())}>
        Follow +
      </span>
    </div>
  );
}
