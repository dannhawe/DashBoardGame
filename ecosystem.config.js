module.exports = {
    apps: [
      {
        name: 'dashboard',
        script : "./App.jsx",
        args: 'start -p 5555',
  
        instances: 'max',
        exec_mode: 'cluster',
  
        watch: false,
        //watch_delay: 1000,
        //ignore_watch: ["node_modules", "src/public"],
  
        autorestart: true,
        max_restarts: 10,
        restart_delay: 5000,
      },
    ],
  };
  