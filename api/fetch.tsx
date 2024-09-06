import axios from "axios";

export async function fetchData(item: any) {
  const url = `https://dummyjson.com/products/${item}`;

  try {
    const res = await fetch(url, { cache: "force-cache" });

    if (res.status !== 200) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const jaja = ""