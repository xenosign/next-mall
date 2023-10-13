import Image from "next/image";

export default function Test() {
  return (
    <>
      <div style={{ position: 'relative', width: '50%', height: '200px' }}>
        <Image
          src="/images/product.jpeg"
          alt="상품 이미지"
          fill
          objectFit="cover"
        />
      </div>
    </>
  );
}
