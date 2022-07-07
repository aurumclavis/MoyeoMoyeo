import CommentListPresenter from "./CommentList.presenter";

export default function CommentListContainer() {
  // 목업을 위한 패치코멘트
  const comments = [
    {
      writer: "김성훈",
      createdAt: "2022년 7월 11일 20:33",
      contents:
        "같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요.  ",
    },
    {
      writer: "김성훈",
      createdAt: "2022년 7월 11일 20:33",
      contents:
        "같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요. 같이 가면 좋을 거 같아요. 같이 갈래요.  ",
    },
  ];
  return <CommentListPresenter comments={comments} />;
}
