# 📌 Stress Analysis Psychological Test

A web application where AI analyzes stress levels and provides personalized advice based on user responses.

---

## 🚀 Key Features

### 🔍 1. Stress Diagnostic Test
- Offers personalized questions
- Easy to answer with an intuitive UI
- Provides hints for each question to enhance understanding

### 🤖 2. AI-Based Analysis
- Utilizes the OpenAI GPT-3.5 model
- Comprehensive analysis of user responses
- Evaluates stress levels and provides tailored advice

### 📊 3. Visual Results Display
- Highlights stress-related keywords
- Provides detailed analysis results
- Offers specific advice for improvement

---

## 🛠 Technology Stack

### 🎨 Frontend
- Next.js 13
- React
- TypeScript
- Tailwind CSS

### 🏗 Backend
- Next.js API Routes
- OpenAI API

### 🎨 Design
- Responsive web design
- Custom fonts
- Modern UI/UX

---

## 🌟 Key Features

✅ **User-Friendly Interface**: Intuitive design for easy use by anyone  
✅ **Real-Time Analysis**: Instant results using AI  
✅ **Personalized Advice**: Specific improvement plans based on individual situations  
✅ **Expert-Level Analysis**: Analysis provided from the perspective of a mental health specialist  

---


## 📋 Environment Setup Guide
### API Key Configuration
To run this application, you need to set up your OpenAI API key in a `.env` file:
1. Create a `.env` file in the root directory
2. Add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

### Quick Start
```
# 1. Clone the repository
git clone [repository-url]

# 2. Install dependencies
npm install

# 3. Create .env file and add your OpenAI API key
echo "OPENAI_API_KEY=your_api_key_here" > .env

# 4. Start the development server
npm run dev
```
### ⚠️ Important Note
- The application requires an OpenAI API key to function
- You can get an API key from OpenAI Platform
- Never commit your `.env` file to version control
- Keep your API key private and secure

Without a valid API key, the stress analysis feature will not work. Make sure to properly configure your environment variables before running the application.
