import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body || '{}');

  try {
    const response = await fetch('YOUR_GOOGLE_SHEET_WEB_APP_URL_HERE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

export { handler };
