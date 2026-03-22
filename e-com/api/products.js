import products from './products.json';   // ✅ correct

export default function handler(req, res) {
  res.status(200).json(products);
}