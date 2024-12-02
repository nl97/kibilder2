import { loadStripe } from '@stripe/stripe-js';
import { API_CONFIG } from './config';

export const stripePromise = loadStripe(API_CONFIG.stripePublicKey);

export async function createSubscriptionSession(): Promise<string | null> {
  try {
    const response = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to create subscription session');
    }

    return data.sessionId;
  } catch (error) {
    console.error('Error creating subscription:', error);
    return null;
  }
}

export async function checkSubscriptionStatus(): Promise<boolean> {
  try {
    const response = await fetch('/api/check-subscription');
    const data = await response.json();
    return data.isSubscribed;
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}