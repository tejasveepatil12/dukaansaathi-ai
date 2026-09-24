import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();

    let text = "Namaste! I am your DukaanSaathi. I can help you analyze today's sales, generate a list of low-stock items, or draft promotional messages for your customers.";

    // Simulated intelligence based on keywords
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      text = "Namaste! How can I assist you with your Paytm merchant account today?";
    } else if (lowerMsg.includes('sales')) {
      text = "Based on your Paytm dashboard, today's total sales are ₹12,450. This is a 14% increase from yesterday!";
    } else if (lowerMsg.includes('stock') || lowerMsg.includes('inventory')) {
      text = "You currently have 3 items running low on stock in your inventory. Would you like me to generate a restock order?";
    }

    // Add a 1-second delay so it feels like a real AI processing the request
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: 'Failed to fetch AI response' }, { status: 500 });
  }
}