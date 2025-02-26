import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { answers } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
                  사용자가 답변한 스트레스 테스트 질문은 다음과 같습니다: 
                  ${answers.join(', ')}. 
                  사용자가 얼마나 스트레스를 받았는지 평가해 주세요.
                  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    const message = response.choices?.[0]?.message?.content?.trim();

    if (message) {
      console.log("답변 메시지", message);
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
