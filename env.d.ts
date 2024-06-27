declare global {
  namespace NodeJs {
    interface ProcessEnv {
      REACT_APP_API_KEY: string;
      REACT_APP_OPEN_API: string;
    }
  }
}

export {}
