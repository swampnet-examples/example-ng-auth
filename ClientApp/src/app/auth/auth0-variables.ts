interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '847Lx4SvoX1wxqG0yW0WVqwSMdmDyK26',
  domain: 'petejw.eu.auth0.com',
  callbackURL: 'http://localhost:5000/callback'
};
