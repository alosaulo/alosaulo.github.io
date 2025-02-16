
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://alosaulo.github.io/alosaulo.github.io/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1204, hash: '336d044cf8a230b8dd99d2060de72fb450ed59bb78c56965b44ce9afda9d98f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1339, hash: '141c3b4af9a580929af94a28a8a27599fe03e80fa9e54ffe239c9383400d3b8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LTDJIP7L.css': {size: 527, hash: 'yO3/Jbsi/58', text: () => import('./assets-chunks/styles-LTDJIP7L_css.mjs').then(m => m.default)}
  },
};
