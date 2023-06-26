import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import { env } from "~/env.mjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stripe Dive-In</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.pinkSpan}>Stripe</span> Dive-In
          </h1>
          <Link
            className={styles.card}
            href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_only&redirect_uri=${env.NEXT_PUBLIC_VERCEL_URL}/api/stripe/callback`}
            target="_blank"
          >
            <h3 className={styles.cardTitle}>Connect →</h3>
          </Link>
        </div>
      </main>
    </>
  );
}