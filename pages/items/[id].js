import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";
import Image from "next/image";

// 어떤 파일을 만들어야 하는지 알려주는 함수
export async function getStaticPaths() {
  return {
    paths: [
      // 페이지 2개를 정적 생성
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      }
    ],
    // 없는 경로에 대한 처리 방법
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const productId = context.params['id'];
  const res = await axios.get(`/products/${productId}`);
  const product = res.data;

  return {
    props: {
      product
    }
  }

}

export default function Products() {
  // const [product, setProduct] = useState();
  // const [sizeReviews, setSizeReviews] = useState([]);
  // const router = useRouter();
  // const { id } = router.query;

  // async function getProduct(targetId) {
  //   const res = await axios.get(`/products/${targetId}`);
  //   const nextProduct = res.data;
  //   setProduct(nextProduct);
  // }

  // async function getSizeReviews(targetId) {
  //   const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
  //   const nextSizeReviews = res.data.results ?? [];
  //   setSizeReviews(nextSizeReviews);
  // }

  // useEffect(() => {
  //   if (!id) return;

  //   getProduct(id);
  //   getSizeReviews(id);

  // }, [id])

  if (!product) return null;

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
