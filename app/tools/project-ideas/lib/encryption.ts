import { Project } from "../types";

interface EncryptedData {
  projects?: Project[];
  project?: Project;
}

export function generateSecureToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function encryptData(data: EncryptedData): string {
  // This is a simple base64 encoding for demo purposes
  // In a real app, use proper encryption
  return btoa(JSON.stringify(data));
}

export function decryptData(encryptedData: string): EncryptedData {
  // This is a simple base64 decoding for demo purposes
  // In a real app, use proper decryption
  return JSON.parse(atob(encryptedData));
}

export function isValidToken(token: string): boolean {
  try {
    const [timestamp] = token.split('-');
    const tokenTime = parseInt(timestamp);
    const currentTime = Date.now();
    const timeDiff = currentTime - tokenTime;
    
    // Token is valid for 30 minutes (1800000 milliseconds)
    return timeDiff < 1800000;
  } catch {
    return false;
  }
} 