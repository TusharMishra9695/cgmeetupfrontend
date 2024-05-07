"use client";
import styles from "../page.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
export default function page() {
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
          <h1>Welcome ! Sign Up Now</h1>
          <div className={styles.detail}>
            <input
              type="text"
              placeholder="FirstName"
              {...register("firstname", {
                required: "This field is required*",
              })}
            />
          </div>
          <div className={styles.detail}>
            <input
              type="text"
              placeholder="LastName"
              {...register("lastname", {
                required: "This field is required*",
              })}
            />
          </div>
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
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "This field is required*",
              })}
            />
          </div>
          <div className={styles.detail}>
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "This field is required*",
              })}
            />
          </div>
          <div className={styles.detail}>
            <input
              type="username"
              placeholder="Username"
              {...register("username", {
                required: "This field is required*",
              })}
            />
          </div>
          <div>
            <button type="submit">sign up</button>
          </div>
          <h1>
            Already have account ?
            <Link href="/">
              <span> SignIn Now </span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
