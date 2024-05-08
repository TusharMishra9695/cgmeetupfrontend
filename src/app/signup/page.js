"use client";
import styles from "../page.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { postAPI } from "@/utils/apiCalls";
export default function page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      router.push("/dashboard");
    }
  }, []);
  async function onSubmit(item) {
    try {
      postAPI("http://localhost:5000/api/signup", item);
      reset();
    } catch (e) {
      console.log(e, "some thing went wrong");
    }
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
                maxLength: {
                  value: 10,
                  message: "Max 10 numbers allowed ",
                },
                minLength: {
                  value: 10,
                  message: "Enter correct number",
                },
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
      <ToastContainer />
    </div>
  );
}
