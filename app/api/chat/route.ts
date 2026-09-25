import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Bulletproof method: convert the entire incoming data to a lowercase string
    const requestData = JSON.stringify(body).toLowerCase();

    let botReply = "Namaste! I am your DukaanSaathi. I can help you analyze today's sales, generate a list of low-stock items, or draft promotional messages for your customers.";

    // Now it scans the raw data for the keywords
    if (requestData.includes("sales")) {
      botReply = "Today's total sales are ₹4,500. However, overall footfall is down 10% compared to last week.";
    } else if (requestData.includes("low-stock")) {
      botReply = "Inventory alert: You are running low on Aashirvaad Atta and Amul Butter. Would you like to restock them?";
    } else if (requestData.includes("restock")) {
      botReply = "The items running out have been reordered. Check here for your order details.";
    } else if (requestData.includes("regular") || requestData.includes("offers")) {
      botReply = "I have scanned your ledger and identified your regular customers. Special discount offers have been successfully sent to their phone numbers to boost weekend sales.";
    } else if (requestData.includes("promotional") || requestData.includes("messages")) {
      botReply = "Action Executed! A promotional SMS offering a 5% discount on dairy products has been sent to your dormant customers.";
    }

    // Send back multiple formats to guarantee the frontend catches it
    return NextResponse.json({ 
      role: "assistant", 
      content: botReply,
      text: botReply,
      message: botReply 
    });
    
  } catch (error) {
    return NextResponse.json({ text: "Error connecting to AI." });
  }
}