import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { productId, customerId, successUrl, cancelUrl } = JSON.parse(event.body || '{}');

    // Create or retrieve customer
    let customer;
    if (customerId) {
      try {
        customer = await stripe.customers.retrieve(customerId);
      } catch (e) {
        // If customer doesn't exist, create new one
        customer = await stripe.customers.create();
      }
    } else {
      customer = await stripe.customers.create();
    }

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product: productId,
            recurring: {
              interval: 'month',
            },
            unit_amount: 900, // €9.00
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: customer.id,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        sessionId: session.id,
        customerId: customer.id 
      }),
    };
  } catch (error) {
    console.error('Subscription creation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error' 
      }),
    };
  }
}