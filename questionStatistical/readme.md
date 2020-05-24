@electron/get/dist/cjs/artifact-utils.js

getArtifactRemoteURL

let path = mirrorVar('customDir', opts, details.version).replace('{{ version }}', details.version.replace(/^v/, ''));
    const file = mirrorVar('customFilename', opts, getArtifactFileName(details));
    path = path.replace('v','')
    base = 'https://npm.taobao.org/mirrors/electron/'
    console.log('=================',base, path, file)