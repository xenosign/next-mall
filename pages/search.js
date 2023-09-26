import { useRouter } from "next/router";

export default function search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <h1>검색 결과</h1>
      <h2>{q} 검색 결과</h2>
    </>
  )
}
