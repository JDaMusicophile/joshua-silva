import { OPENAI_API_KEY } from '../../config';
import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const prompt = req.body.prompt;

      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 100,
          n: 1,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      console.log('GPT-3 API response:', data);

      if (data.choices && data.choices.length > 0) {
        const generatedText = data.choices[0].text;
        res.status(200).json({ text: generatedText });
      } else {
        console.error('GPT-3 response does not contain choices');
        res.status(500).json({ error: 'Failed to fetch GPT-3 response' });
      }
    } catch (error) {
      console.error(`Error while fetching GPT-3 response: ${error}`);
      res.status(500).json({ error: 'Failed to fetch GPT-3 response' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
