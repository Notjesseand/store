export async function fetchAll() {
  const url = `https://dummyjson.com/products/`;

  try {
    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 21600 },
    });

    if (res.status !== 200) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
