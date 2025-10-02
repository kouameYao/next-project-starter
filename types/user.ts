export interface IUser {
  role: string;
  contact: string;
  essai: number;
  firstConnexion: boolean;
  id: string;
  sessionTimeOut: number;
  locked: boolean;
  nom: string;
  prenom: string;
  email: string;
  sub: string;
  iat: number;
  exp: number;
  token?: string;
}
