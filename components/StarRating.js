const RATINGS = [1, 2, 3, 4, 5];

export default function StarRating({ value = 1 }) {
  return (
    <span>
      {/* 스타일 참고             */}
      {RATINGS.map((rating) => (value >= rating ? "★" : "✩"))}
    </span>
  );
}
6;
