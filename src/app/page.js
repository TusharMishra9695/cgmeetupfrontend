"use client";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { postAPI } from "@/utils/apiCalls";

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  async function onSubmit(item) {
    try {
      let result = await postAPI("http://localhost:5000/api/signin", item);
      if (result.success) {
        localStorage.setItem("jwtToken", result.token); // storing token after successful sign up
        router.push("/dashboard");
      }
    } catch (e) {
      console.log(e, "some thing went wrong");
    }
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
      <ToastContainer />
    </div>
  );
}
