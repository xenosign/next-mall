import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";
import Image from "next/image";

// 어떤 파일을 만들어야 하는지 알려주는 함수
export async function getStaticPaths() {
  // 미리 아이템 정보를 받아서 paths 를 전부 정적 생성하는 코드 추가
  const res = await axios.get('/products/');
  const products = res.data.results;
  // 아이템 리스트를 받아서, paths 라는 객체로 만들어서 한번에 전달
  const paths = products.map((product) => ({
    params: { id: String(product.id) }
  }));

  return {
    paths,
    //  [ // 페이지 2개를 정적 생성
    //   {
    //     params: { id: '1' }
    //   },
    //   {
    //     params: { id: '2' }
    //   }
    // ],

    // 없는 경로에 대한 처리 방법
    // flase -> 별도로 처리 안함, 다른 요청이 들어오면 404 띄움
    // true -> paths 에서 설정 안한 값 들어오면 getStaticProps 실행시켜서 다시 정적 배포 실행
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const productId = context.params['id'];
  // 잘못된 ID를 입력하면 404로 안가고, 에러가 뜨는 것을 방지하기 위한 Try-catch 적용
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      // catch 문 실행시, 404 페이지로 보내는 옵션
      notFound: true,
    }
  }

  return {
    props: {
      product
    }
  }

}

export default function Products({ product }) {
  // const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  // async function getProduct(targetId) {
  //   const res = await axios.get(`/products/${targetId}`);
  //   const nextProduct = res.data;
  //   setProduct(nextProduct);
  // }

  async function getSizeReviews(targetId) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  }

  useEffect(() => {
    if (!id) return;

    // getProduct(id);
    getSizeReviews(id);

  }, [id])

  if (!product) return (
    <div>
      <h1>로딩 중....</h1>
    </div>
  );

  return (
    <div>
      <h1>{product.name}</h1>
      <div style={{ position: 'relative', width: '50%', height: '300px' }}>
        <Image fill src={product.imgUrl} alt={product.name} />
      </div>
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  )
}
