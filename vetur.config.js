/**
 * tsconfig.jsonがサブディレクトリに存在しているときに、Vetur用の設定ファイル
 */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    {
      root: './nuxt',
      package: './package.json',
      tsconfig: './tsconfig.json',
      globalComponents: [
      ]
    }
  ]
}
