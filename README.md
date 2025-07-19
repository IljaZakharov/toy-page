# Next Motivation App

A Next.js application that generates motivational quotes about Saint Elizabeth Feodorovna using OpenAI's GPT API.

## How It Works

This app generates short motivational quotes (120-150 characters) about Saint Elizabeth Feodorovna, a Russian Orthodox saint and great martyr. The app uses:

- **Frontend**: Next.js 15 with React 19, TypeScript, and CSS modules
- **Backend**: Next.js API routes that call OpenAI's GPT-3.5-turbo API
- **Styling**: Custom CSS with beautiful background images and modern UI

The main functionality is in the `/api/quote` endpoint, which sends a prompt to OpenAI requesting a quote about Saint Elizabeth Feodorovna and returns it to the frontend.

## Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- OpenAI API key (get one at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys))

## Installation

### Ubuntu/Debian

1. **Install Node.js and npm**:
   ```bash
   # Update package list
   sudo apt update
   
   # Install Node.js and npm
   sudo apt install nodejs npm
   
   # Verify installation
   node --version
   npm --version
   ```

2. **Install project dependencies**:
   ```bash
   # Clone the repository (if not already done)
   git clone <your-repo-url>
   cd next-motivation
   
   # Install dependencies
   npm install
   ```

### Other Operating Systems

1. **Install Node.js** from [https://nodejs.org](https://nodejs.org)
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Environment Setup

1. **Copy the environment template**:
   ```bash
   cp env.example .env
   ```

2. **Edit the `.env` file** and add your OpenAI API key:
   ```bash
   # Replace with your actual OpenAI API key
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Get your OpenAI API key**:
   - Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy it to your `.env` file

## Development Mode

### Starting the Development Server

```bash
npm run dev
```

This will:
- Start the development server with Turbopack for faster builds
- Enable hot reloading (changes appear instantly in the browser)
- Run on [http://localhost:3000](http://localhost:3000)

### Development Features

- **Hot Reloading**: Changes to files automatically refresh the browser
- **Turbopack**: Faster build times and development experience
- **TypeScript**: Full type checking and IntelliSense support
- **ESLint**: Code linting for better code quality

### Stopping the Development Server

Press `Ctrl + C` in the terminal where the dev server is running.

## Production Mode

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Starting Production Server

```bash
npm start
```

This starts the production server on [http://localhost:3000](http://localhost:3000).

### Stopping Production Server

Press `Ctrl + C` in the terminal where the production server is running.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the app for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
next-motivation/
├── src/
│   └── app/
│       ├── api/quote/route.ts    # OpenAI API integration
│       ├── globals.css           # Global styles
│       ├── layout.tsx            # Root layout
│       ├── page.module.css       # Page-specific styles
│       └── page.tsx              # Main page component
├── public/
│   └── backgrounds/              # Background images
├── env.example                   # Environment variables template
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Troubleshooting

### Common Issues

1. **"Missing OpenAI API key" error**:
   - Make sure you've created a `.env` file from `env.example`
   - Verify your OpenAI API key is correct
   - Restart the development server after adding the API key

2. **Port 3000 already in use**:
   - Kill the process using port 3000: `lsof -ti:3000 | xargs kill -9`
   - Or use a different port: `npm run dev -- -p 3001`

3. **Build errors**:
   - Clear the `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`


## License

This project is open source and available under the [MIT License](LICENSE).
