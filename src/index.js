const readline = require('readline');
const fetchTranscript = require('./fetchTranscript');
const sendToOpenAI = require('./sendToOpenAI');
const generateBlogPost = require('./generateBlogPost');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the YouTube video URL: ', async (videoUrl) => {
    try {
        const transcript = await fetchTranscript(videoUrl);
        const response = await sendToOpenAI(transcript);
        const blogPost = generateBlogPost(response);
        console.log('Generated Blog Post:\n', blogPost);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        rl.close();
    }
});