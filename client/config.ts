interface Config {
  baseUrl: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};

  if (server === 'server') {
    config = {
      baseUrl: '',
    };
  } else if (server === 'local') {
    config = {
      baseUrl: 'https://bazar-shop.onrender.com',
    };
  } else {
    config = {
      baseUrl: '',
    };
  }

  return config;
};

export const selectServer = 'local';
export const config = checkConfig(selectServer) as Config;
