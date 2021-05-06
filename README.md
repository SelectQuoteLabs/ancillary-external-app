## Getting Started

This template repo should be used for external ancillary applications.

An external ancillary app is any application that is exposed to the public internet and is NOT a CRM or Quote Tool.

## Initial Project Setup

The initial setup section is meant to be followed top down the first time you setup the app.

### GitHub or Bitbucket

Create a new repository

Ensure the default Production branch is set to `main`

Create the `develop` branch

> 💡 Ensure you have at least 2 branches, `develop` and `main`

### Vercel

This app will be deployed and hosted on [Vercel](https://vercel.com)

#### Create a new Project

[Creating a New Project on Vercel](https://vercel.com/docs/platform/projects)

1. Login to the Vercel online dashboard and create a new project.

2. At the top of the page, switch from your personal account to the SelectQuote team

3. Click the "New Project" button

4. Under "Import Git Repository" select the "SelectQuote" bitbucket option if you're using Bitbucket. Otherwise, choose "Select other Provider" and choose GitHub.

5. Click the "Import" button of your repository

6. Give the project a name and click "Deploy"

#### Vercel CLI

The [Vercel CLI](https://vercel.com/docs/cli?query=cli#introduction) is very useful and should be utilized:

```bash
npm install -g vercel
```

Login to Vercel to use the CLI:

```bash
vercel
```

Enter your email used for Vercel. You'll receive an email asking you to verify your account.

Switch to the SQ Team in the CLI:

```bash
vercel switch
```

Link the codebase to the Vercel Project

```bash
vercel link
```

> 💡 Ensure the "scope" is "SelectQuote"

### Local Tooling

Install local tooling such as `husky` and `lint-staged`:

```bash
npm install
```

### Environment Variables

#### Local Environment Variables

From the root of your projects source code, create a new file named .env.local

```bash
touch .env.local
```

Add the following environment variables to `.env.local`

```
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

The `JWT_SECRET` can be any value. Preferably it's a [UUIDv4 generated value](https://www.uuidgenerator.net/version4)

The `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` values can be found inside the `local.yaml` file of our CRM codebases or within AWS Secrets Manager

> 💡 Using Vercel CLI you may run $ vercel env pull. This creates a .env file that will not be ignored by git. Ensure you copy the contents to a .env.local file, ensure NEXTAUTH_URL="http://localhost:3000" and delete the .env file

#### Vercel Environment Variables

This project uses Vercel for deployments. Environment variables are set in the Vercel dashboard for this app. Navigate to the Project in Vercel. In the tab menu showing Overview, Deployments, Analytics, and Settings, click Settings, then Environment Variables.

For more information [View the documentation](https://vercel.com/support/articles/how-to-add-vercel-environment-variables#envrionment-variables-ui)

> 💡 When creating a new variable, the "Development" checkbox applies to local environments, not the deployed version of the `develop` branch. To set a variable that applies to `develop` or `release`, check the "Preview" checkbox, then "Select Custom Branch."

Here's an example of the initial Environment Variables to create in Vercel for the example app named `my-app`

| Name                 | Value                                 | Environment                      |
| -------------------- | ------------------------------------- | -------------------------------- |
| NEXTAUTH_URL         | http://localhost:3000                 | Development                      |
| NEXTAUTH_URL         | https://my-app-selectquote.vercel.app | Preview                          |
| NEXTAUTH_URL         | https://my-app.vercel.app             | Production                       |
| JWT_SECRET           | uuidv4-generated-value-here           | Production, Preview, Development |
| GOOGLE_CLIENT_ID     | google-client-id-here                 | Production, Preview, Development |
| GOOGLE_CLIENT_SECRET | google-client-secret-here             | Production, Preview, Development |

## Local Development

### Docker

This project depends on Docker to run the project locally

🐳 Ensure Docker for Mac/Windows is up-to-date

Run the development server:

```bash
npm run dev:local
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Troubleshooting

💥: `unknown shorthand flag: 'V' in -V`

👩🏼‍🔧: Update Docker for Mac/Windows then try again

## Authentication

[Next-Auth](https://next-auth.js.org/)
