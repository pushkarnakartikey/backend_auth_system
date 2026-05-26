export class UserService {
  async getProfile(userId: string) {
    // Add logic here
    return { id: userId, name: "Test User" };
  }
}
