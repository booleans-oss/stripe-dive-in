import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { env } from "~/env.mjs";

const stripe = new Stripe(env.STRIPE_KEY, { apiVersion: "2022-11-15" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { code },
  } = req;

  if (!code || typeof code !== "string") {
    res.status(400).json({ error: "Invalid code" });
    return;
  }

  const response = await stripe.oauth.token({
    grant_type: "authorization_code",
    code: code,
  });

  const userId = response.stripe_user_id;

  if (!userId) {
    res.status(400).json({ error: "Invalid code" });
    return;
  }

  console.log('user id: ', userId)

  localStorage.setItem("stripe_access_token", userId);

  res.redirect("/");
}
