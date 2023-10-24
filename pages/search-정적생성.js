/* eslint-disable react-hooks/rules-of-hooks */
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import Head from "next/head";

// 서버 사이드 랜더링용 함수, 정적 생성과 용법은 비슷
export async function getServerSideProps(context) {
  const q = context.query['q'];

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results;

  return {
    props: {
      products,
      q
    }
  }
}

export default function search({ q, products }) {
  return (
    <>
      <Head>
        <title>검색 결과</title>
      </Head>
      <h1>검색 결과</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </>
  );
}
