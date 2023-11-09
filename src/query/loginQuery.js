import axios from "axios";
import { toast } from "react-toastify";

async function loginQuery({ userData }) {
  try {
    const response = await axios.post("http://localhost:3001/login", userData);
    if (response.status === "ok") {
      localStorage.setItem("token", response.token);
      return toast.success("Successful login!");
    } else {
      return toast.error("Invalid username/password");
    }
  } catch (error) {
    return toast.error("An error occurred. Please try again.");
  }
}

export default loginQuery;
