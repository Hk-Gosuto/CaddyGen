export default {
  app: {
    title: 'CaddyGen',
    hostType: {
      fileServer: 'File Server',
      reverseProxy: 'Reverse Proxy'
    },
    tls: {
      enabled: 'TLS Enabled'
    },
    compression: {
      enabled: 'Compression Enabled'
    },
    preset: {
      custom: 'Custom'
    },
    subtitle: 'Caddy Config Generator',
    description: {
      part1: 'A user-friendly interface for generating Caddy server configurations. Create and manage reverse proxy and file server configurations with support for SSL, compression, security headers, and more.',
      part2: 'Choose from popular application presets or create custom configurations. All changes are saved locally in your browser.'
    },
    about: 'About CaddyGen',
    addHost: 'Add New Host',
    importCaddyfile: 'Import Caddyfile',
    noHosts: 'No hosts configured yet. Add your first host to get started!',
    footer: {
      madeWith: 'Made with ❤️ for the Caddy community',
      storage: 'Configurations are stored locally in your browser'
    }
  },
  hostForm: {
    title: {
      add: 'Add New Host',
      edit: 'Edit Host'
    },
    domain: 'Domain',
    preset: 'Preset (optional)',
    type: 'Type',
    typeOptions: {
      reverseProxy: 'Reverse Proxy',
      fileServer: 'File Server'
    },
    fileServer: {
      root: 'Root Directory',
      browse: 'Enable directory listing',
      php: 'Enable PHP support',
      frankenphp: 'Enable FrankenPHP'
    },
    reverseProxy: {
      proxyTo: 'Proxy To'
    },
    encoding: 'Enable Gzip and Zstandard compression',
    advanced: {
      show: 'Show Advanced Options',
      hide: 'Hide Advanced Options',
      tls: {
        email: 'TLS Email (for Let\'s Encrypt)',
        selfSigned: 'Use self-signed certificate',
        certFile: 'Cert File',
        keyFile: 'Key File'
      },
      security: {
        title: 'Security',
        csp: {
          enable: 'Enable Content Security Policy',
          policy: 'Content Security Policy'
        },
        ipFilter: {
          enable: 'Enable IP Filtering',
          allow: 'IP Allow List (one per line)',
          block: 'IP Block List (one per line)'
        },
        forwardAuth: {
          enable: 'Enable Forward Authentication',
          url: 'Authentication URL',
          header: 'Verify Header (optional)',
          value: 'Verify Value (optional)'
        },
        rateLimit: {
          enable: 'Enable Rate Limiting',
          requests: 'requests per'
        }
      },
      cors: {
        enable: 'Enable CORS',
        origins: 'Allow Origins (one per line)'
      },
      performance: {
        title: 'Performance',
        brotli: 'Enable Brotli compression (requires an additional module)',
        cache: {
          enable: 'Enable Cache Control',
          control: 'Cache Control'
        }
      },
      hideFiles: {
        title: 'Hidden Files',
        patterns: 'Hide Patterns (one per line)'
      }
    },
    save: 'Save Host',
    cancel: 'Cancel'
  },
  importModal: {
    title: 'Import Caddyfile',
    paste: 'Paste your Caddyfile content:',
    or: 'or',
    import: 'Import',
    close: 'Cancel',
    upload: 'Upload Caddyfile'
  },
  presetModal: {
    title: 'Select Preset',
    apply: 'Apply',
    close: 'Cancel',
    search: 'Search presets...',
    category: {
      all: 'All',
      noResults: 'No presets found matching your search'
    },
    preset: {
      port: 'Port:',
      visitWebsite: 'Visit website',
      viewGithub: 'View on GitHub'
    }
  },
  presetSelect:{
    select: 'Select from Presets',
    change: 'Change Preset',
    clear: 'Clear',
    current: 'Current Preset: Port'
  },
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success'
  }
}