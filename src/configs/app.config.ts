/** @format */

export type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  tourPath: string;
  locale: string;
  enableMock: boolean;
};

const appConfig: AppConfig = {
  apiPrefix: "https://agbackend.sarvadhi.work/api",
  // apiPrefix: "https://aeab-103-238-110-96.ngrok-free.app/api",
  authenticatedEntryPath: "/app/ankit/dashboard",
  unAuthenticatedEntryPath: "/sign-in",
  tourPath: "/app/ankit/dashboard",
  locale: "en",
  enableMock: true,
};

export default appConfig;
