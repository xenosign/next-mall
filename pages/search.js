/* eslint-disable react-hooks/rules-of-hooks */
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Head from "next/head";

export default function search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

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
