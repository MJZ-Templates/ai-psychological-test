import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

export const config = { api: { bodyParser: true } };

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { allQuestionsAndAnswers } = await req.json();

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Prompt can be modified
  const prompt = `Hello, you are a specialist in psychiatry. 
  Based on the results of the stress evaluation test you took today, I will conduct a counseling session.
  
  ${allQuestionsAndAnswers
      .map((qna: { question: string; answer: string }) => 
          `Question: ${qna.question}\nAnswer: ${qna.answer}`
      )
      .join('\n\n')}
  
  Based on the above answers, I will comprehensively assess your stress level and provide tailored advice on how to manage it.
  
  As a psychiatrist, you determine how stressed people are.
  Use a friendly tone and provide detailed analysis and recommendations from an expert's perspective.

  First, write a key term representing the user's stress state in the format "State: [keyword]" in the first line.
Example)
State: Severe work stress
State: Mild interpersonal stress
State: Serious academic stress

From the next line, write the following content:

  Include 3 of the following topics in your 800-character response, and separate each topic into paragraphs:
  1. Current stress level assessment
  2. Analysis of main stress causes
  3. Specific advice for improvement
  4. Stress management methods that can be practiced in daily life
  5. Recommendation for professional consultation if necessary
  
  Please also include a warm message of encouragement.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    const message = response.choices?.[0]?.message?.content?.trim();
    if (message) {
      console.log(allQuestionsAndAnswers);
      console.log("Response message", message);
      return new NextResponse(JSON.stringify({ message }), { status: 200 });
    } else {
      console.error("No message returned in the response.");
      return new NextResponse(JSON.stringify({ message: 'No response message' }), { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
