export default {
  app: {
    title: 'CaddyGen',
    hostType: {
      fileServer: '文件服务器',
      reverseProxy: '反向代理'
    },
    tls: {
      enabled: 'TLS已启用'
    },
    compression: {
      enabled: '压缩已启用'
    },
    preset: {
      custom: '自定义'
    },
    subtitle: 'Caddy配置生成器',
    description: {
      part1: '一个用户友好的Caddy服务器配置界面。创建和管理反向代理和文件服务器配置，支持SSL、压缩、安全标头等功能。',
      part2: '选择流行应用程序预设或创建自定义配置。所有更改都保存在浏览器本地。'
    },
    about: '关于CaddyGen',
    addHost: '添加新主机',
    importCaddyfile: '导入Caddyfile',
    noHosts: '尚未配置任何主机。点击添加新主机开始使用！',
    footer: {
      madeWith: '为Caddy社区倾心打造',
      storage: '配置保存在您的浏览器本地'
    }
  },
  hostForm: {
    title: {
      add: '添加新主机',
      edit: '编辑主机'
    },
    domain: '域名',
    preset: '预设（可选）',
    type: '类型',
    typeOptions: {
      reverseProxy: '反向代理',
      fileServer: '文件服务器'
    },
    fileServer: {
      root: '根目录',
      browse: '启用目录列表',
      php: '启用PHP支持',
      frankenphp: '启用FrankenPHP'
    },
    reverseProxy: {
      proxyTo: '代理到'
    },
    encoding: '启用Gzip和Zstandard压缩',
    advanced: {
      show: '显示高级选项',
      hide: '隐藏高级选项',
      tls: {
        email: 'TLS邮箱（用于Let\'s Encrypt）',
        selfSigned: '使用自签名证书',
        certFile: '证书文件',
        keyFile: '密钥文件'
      },
      security: {
        title: '安全',
        csp: {
          enable: '启用内容安全策略',
          policy: '内容安全策略'
        },
        ipFilter: {
          enable: '启用IP过滤',
          allow: 'IP允许列表（每行一个）',
          block: 'IP阻止列表（每行一个）'
        },
        forwardAuth: {
          enable: '启用转发认证',
          url: '认证URL',
          header: '验证头（可选）',
          value: '验证值（可选）'
        },
        rateLimit: {
          enable: '启用速率限制',
          requests: '请求每'
        }
      },
      cors: {
        enable: '启用CORS',
        origins: '允许来源（每行一个）'
      },
      performance: {
        title: '性能',
        brotli: '启用Brotli压缩（需要额外模块）',
        cache: {
          enable: '启用缓存控制',
          control: '缓存控制'
        }
      },
      hideFiles: {
        title: '隐藏文件',
        patterns: '隐藏模式（每行一个）'
      }
    },
    save: '保存主机',
    cancel: '取消'
  },
  importModal: {
    title: '导入Caddyfile',
    paste: '粘贴您的Caddyfile内容：',
    or: '或',
    import: '导入',
    close: '取消',
    upload: '上传Caddyfile'
  },
  presetModal: {
    title: '选择预设',
    apply: '应用',
    close: '取消',
    search: '搜索预设...',
    category: {
      all: '全部',
      noResults: '未找到匹配的预设'
    },
    preset: {
      port: '端口：',
      visitWebsite: '访问网站',
      viewGithub: '在GitHub上查看'
    }
  },
  presetSelect: {
    select: '从预设中选择',
    change: '更改预设',
    clear: '清除',
    current: '当前预设：端口'
  },
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功'
  }
}