import { useState } from "react";
import BoardDetailPresenter from "./BoardDetail.presenter";

export default function BoardDetailContainer() {
  // 목업을 위한 하드코딩
  const lat = 37.5378;
  const lng = 126.8939;
  const [isMyBoard] = useState(false);
  const [isCompleted] = useState(true);
  const [isAccompanyUser] = useState(true);
  return (
    <BoardDetailPresenter
      lat={lat}
      lng={lng}
      isMyBoard={isMyBoard}
      isCompleted={isCompleted}
      isAccompanyUser={isAccompanyUser}
    />
  );
}
