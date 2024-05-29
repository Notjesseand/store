import axios from "axios";

export async function fetchData(item:string) {
  const url = `https://dummyjson.com/products/category/${item}`;

  try {
    const res = await axios.get(url);

    if (res.status!==200) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
