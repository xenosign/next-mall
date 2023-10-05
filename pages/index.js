import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Tetz Mall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/1">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/1">세 번째 상품</Link>
        </li>
      </ul>
      <h2>what</h2>
    </>
  )
}
