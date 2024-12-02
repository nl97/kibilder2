import Cookies from 'js-cookie';
import { startOfDay, endOfDay } from 'date-fns';

const QUOTA_COOKIE_KEY = 'image_generation_quota';
const DAILY_LIMIT = 3;

interface QuotaData {
  count: number;
  date: string;
}

function getCurrentQuota(): QuotaData {
  const quotaStr = Cookies.get(QUOTA_COOKIE_KEY);
  if (!quotaStr) {
    return { count: 0, date: new Date().toISOString() };
  }
  
  try {
    return JSON.parse(quotaStr);
  } catch (e) {
    console.error('Error parsing quota cookie:', e);
    return { count: 0, date: new Date().toISOString() };
  }
}

function setQuota(quota: QuotaData) {
  try {
    Cookies.set(QUOTA_COOKIE_KEY, JSON.stringify(quota), {
      expires: 7, // Keep cookie for 7 days
      sameSite: 'strict'
    });
  } catch (e) {
    console.error('Error setting quota cookie:', e);
  }
}

export function getUserQuota(): QuotaData {
  const quota = getCurrentQuota();
  const today = startOfDay(new Date());
  const quotaDate = startOfDay(new Date(quota.date));

  // Reset if it's a new day
  if (quotaDate < today) {
    const newQuota = { count: 0, date: new Date().toISOString() };
    setQuota(newQuota);
    return newQuota;
  }

  return quota;
}

export function canGenerateImage(): boolean {
  const quota = getUserQuota();
  return quota.count < DAILY_LIMIT;
}

export function incrementQuota(): void {
  const quota = getUserQuota();
  const newQuota = {
    count: quota.count + 1,
    date: quota.date
  };
  setQuota(newQuota);
  console.log('Updated quota:', newQuota);
}

export function getRemainingGenerations(): number {
  const quota = getUserQuota();
  return Math.max(0, DAILY_LIMIT - quota.count);
}

export function getQuotaResetTime(): Date {
  return endOfDay(new Date());
}