import { Id } from "@/convex/_generated/dataModel"
import React from 'react'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getConvexClient } from "@/lib/convex";
import { api } from "@/convex/_generated/api";
import { ChatInterface } from "@/components/ui/ChatInterface";
 
interface ChatPageProps {
    params: Promise<{
        chatId: Id<"chats">
    }>;
}

const ChatPage = async ({ params }: ChatPageProps) => {
    const { chatId } = await params;

    const { userId} = await auth()

    if(!userId){
        redirect("/");
    }
    try{

        
        const convex = getConvexClient();
        
        const initialMessages = await convex.query(api.messages.list, {chatId});
        
        return (
            <div className="flex-1 overflow-hidden">
                <ChatInterface chatId={chatId} initialMessages={initialMessages} />
            </div>
        );
    }catch(error){
        console.error("Error loading chat:",error);
        redirect("/dashboard");
    }
} 

export default ChatPage