// 요청 주소는 localhost:3000/api/cart
// 폴더 -> 파일명을 따른다

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