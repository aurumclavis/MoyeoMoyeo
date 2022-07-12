export default function RandomCoverImg(dataCategory: string | null) {
  const eventCategory = [
    "클래식",
    "콘서트",
    "문화교양/강좌",
    "전시/미술",
    "축제",
  ];
  const random = Math.floor(Math.random() * 100) % 3;
  if (dataCategory === eventCategory[0]) {
    if (random === 0) return "/randomCoverImg/classic/classic1.jpg";
    if (random === 1) return "/randomCoverImg/classic/classic2.jpg";
    if (random === 2) return "/randomCoverImg/classic/classic3.jpg";
  }
  if (dataCategory === eventCategory[1]) {
    if (random === 0) return "/randomCoverImg/concert/concert1.jpg";
    if (random === 1) return "/randomCoverImg/concert/concert2.jpg";
    if (random === 2) return "/randomCoverImg/concert/concert3.jpg";
  }
  if (dataCategory === eventCategory[2]) {
    if (random === 0)
      return "/randomCoverImg/culture&lecture/culture&lecture1.jpg";
    if (random === 1)
      return "/randomCoverImg/culture&lecture/culture&lecture2.jpg";
    if (random === 2)
      return "/randomCoverImg/culture&lecture/culture&lecture3.jpg";
  }
  if (dataCategory === eventCategory[3]) {
    if (random === 0)
      return "/randomCoverImg/exhibition&art/exhibition&art1.jpg";
    if (random === 1)
      return "/randomCoverImg/exhibition&art/exhibition&art2.jpg";
    if (random === 2)
      return "/randomCoverImg/exhibition&art/exhibition&art3.jpg";
  }
  if (dataCategory === eventCategory[4]) {
    if (random === 0) return "/randomCoverImg/market/market1.jpg";
    if (random === 1) return "/randomCoverImg/market/market2.jpg";
    if (random === 2) return "/randomCoverImg/market/market3.jpg";
  }
}
