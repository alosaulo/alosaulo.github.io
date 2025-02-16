
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1159, hash: 'dc0131b3eb4a5222154b7795e0557f16f3a6f56b8c2e8ca3686bf7d485a06b7e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1294, hash: '6dce1f44b625fed72720392c6aced8a2589c9a2cb37493f0befdfd17764de403', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LTDJIP7L.css': {size: 527, hash: 'yO3/Jbsi/58', text: () => import('./assets-chunks/styles-LTDJIP7L_css.mjs').then(m => m.default)}
  },
};
