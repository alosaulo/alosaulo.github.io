
export default {
  basePath: 'https://alosaulo.github.io/alosaulo.github.io',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
