const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "http://localhost:8080",
    source: false,
    secure: false
  },
];

module.exports = PROXY_CONFIG;
