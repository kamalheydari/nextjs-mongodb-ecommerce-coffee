import nc from "next-connect";

import db from "lib/db";
import Product from "models/Product";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();

  const products = await Product.find({}).lean();

  await db.disconnect();

  res.send(products);
});

export default handler;
