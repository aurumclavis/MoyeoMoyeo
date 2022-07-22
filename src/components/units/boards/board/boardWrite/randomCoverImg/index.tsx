export function randomCoverImg(dataCategory: string | null) {
  const eventCategory = [
    "플리마켓",
    "축제",
    "문화",
    "공연",
    "실외공연",
    "뮤지컬",
    "클래식",
    "전시",
    "기타",
  ];
  const random = Math.floor(Math.random() * 100) % 3;
  if (dataCategory === eventCategory[0]) {
    if (random === 0) return "/randomCoverImg/market/market1.jpg";
    if (random === 1) return "/randomCoverImg/market/market2.jpg";
    if (random === 2) return "/randomCoverImg/market/market3.jpg";
  }
  if (dataCategory === eventCategory[1]) {
    if (random === 0) return "/randomCoverImg/festival/festival1.jpg";
    if (random === 1) return "/randomCoverImg/festival/festival2.jpg";
    if (random === 2) return "/randomCoverImg/festival/festival3.jpg";
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
    if (random === 0) return "/randomCoverImg/performance/performance1.jpg";
    if (random === 1) return "/randomCoverImg/performance/performance2.jpg";
    if (random === 2) return "/randomCoverImg/performance/performance3.jpg";
  }
  if (dataCategory === eventCategory[4]) {
    if (random === 0) return "/randomCoverImg/concert/concert1.jpg";
    if (random === 1) return "/randomCoverImg/concert/concert2.jpg";
    if (random === 2) return "/randomCoverImg/concert/concert3.jpg";
  }
  if (dataCategory === eventCategory[5]) {
    if (random === 0) return "/randomCoverImg/musical/musical1.jpg";
    if (random === 1) return "/randomCoverImg/musical/musical2.jpg";
    if (random === 2) return "/randomCoverImg/musical/musical3.jpg";
  }
  if (dataCategory === eventCategory[6]) {
    if (random === 0) return "/randomCoverImg/classic/classic1.jpg";
    if (random === 1) return "/randomCoverImg/classic/classic2.jpg";
    if (random === 2) return "/randomCoverImg/classic/classic3.jpg";
  }
  if (dataCategory === eventCategory[7]) {
    if (random === 0)
      return "/randomCoverImg/exhibition&art/exhibition&art1.jpg";
    if (random === 1)
      return "/randomCoverImg/exhibition&art/exhibition&art2.jpg";
    if (random === 2)
      return "/randomCoverImg/exhibition&art/exhibition&art3.jpg";
  }
  if (dataCategory === eventCategory[8]) {
    return "/randomCoverImg/etc/etc.jpg";
  }
}
