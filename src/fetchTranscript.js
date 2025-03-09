
const { YoutubeTranscript } = require('youtube-transcript');

async function fetchTranscript(videoUrl) {
    const videoId = videoUrl.split('v=')[1].split('&')[0];

    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);
        return transcript.map(entry => entry.text).join(' ');
    } catch (error) {
        console.error('Error fetching transcript:', error.message);
        throw error;
    }
}

module.exports = fetchTranscript;

