import { useState } from "react";
import * as S from "./Chat.Styles";

// app.js에서 선언한 socket 변수 보내기 필요
// 창을 닫으면 disconnected
interface ChatProps {
  username: string;
  room: string;
  onClickChat: () => void;
}
function Chat(props: ChatProps) {
  const [currentMessage, setCurrentMessage] = useState("");
  // const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      // const messageData = {
      //   room: props.room,
      //   author: props.username,
      //   message: currentMessage,
      //   time:
      //     new Date(Date.now()).getHours() +
      //     ":" +
      //     new Date(Date.now()).getMinutes(),
      // };
      // await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      // setCurrentMessage("");
    }
  };
  // listening event : 받은 메세지 확인
  // 새로 받은 메세지를 리스트 배열에 추가

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, [socket]);

  return (
    <S.ChatWindow>
      <S.ChatHeader>
        <S.ChatHeaderTitle>1:1 채팅방</S.ChatHeaderTitle>
        <S.ChatHeaderLeave onClick={props.onClickChat}>
          <S.LeaveIcon />
          <S.Text>닫기</S.Text>
        </S.ChatHeaderLeave>
      </S.ChatHeader>

      <S.ChatBody>
        <S.MessageContainer>
          {/* {messageList.map((messageContent, index) => {
            return (
              <S.Message
                key={index}
                you={username === messageContent.author ? "you" : "other"}
              >
                <S.MessageContentWrapper
                  you={username === messageContent.author ? "you" : "other"}
                >
                  <S.AuthorText>{messageContent.author}</S.AuthorText>
                  <S.MessageContent
                    you={username === messageContent.author ? "you" : "other"}
                  >
                    <S.Text>{messageContent.message}</S.Text>
                  </S.MessageContent>
                  <S.TimeText>{messageContent.time}</S.TimeText>
                </S.MessageContentWrapper>
              </S.Message>
            );
          })} */}
          <S.Message you="you">
            <S.MessageContentWrapper you="you">
              <S.AuthorText>유저1</S.AuthorText>
              <S.MessageContent you="you">
                <S.Text>메세지입니다</S.Text>
              </S.MessageContent>
              <S.TimeText>2022.07.17 00:10</S.TimeText>
            </S.MessageContentWrapper>
          </S.Message>
          <S.Message you="other">
            <S.MessageContentWrapper you="other">
              <S.AuthorText>판매자</S.AuthorText>
              <S.MessageContent you="other">
                <S.Text>메세지입니다</S.Text>
              </S.MessageContent>
              <S.TimeText>2022.07.17 00:20</S.TimeText>
            </S.MessageContentWrapper>
          </S.Message>
        </S.MessageContainer>
      </S.ChatBody>

      <S.ChatFooter>
        <S.ChatInput
          type="text"
          value={currentMessage}
          placeholder="내용을 입력하세요."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        {/* Send Button : arrow */}
        <S.ChatSendButton onClick={sendMessage}>
          <S.SendIcon />
        </S.ChatSendButton>
      </S.ChatFooter>
    </S.ChatWindow>
  );
}
export default Chat;
