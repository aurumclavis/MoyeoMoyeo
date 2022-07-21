// import * as S from "./OurEventList.Styles";
// import { getDate } from "../../../../commons/getDate";

// import { IOurEventListUIAdd } from "./OurEventList.Types";

// export default function OurEventListUIAdd(props: any) {

//   return (
//     <>
//       <S.ListWrapper>
//         <S.ListImg src="/배너이미지_동행1.png" />
//         <S.FlexWrapper>
//           <S.Title>{props.ee?.title}</S.Title>
//           <S.Period>
//             {getDate(props.ee?.dateStart)} ~ {getDate(props.ee?.dateEnd)}
//           </S.Period>
//           <S.ContentsWrapper>{props.ee?.description}</S.ContentsWrapper>
//           <S.FooterWrapper>
//             <S.CounterWrapper>
//               <S.Counter>조회수 {props.ee?.viewCount}</S.Counter>
//               <S.Counter>좋아요 {props.ee?.likedUsers}</S.Counter>
//             </S.CounterWrapper>
//             <S.Btn onClick={onClickDetail}>자세히보기</S.Btn>
//           </S.FooterWrapper>
//         </S.FlexWrapper>
//       </S.ListWrapper>
//     </>
//   );
// }
