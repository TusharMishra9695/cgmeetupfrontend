import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    toast.error(err.message, { autoClose: 1000 });
  }
}

export async function postAPI(url, formdata) {
  try {
    const response = await axios.post(url, formdata);
    if (response.data.success) {
      toast.success(response.data.message, { autoClose: 2000 });
    } else {
      toast.error(response.data.message, { autoClose: 1000 });
    }
    return response.data;
  } catch (e) {
    console.log(url, "something went wrong");
  }
}
