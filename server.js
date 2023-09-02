const express = require('express');
const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const app = express();
const port = 3001; // Choose a suitable port

const client = new TextToSpeechClient({
    projectId: 'portfolio-ai-396912',
    keyFilename: '/creds.json',
});

// Create an API endpoint for generating and serving text-to-speech audio
app.get('/generate-audio', async (req, res) => {
    const text = "Hello! Welcome to my portfolio website.";

    const request = {
        input: { text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    try {
        const [response] = await client.synthesizeSpeech(request);
        res.set('Content-Type', 'audio/mpeg');
        res.send(response.audioContent);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error generating audio');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
