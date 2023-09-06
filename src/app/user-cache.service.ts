import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCacheService {
  private cache: { [userId: number]: any } = {};

  constructor() { }

  // Cache user data
  cacheUserData(userId: number, userData: any) {
    this.cache[userId] = userData;
  }

  // Get cached user data
  getCachedUserData(userId: number): any {
    return this.cache[userId];
  }
}
