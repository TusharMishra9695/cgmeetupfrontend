"use client";
import styles from "../page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      /// securing dashboard page, If there is a token then only user entered in dashboard
      router.push("/");
    }
  }, []);
  return <div className={styles.main}>page</div>;
}
