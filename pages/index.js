import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <h1 className={styles.title}>Tetz Mall</h1>
      <SearchForm />
      <ProductList products={products} />
      <Link href="/products/1">첫 번째 상품</Link>
    </>
  )
}
