/**
 * API Utility Tests
 * 
 * This file contains tests for the API utility functions.
 */

import { getApiBaseUrl, getApiUrl, API_ENDPOINTS } from './api';

// Mock the environment
const originalEnv = process.env;

describe('API Utilities', () => {
  beforeEach(() => {
    // Reset environment variables before each test
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    // Restore original environment variables after each test
    process.env = originalEnv;
  });

  test('getApiBaseUrl returns localhost in development', () => {
    // Mock development environment
    Object.defineProperty(import.meta, 'env', {
      value: { PROD: false },
      configurable: true
    });
    
    expect(getApiBaseUrl()).toBe('http://localhost:5001');
  });

  test('getApiBaseUrl returns production URL in production', () => {
    // Mock production environment
    Object.defineProperty(import.meta, 'env', {
      value: { PROD: true },
      configurable: true
    });
    
    expect(getApiBaseUrl()).toBe('https://threed-portfolio-2-u9hw.onrender.com');
  });

  test('getApiUrl constructs correct URL', () => {
    // Mock development environment
    Object.defineProperty(import.meta, 'env', {
      value: { PROD: false },
      configurable: true
    });
    
    expect(getApiUrl(API_ENDPOINTS.CONTACT)).toBe('http://localhost:5001/api/contact');
  });
});