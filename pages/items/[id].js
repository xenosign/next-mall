import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";
import Image from "next/image";

export async function getServerSideProps(context) {
  const productId = context.params['id'];

  // 잘못된 ID를 입력하면 404로 안가고, 에러가 뜨는 것을 방지하기 위한 Try-catch 적용
  let product;
  let sizeReviews;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;

    const resSizeReviews = await axios.get(`/size_reviews/?product_id=${productId}`);
    sizeReviews = resSizeReviews.data.results ?? [];
  } catch {
    return {
      // catch 문 실행시, 404 페이지로 보내는 옵션
      notFound: true,
    }
  }

  return {
    props: {
      product,
      sizeReviews
    }
  }

}

export default function Products({ product, sizeReviews }) {
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
