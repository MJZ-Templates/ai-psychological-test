// src/app/api/analyze-stress/route.ts
import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405 });
  }

  const { answers } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `사용자가 답변한 스트레스 테스트 결과입니다: ${answers.join(', ')}. 사용자가 얼마나 스트레스를 받았는지 평가해 주세요.`;

  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 50,
    });

    const message = response.choices[0].text.trim();

    return new NextResponse(JSON.stringify({ message }), { status: 200 });
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
