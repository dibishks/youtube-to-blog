const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;

const sendToOpenAI = async (transcript) => {
    const decodedTranscript = transcript.replace(/&amp;#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    const url = 'https://api.openai.com/v1/chat/completions';

    const blogPrompt = `
Convert the following YouTube transcript into a well-structured, point-based Medium blog post.

**Tone**: Informative, beginner-friendly, and engaging.  
**Structure**:
- **Title** Generate one post title ideas that are simple, easy to understand, and make the reader curious enough to click. The titles should be engaging, slightly mysterious, and promise value. Avoid clickbait but make them compelling. .
- **Introduction** (2-3 sentences summarizing the topic and why it matters).
- **Main Points**: List the key takeaways in clear bullet points or numbered lists.
- **Conclusion**: Summarize the topic in 2-3 sentences and include a call to action.

Here is the transcript:
`;

    const response = await axios.post(url, {
        model: "gpt-4-turbo", 
        messages: [{ role: "system", content: blogPrompt }, 
                   { role: "user", content: decodedTranscript }],
        temperature: 0.7,
        max_tokens: 2048
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
    });

    return response.data.choices[0].message.content;
};

module.exports = sendToOpenAI;