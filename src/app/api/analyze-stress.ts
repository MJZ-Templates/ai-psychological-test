// app/api/analyze-stress.ts
import { OpenAI } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { answers } = req.body;

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `사용자가 답변한 스트레스 테스트 결과입니다: ${answers.join(', ')}. 사용자가 얼마나 스트레스를 받았는지 평가해 주세요.`;

    // API 요청 보내기
    const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt,
        max_tokens: 50,
    });

    const message = response.choices[0].text.trim();

    res.status(200).json({ message });
}
