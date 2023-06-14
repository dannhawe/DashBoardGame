module.exports = {
  apps: [
    {
      name: 'dash-board',
      script: 'npm',
      args: 'start -p 5555',
      cwd: '/path/to/your/project',
      watch: true,
      ignore_watch: ['node_modules', 'dist']
    },
    {
      script: 'index.js',
      watch: '.'
    },
    {
      script: './service-worker/',
      watch: ['./service-worker']
    }
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
