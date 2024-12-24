export interface UserInterface {
  id: number;
  username: string;
  displayName?: string;
}

export interface CreateUserInterface {
  username: string;
  displayName?: string;
}
