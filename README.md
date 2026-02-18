# Weapon Store

A Next.js e-commerce demo that sells a product (Axe) using [Creem](https://creem.io) for payments, with purchase records stored in a PostgreSQL database (Neon) via Drizzle ORM.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Payments:** [Creem](https://creem.io) (`@creem_io/nextjs`)
- **Database:** PostgreSQL on [Neon](https://neon.tech), with [Drizzle ORM](https://orm.drizzle.team)
- **UI:** React 19, Tailwind CSS, Radix UI, shadcn-style components

## Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- A [Creem](https://creem.io) account (API key + webhook secret)
- A PostgreSQL database (e.g. [Neon](https://neon.tech))

## Setup

1. **Clone and install**

   ```bash
   git clone <repo-url>
   cd weapon-store
   pnpm install
   ```

2. **Environment variables**

   Copy the example env file and fill in your values:

   ```bash
   cp .env.example .env
   ```

   See [Environment variables](#environment-variables) below.

3. **Database**

   Apply migrations (after setting `DATABASE_URL` in `.env`):

   ```bash
   pnpm drizzle-kit push
   ```

   Or generate and run migrations:

   ```bash
   pnpm drizzle-kit generate
   pnpm drizzle-kit migrate
   ```

4. **Run the app**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `CREEM_API_KEY` | Creem API key (from Creem dashboard). Use a test key for development. |
| `CREEM_WEBHOOK_SECRET` | Creem webhook signing secret. Required for `/api/webhook/creem` to verify and handle payment events. |
| `DATABASE_URL` | PostgreSQL connection string (e.g. Neon connection string with `?sslmode=require`). |

See `.env.example` for a template.

## Project structure

- `app/` – Next.js App Router pages and API routes
  - `page.tsx` – Home page with “Buy Axe” checkout button
  - `success/page.tsx` – Post-purchase success page
  - `api/checkout/route.ts` – Creem checkout handler (GET)
  - `api/webhook/creem/route.ts` – Creem webhook handler; inserts completed purchases into DB
- `db/` – Drizzle schema and client
  - `schema.ts` – `purchases` table (id, productId, email, createdAt)
  - `drizzle.ts` – DB client
- `drizzle.config.ts` – Drizzle Kit config (schema path, migrations, `DATABASE_URL`)

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm drizzle-kit push` | Push schema to DB (dev) |
| `pnpm drizzle-kit generate` | Generate migrations |
| `pnpm drizzle-kit migrate` | Run migrations |

## Webhook (production)

For real payments, Creem must reach your webhook. Use a public URL (e.g. deployed on Vercel) and set the webhook URL in the Creem dashboard to:

`https://your-domain.com/api/webhook/creem`

Keep `CREEM_WEBHOOK_SECRET` in sync with the value shown in Creem.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Creem](https://creem.io) – payments
- [Drizzle ORM](https://orm.drizzle.team)
- [Neon](https://neon.tech) – serverless Postgres
