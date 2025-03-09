# YouTube Transcript Blog

This project fetches the transcript of a YouTube video, sends it to the OpenAI API, and generates a blog post based on the transcript.

## Project Structure

```
youtube-transcript-blog
├── src
│   ├── index.js          # Entry point of the application
│   ├── fetchTranscript.js # Fetches the transcript from a YouTube video
│   ├── sendToOpenAI.js   # Sends the transcript to OpenAI API
│   └── generateBlogPost.js # Generates a blog post from OpenAI response
├── package.json          # NPM configuration file
├── .env                  # Environment variables (API keys, etc.)
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd youtube-transcript-blog
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

To run the application, use the following command:
```
node src/index.js
```

You will be prompted to enter a YouTube video link. The application will fetch the transcript, send it to OpenAI, and output the generated blog post.

## Dependencies

- axios: For making HTTP requests to fetch transcripts and interact with the OpenAI API.
- dotenv: For managing environment variables.

## License

This project is licensed under the MIT License.

Author: 
Dibeesh KS. 
Technical Lead. 