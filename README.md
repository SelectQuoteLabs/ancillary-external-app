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

#### Local HTTPS

From the root of the project create a directory named `certificates` and navigate to the directory:

```bash
mkdir certificates && cd certificates
```

Generate SSL certificates for localhost to run on https:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

> 💡 Remove the newlines in favor of spaces when pasting to your terminal

Add your certificates to KeyChain

- Double-click on your certificate (the .crt file) to add it to your KeyChain
- In the KeyChain window, under the Default Keychains section select “login” or which ever keychain you added this to and then double click on your new certificate in the main content area. It should be named localhost
- You can now set it to be trusted by expanding "Trust"
- Change each dropdown to "Always Trust"
- After closing the window you'll be prompted for your admin password

> Note: These instructions are for Mac OSX. For Windows, here's a link but know this is not exact step-by-step instructions https://windowsreport.com/create-self-signed-certificate/

#### Local OAuth

Create a `.env.local` in the projects root directory and add the following:

```
NEXTAUTH_URL='https://localhost:3000'
```

### Running the Dev Server

First, run the development server:

```bash
npm run dev:local
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

## Authentication

[Next-Auth](https://next-auth.js.org/)
