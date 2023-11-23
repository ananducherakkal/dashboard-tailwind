module.exports = {
  apps: [
    {
      name: "DashboardTailwindFe",
      script: "npm",
      automation: false,
      args: "run start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
