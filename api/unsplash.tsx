// import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { query } = req.query;

//   if (!UNSPLASH_ACCESS_KEY) {
//     return res
//       .status(500)
//       .json({ error: "Unsplash Access Key is not defined" });
//   }

//   try {
//     const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//       params: {
//         query,
//         client_id: UNSPLASH_ACCESS_KEY,
//         per_page: 10,
//       },
//     });

//     const images = response.data.results.map((result: any) => ({
//       id: result.id,
//       url: result.urls.regular,
//       description: result.alt_description,
//     }));

//     res.status(200).json(images);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch images" });
//   }
// };

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function getData() {
  const res = await fetch(
    "https://api.unsplash.com/photos/?client_id=$" + UNSPLASH_ACCESS_KEY
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { query } = req.query;

//   if (!UNSPLASH_ACCESS_KEY) {
//     return res
//       .status(500)
//       .json({ error: "Unsplash Access Key is not defined" });
//   }

//   try {
//     const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//       params: {
//         query,
//         client_id: UNSPLASH_ACCESS_KEY,
//         per_page: 10,
//       },
//     });

//     const images = response.data.results.map((result: any) => ({
//       id: result.id,
//       url: result.urls.regular,
//       description: result.alt_description,
//     }));

//     res.status(200).json(images);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch images" });
//   }
// };
