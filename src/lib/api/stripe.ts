import { loadStripe } from '@stripe/stripe-js';
import { API_CONFIG } from '../config';

const CUSTOMER_ID_KEY = 'stripe_customer_id';

export const stripePromise = loadStripe(API_CONFIG.stripePublicKey);

interface CreateSubscriptionResponse {
  sessionId: string;
  error?: string;
}

export async function createSubscriptionSession(): Promise<CreateSubscriptionResponse> {
  try {
    const customerId = localStorage.getItem(CUSTOMER_ID_KEY);
    
    const response = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId,
        productId: API_CONFIG.stripeProductId,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Fehler beim Erstellen der Subscription');
    }

    const data = await response.json();
    return { sessionId: data.sessionId };
  } catch (error) {
    console.error('Subscription creation error:', error);
    return {
      sessionId: '',
      error: error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten'
    };
  }
}

export async function checkSubscriptionStatus(): Promise<boolean> {
  try {
    const customerId = localStorage.getItem(CUSTOMER_ID_KEY);
    if (!customerId) return false;

    const response = await fetch('/api/check-subscription', {
      headers: {
        'Authorization': `Bearer ${customerId}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Fehler beim Prüfen des Subscription-Status');
    }

    const data = await response.json();
    return Boolean(data.isSubscribed);
  } catch (error) {
    console.error('Subscription check error:', error);
    return false;
  }
}

export function setCustomerId(customerId: string) {
  localStorage.setItem(CUSTOMER_ID_KEY, customerId);
}