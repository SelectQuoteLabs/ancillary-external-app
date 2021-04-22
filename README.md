## Getting Started

This template repo should be used for external ancillary applications.

An external ancillary app is any application that is exposed to the public internet and is NOT a CRM or Quote Tool.

## Local Development

### Initial Setup

The initial setup section is meant to be followed top down the first time you set the app up locally.

> 🐳 Docker & Docker Compose are used for local development only

### Vercel

This app is deployed and hosted on [Vercel](https://vercel.com)

The Vercel CLI is very useful and should be utilized:

```bash
npm install -g vercel
```

Login to vercel to use the CLI:

```bash
vercel
```

Enter your email used for Vercel. You'll receive an email asking you to verify your account.

Switch to the SQ Team in the CLI:

```bash
vercel switch
```

#### Local Tooling

Install local tooling such as `husky` and `lint-staged`:

```bash
npm install
```

#### Local OAuth

Create a `.env.local` in the projects root directory and add the following:

```
NEXTAUTH_URL='http://localhost:3000'
```

### Running the Dev Server

First, run the development server:

```bash
npm run dev:local
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

[Next-Auth](https://next-auth.js.org/)
