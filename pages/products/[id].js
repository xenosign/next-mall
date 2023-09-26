import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>{id} 에 대한 페이지</div>
  )
}
