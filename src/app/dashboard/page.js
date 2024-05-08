"use client";
import styles from "../page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import { getAPI } from "@/utils/apiCalls";
import { useState } from "react";

export default function page() {
  const [userList, setUserList] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      handleUserList(token);
    } else {
      router.push("/");
    }
  }, []);
  async function handleUserList(token) {
    try {
      let item = await getAPI("http://localhost:5000/api/user-list", token);
      setUserList(item.result);
    } catch (e) {
      console.log(e, "some error happen");
    }
  }
  return (
    <div>
      <Header />
      {userList &&
        userList.map((item, id) => {
          return <UserList key={id} item={item} />;
        })}
    </div>
  );
}
