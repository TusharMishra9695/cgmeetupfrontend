import axios from "axios";

export async function getAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(url, "something went wrong");
  }
}

export async function postAPI(url, formdata) {
  try {
    const response = await axios.post(url, formdata);
    return response.data;
  } catch (e) {
    console.log(url, "something went wrong");
  }
}
