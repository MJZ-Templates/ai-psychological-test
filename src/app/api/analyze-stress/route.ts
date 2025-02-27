import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import Question from '@/app/components/Question';

export const config = { api: { bodyParser: true } };

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { allQuestionsAndAnswers } = await req.json();

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `안녕하세요, 당신은 정신건강의학과 전문의입니다. 
  오늘 진행하신 스트레스 평가 테스트 결과를 바탕으로 상담을 진행하도록 하겠습니다.
  
  ${allQuestionsAndAnswers
      .map((qna: { question: string; answer: string }) => 
          `질문: ${qna.question}\n답변: ${qna.answer}`
      )
      .join('\n\n')}
  
  위 답변들을 종합적으로 분석하여 당신의 스트레스 수준을 평가하고, 
  이를 관리하기 위한 맞춤형 조언을 드리도록 하겠습니다.
  
  당신은 정신과 의사로서 사람들이 얼마나 스트레스를 받았는지 판별해줍니다.
  친절한 말투를 사용하며, 전문가의 관점에서 상세한 분석과 해결책을 제시해주세요.

  사용자의 스트레스 상황을 한눈에 알 수 있는 단어를 처음에 말해주시고 그 아래에는
  다음 내용 중 3가지만 포함하여 800자 정도로 답변해주시고, 각 내용은 문단을 구분하여 작성해주세요:
  1. 현재 스트레스 수준 평가
  2. 주요 스트레스 원인 분석
  3. 개선을 위한 구체적인 조언
  4. 일상생활에서 실천할 수 있는 스트레스 관리 방법
  5. 필요한 경우 전문가 상담 권유
  
  부디 따뜻한 마음으로 응원의 메시지도 함께 전달해주세요.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    const message = response.choices?.[0]?.message?.content?.trim();
    if (message) {
      console.log(allQuestionsAndAnswers);
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
