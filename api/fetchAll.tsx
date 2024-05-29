export async function fetchData() {
  const url = `https://fakestoreapi.com/products/`;

  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
