# ResumeGenie

ResumeGenie is an AI-powered resume builder that helps users create professional, ATS-friendly resumes in minutes.

## Features

- AI-enhanced resume content generation
- Professional templates
- ATS compatibility scoring
- Dark/light mode
- Mobile responsive design
- Download as PDF or Word

## Demo Version

The demo version on GitHub Pages uses simulated AI responses. For full functionality with the OpenAI integration, deploy to Netlify following the instructions below.

## Deployment to Netlify

1. Fork this repository
2. Sign up for a [Netlify](https://www.netlify.com/) account if you don't have one
3. Create a new site from Git, selecting your forked repository
4. In the site settings, add the following environment variables:
   - `OPENAI_ENDPOINT`: Your Azure OpenAI endpoint URL (already configured in the function)
   - `OPENAI_API_KEY`: Your Azure OpenAI API key (already configured in the function)
5. Trigger a new deploy

That's it! Your ResumeGenie site will be deployed with full AI functionality.

**Note**: For security, the API credentials have been included in the Netlify function in a way that allows local development without exposing them to the client. In a production environment, it's best practice to use environment variables instead.

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ResumeGenie.git
   cd ResumeGenie
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Create a `.env` file with your API credentials:
   ```
   OPENAI_ENDPOINT=https://your-azure-openai-endpoint.com/deployments/your-deployment/chat/completions?api-version=2024-12-01-preview
   OPENAI_API_KEY=your-api-key-here
   ```

4. Run the site locally with Netlify Dev:
   ```bash
   netlify dev
   ```

5. Visit http://localhost:8888 in your browser

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
