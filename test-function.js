// Run this script with Node.js to test the Netlify function locally

const axios = require('axios');

async function testFunction() {
    try {
        console.log('Testing OpenAI API connection...');
        
        const OPENAI_ENDPOINT = "https://ai-raiyanbinsarwar0112ai312258162978.openai.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2024-12-01-preview";
        const OPENAI_API_KEY = "2wuCk4AZtNAflvsGfbHjThuF7PKySOnOtW7DzxmgFDLtO07liLBJJQQJ99BCACHYHv6XJ3w3AAAAACOGaBwr";
        
        const response = await axios({
            method: 'post',
            url: OPENAI_ENDPOINT,
            headers: {
                'Content-Type': 'application/json',
                'api-key': OPENAI_API_KEY
            },
            data: {
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant."
                    },
                    {
                        role: "user",
                        content: "Say hello!"
                    }
                ],
                max_tokens: 100,
                temperature: 0.7
            },
            timeout: 10000
        });
        
        console.log('API Response:', response.data);
        console.log('Test successful!');
    } catch (error) {
        console.error('Error testing API:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        }
    }
}

testFunction();
