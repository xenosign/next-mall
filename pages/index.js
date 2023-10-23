import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Head from "next/head";

// 정적 생성시, props 받아서 내려줌
// 이름은 getStaticProps 고정
export async function getStaticProps() {
  const res = await axios.get("/products");
  const products = res.data.results;

  return {
    props: {
      products,
    }
  }
}

export default function Home() {
  // 기존에는 랜더가 완료 되고, js 가 실행 되는 시점에서 react hook 으로 데이터를 받아왔지만
  // 위의 코드로 변경해서 이제는 정적 생성에서부터 데이터를 받아서 처리함

  // const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const res = await axios.get("/products");
  //   const nextProducts = res.data.results;
  //   setProducts(nextProducts);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  );
}
