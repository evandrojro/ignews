import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs(){
    const stripeJS = await loadStripe(process.env.STRIPE_PUBLIC_KEY);

    return stripeJS
}