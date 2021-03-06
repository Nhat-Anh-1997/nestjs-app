import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: '1',
      email: 'john',
      password: 'nhatanh',
    },
    {
      userId: '2',
      email: 'maria',
      password: 'nhatanh',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
