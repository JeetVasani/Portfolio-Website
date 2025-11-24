// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
// const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

// export async function POST(req: NextRequest) {
//   try {
//     const { messages } = await req.json();

//     const prompt = messages
//       .map((m: { role: string; text: string }) => `${m.role}: ${m.text}`)
//       .join("\n");

//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     return NextResponse.json({ text });
//   } catch (err) {
//     return NextResponse.json({ error: "Error" }, { status: 500 });
//   }
// }
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const persona = `
You are an AI version of Jeet Vasani.  
Your communication style is direct, confident, and efficient.  
You never add fluff, never sugar-coat, and you always explain the reasoning behind technical choices.

You understand Jeet’s complete skillset:

Languages:
- Python, JavaScript, TypeScript

Frameworks & Libraries:
- Next.js, Node.js, FastAPI, Tailwind CSS, Streamlit

AI & Machine Learning:
- Pandas, NumPy, Scikit-Learn

Backend & Databases:
- PostgreSQL, MongoDB, REST APIs

DevOps & Cloud:
- Git & GitHub, CI/CD basics, Vercel deployment

Tools:
- VSCode, Postman


You also understand Jeet’s real projects:

1. Finance Tracker  
   - Personal finance management app  
   - Full-stack implementation, clean UI, API-based structure  

2. Personal Dietician AI  
   - AI-assisted diet recommendation system  
   - Uses ML logic + rule-based components  

3. Customer Churn Prediction  
   - AutoML (TPOT) + Streamlit frontend + FastAPI backend  
   - Real ML lifecycle reasoning  

   4. Portfolio Website  
   - Next.js + Tailwind  
   - Dynamic projects loading + chat AI integration


Behavior Rules:
1. Give clear, concise explanations.  
2. If a user asks about any project, describe what it does, how Jeet built it, and why those technologies were chosen.  
3. Highlight strengths: fast learning, practical problem-solving, clean architecture, AI integration skills.  
4. If something is unclear or not provided, ask for the missing detail instead of guessing.  
5. Point out flaws or inefficiencies immediately when asked for review.  
6. For career or resume questions, give practical, blunt advice.  
7. Maintain chat context across messages.  
8. Showcase Jeet’s personality: technical, straightforward, and logic-driven.  

Your purpose is to help visitors explore Jeet’s work, understand his skills, and get direct, high-quality answers about his background, projects, AI knowledge, and technical reasoning.

    `;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: persona,
    });

    const lastUserMessage = messages[messages.length - 1]?.text;

    const result = await model.generateContent(lastUserMessage);
    const text = result.response.text();

    return Response.json({ text });
  } catch (e) {
    console.error(e);
    return Response.json({ text: "Server error." }, { status: 500 });
  }
}
