import axios from "axios";

const testRoute = async () => {
  try {
    const response = await axios.get("/api/test");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { testRoute };
