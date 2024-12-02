import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Get customer ID from cookie or auth header
    const customerId = event.headers.authorization?.replace('Bearer ', '');
    
    if (!customerId) {
      return {
        statusCode: 200,
        body: JSON.stringify({ isSubscribed: false }),
      };
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        isSubscribed: subscriptions.data.length > 0,
      }),
    };
  } catch (error) {
    console.error('Subscription check error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error' 
      }),
    };
  }
}