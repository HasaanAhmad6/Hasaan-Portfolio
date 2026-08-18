"use client";

import React from "react";
import { ChatbotWidget } from "@hasaan_6/rag-chatbot-widget";
import "@hasaan_6/rag-chatbot-widget/dist/chatbot.css";

export function PortfolioChatbot() {
  return (
    <div className="z-50 font-sans">
      <ChatbotWidget
        chatEndpoint="/api/chat"
        persistence="local"
        theme="dark"
        botName="Hasaan Assistant"
        botEyebrow="Portfolio RAG AI"
        toggleLabel="Chat with AI"
        inputPlaceholder="Ask about Hasaan's projects, skills, or experience..."
        welcomeMsg="Hi! I'm Hasaan's portfolio assistant powered by RAG and Gemini. Ask me anything about his projects, technical expertise, or contact details."
        quickActions={[
          "What projects has Hasaan built?",
          "What are Hasaan's core skills?",
          "How can I contact Hasaan?",
        ]}
        fallbackMsg="I couldn't find that specific detail in the portfolio knowledge base. You can also reach out directly using the contact form below!"
        leadFormConfig={{
          leadKicker: "Let's collaborate on your next project",
          serviceOptions: [
            "Full-Stack Web Development",
            "AI / ML Solutions",
            "Cloud & DevOps (AWS)",
            "Internship / Job Opportunity",
            "General Inquiry",
          ],
          budgetOptions: ["< $1k", "$1k - $5k", "$5k+"],
          contactTimeOptions: ["This week", "This month", "Flexible"],
        }}
      />
    </div>
  );
}
