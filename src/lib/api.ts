/**
 * API Configuration
 * 
 * This file contains configuration for API endpoints and utility functions
 * for making API requests.
 */
import { SITE_CONFIG } from '@/config/site';

// Determine the base URL based on the environment
export const getApiBaseUrl = (): string => {
  // In production, use the deployed backend URL from environment variable or site config as fallback
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_URL || SITE_CONFIG.api.baseUrl;
  }
  
  // In development, use environment variable or localhost as fallback
  return import.meta.env.VITE_API_URL_DEV || 'http://localhost:5001';
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact'
} as const;

// Full URLs for API endpoints
export const getApiUrl = (endpoint: string): string => {
  return `${getApiBaseUrl()}${endpoint}`;
};