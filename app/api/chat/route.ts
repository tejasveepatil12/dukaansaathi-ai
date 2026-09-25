import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = (body.messages ? body.messages[body.messages.length - 1].content : body.prompt || "").toLowerCase();

  let botReply = "Namaste! I am your DukaanSaathi. I can help you analyze today's sales, generate a list of low-stock items, or draft promotional messages for your customers.";

  if (userMessage.includes("sales")) {
    botReply = "Today's total sales are ₹4,500. However, overall footfall is down 10% compared to last week.";
  } else if (userMessage.includes("low-stock")) {
    botReply = "Inventory alert: You are running low on Aashirvaad Atta and Amul Butter. Would you like to restock them?";
  } else if (userMessage.includes("restock")) {
    botReply = "The items running out have been reordered. Check here for your order details.";
  } else if (userMessage.includes("regular") || userMessage.includes("offers")) {
    botReply = "I have scanned your ledger and identified your regular customers. Special discount offers have been successfully sent to their phone numbers to boost weekend sales.";
  } else if (userMessage.includes("promotional") || userMessage.includes("messages")) {
    botReply = "Action Executed! A promotional SMS offering a 5% discount on dairy products has been sent to your dormant customers.";
  }

  return NextResponse.json({ 
    role: "assistant", 
    content: botReply,
    text: botReply 
  });
}