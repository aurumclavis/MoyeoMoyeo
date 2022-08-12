import * as S from "./DateList.Styles";
// import { ICalederListUIAdd } from "./DateList.Types";

export default function CalederListUIAdd(props: any) {
  console.log(props.dateData);
  return (
    <>
      <S.ListWrapper>
        {props.dateData === props.fetchPosts?.data?.fetchPosts
          ? props.dateData?.map((el: any) => (
              <S.List key={el.id}>
                {/* <S.List onClick={props.onClickDetail()}> */}
                <S.ListImg
                  onError={event => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el.images[0]?.src}`}
                />
                <S.Title>{el.title}</S.Title>
              </S.List>
            ))
          : props.dateData?.map((el: any) => (
              <S.List key={el.id}>
                {/* <S.List onClick={props.onClickDetail()}> */}
                <S.ListImg
                  onError={event => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={el.imgSrc}
                />
                <S.Title>{el.title || el.name} </S.Title>
              </S.List>
            ))}
      </S.ListWrapper>
    </>
  );
}
