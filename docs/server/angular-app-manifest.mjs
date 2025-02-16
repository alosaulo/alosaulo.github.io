
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 869, hash: 'd03f6dd53720f0fbe97e390c157e79d5ebfaaf480df120447a9ecf6cad5d4ec3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '9332584b458944d73fcf8fc9203acceb944b9eb46dc834736ba264af4fc978f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JLPW24XB.css': {size: 2026, hash: 'QyRHITNVBak', text: () => import('./assets-chunks/styles-JLPW24XB_css.mjs').then(m => m.default)}
  },
};
