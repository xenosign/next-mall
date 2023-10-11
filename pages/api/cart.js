let cart = [1, 2, 3];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(cart);
  } else if (req.method === 'PUT') {
    cart = ['a', 'b', 'c'];
    return res.status(200).json(cart);
  } else {
    return res.sendStatus(404);
  }
}