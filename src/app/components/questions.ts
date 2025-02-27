// src/app/components/questions.ts
// Questions can be modified

interface Question {
    text: string;
    options: string[];
    answers: string[];
}

export const questions: Question[] = [
    {
        text: 'Have you been worrying more lately?',
        options: ['Not really worried', 'Sometimes', 'Often', 'Always'],
        answers: ['You seem okay', 'It\'s normal to worry sometimes', 'You might need to take care', 'That must be very tough for you'],
    },
    {
        text: 'Have you had trouble concentrating while working or studying?',
        options: ['Always focused', 'Sometimes distracted', 'Often', 'Almost always'],
        answers: ['You are in good shape', 'It\'s normal sometimes', 'You might need to take care', 'It must be very tiring for you'],
    },
    {
        text: 'Have you had trouble sleeping at night?',
        options: ['Sleeping well', 'Occasionally tough nights', 'Often', 'Almost always'],
        answers: ['You seem relaxed', 'It\'s normal sometimes', 'Sleep is important, maybe take care?', 'Not being able to sleep must be very tough for you'],
    },
    {
        text: 'Have you had a hard time because your emotions fluctuated?',
        options: ['Emotionally stable', 'Sometimes emotionally unstable', 'Often', 'Always'],
        answers: ['You are in a stable state', 'Emotions can be like that', 'You might need to take care', 'It must be very tough if your emotions are unstable'],
    },
    {
        text: 'Have you had any uncomfortable symptoms (headache, indigestion)?',
        options: ['Feeling physically well', 'Occasionally uncomfortable', 'Often', 'Almost always'],
        answers: ['You seem healthy', 'It\'s normal to feel that sometimes', 'You might need to take care of your health', 'It must be very tough if you feel uncomfortable'],
    },
    {
        text: 'Have you been feeling there aren\'t many things you find enjoyable lately?',
        options: ['Always having fun', 'Sometimes bored', 'Often bored', 'Almost always'],
        answers: ['You are in a good state', 'It\'s normal sometimes', 'Maybe try to find something fun?', 'It must be tough if you can\'t find joy'],
    },
    {
        text: 'Have you felt that you don\'t want to socialize with people?',
        options: ['Socializing well', 'Sometimes want to be alone', 'Often want to be alone', 'Almost always'],
        answers: ['You have good social relationships', 'Alone time is necessary too', 'Maybe take care of your social relationships?', 'Not socializing can make you feel lonely'],
    },
    {
        text: 'Have you been easily irritated or angry?',
        options: ['Almost never', 'Sometimes', 'Often', 'Almost always'],
        answers: ['You are in a peaceful state', 'Sometimes it\'s normal', 'Maybe try to calm your mind', 'Feeling irritated or angry must be tough'],
    },
];
