import { SendOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Logout } from "@mui/icons-material";
import { breakPoints } from "../../../commons/styles/media";
import ScrollToBottom from "react-scroll-to-bottom";

interface MessageProps {
  you?: string;
}
export const App = styled.div`
  background: #fff;
  color: #212121;
  display: grid;
  place-items: center;
`;
export const JoinChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ChatWindow = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 5px;
`;
export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 1em;
  border-radius: 5px 5px 0 0;
  background: #ffd24c;
  position: relative;
  border: 1px solid #d2d2d2;
`;
export const ChatHeaderTitle = styled.p`
  font-weight: 700;
  margin: 0;
`;
export const ChatHeaderLeave = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ChatBody = styled.div`
  height: calc(450px - (45px + 70px));
  background: #fff;
  position: relative;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
`;
export const MessageContainer = styled(ScrollToBottom)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Message = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: ${(props: MessageProps) =>
    props.you === "you" ? "flex-end" : "flex-start"};
`;
export const MessageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  ${(props: MessageProps) =>
    props.you === "you" ? "align-items:flex-end" : "align-items:flex-start"};
`;
export const MessageContent = styled.div`
  width: 100%;
  height: auto;
  min-height: 40px;
  border-radius: 15px;
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
  overflow-wrap: break-word;
  word-break: break-word;
  ${(props: MessageProps) =>
    props.you === "you"
      ? "text-align: end; background-color: white; border:1px solid #d9d9d9"
      : "background-color: #f4f4f4; border:none"};
`;

export const AuthorText = styled.p`
  margin: 0;
  font-weight: bold;
`;
export const TimeText = styled.p`
  margin: 0;
  font-size: 12px;
`;
export const Text = styled.p`
  margin: 0;
`;
export const ChatFooter = styled.div`
  height: 40px;
  display: flex;
  background-color: white;
  border: 1px solid #d2d2d2;
`;
export const ChatInput = styled.input`
  height: 90%;
  flex: 85%;
  border: 0;
  padding: 0 0.7em;
  font-size: 1em;
  outline: none;
`;
export const ChatSendButton = styled.button`
  border: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 15%;
  height: 100%;
  background: transparent;
  outline: none;
  font-size: 1rem;
  color: lightgray;
  :hover {
    color: black;
  }
`;
export const SendIcon = styled(SendOutlined)``;
export const LeaveIcon = styled(Logout)`
  font-size: 1rem;
`;
