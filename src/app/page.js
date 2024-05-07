"use client";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { postAPI } from "@/utils/apiCalls";

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  async function onSubmit(item) {
    console.log(item, "item kya hai");
  }

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome ! Sign In Now</h1>
          <div className={styles.detail}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required*",
              })}
            />
          </div>
          <div className={styles.detail}>
            <input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "This field is required*",
              })}
            />
          </div>
          <div>
            <button type="submit">sign in</button>
          </div>
          <h1>
            Don't have account ?{" "}
            <Link href="/signup">
              <span>Signup Now </span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
