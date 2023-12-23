module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    load: {
      before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
      after: ['parser', 'router'],
    },
    settings: {
      cors: {
        enabled: true,
        origin: ['*']
      },
    },
  }
  
];
