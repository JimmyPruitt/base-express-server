module.exports = {
  '**/*.{ts,tsx,js,jsx}': ['yarn lint'],
  '**/*.{ts,tsx,js,jsx,json,gql,md,html,css,less,scss}': ['yarn prettier'],
  '*': files => {
    if (Array.isArray(files) && files.some(file => !!file.match(/\.tsx?$/))) {
      return ['yarn build']
    }

    return []
  },
}
