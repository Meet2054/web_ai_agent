"use client";
import {Id, Doc} from "@/convex/_generated/dataModel";


interface ChatInterfaceProps {
    chatId: Id<"chats">;
    initialMessages: Doc<"messsages">[];
}

const ChatInterface = ({chatId, initialMessages}: ChatInterfaceProps) => {
  return (
    <div>ChatInterface</div>
  )
}

export default ChatInterface