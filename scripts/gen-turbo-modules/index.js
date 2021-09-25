'use strict';

/*eslint-disable no-undef */
require('shelljs/global');
const _ = require('lodash');

const rootPath = '.';
const destPath = `${rootPath}`;
const rnTesterPath = `${rootPath}/packages/rn-tester`;
const scriptsPath = `${rootPath}/scripts`;
const templatesPath = `${scriptsPath}/gen-turbo-modules/templates`;
const destPackagesPath = `${destPath}/turbomodules`;
const modulesBase = `${rnTesterPath}/android/app/src/main/jni/modules`;

rm('-rf', `${rootPath}/turbomodules`);

for (const turboModuleName of ls(modulesBase)){
  const packageName = _.kebabCase(turboModuleName);
  const packageRoot = `${destPackagesPath}/${packageName}`;
  const packageSrc = `${packageRoot}/android/src/main/java/com/evernote/turbomodules`;
  mkdir('-p', packageSrc);

  // create package.json
  echo(JSON.stringify({
    name: packageName,
    description: 'TurboModule generated with rn-tester',
  })).to(`${packageRoot}/package.json`);

  // copy java fiiles
  for (let javaFile of find(modulesBase).filter(file => file.match(/\.java$/))) {
    cp(javaFile, packageSrc);
  }

  // index.js
  cp(`${rnTesterPath}/js/examples/TurboModule/${turboModuleName}.js`, `${packageRoot}/index.js`);

  // create the manifest
  const manifest = `
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.evernote.turbomodules.${packageName.replace(/-/gi, '')}">
    </manifest>
  `;
  echo(manifest).to(`${packageRoot}/android/src/main/AndroidManifest.xml`);

  // copy so's
  const soPath = `${rnTesterPath}/android/app/build/intermediates/ndkBuild/hermesDebug/obj/local`;
  const soDestPath = `${packageRoot}/android/src/main/jniLibs/`;
  mkdir('-p', soDestPath);
  cp('-R', soPath, soDestPath);
  mv(`${soDestPath}/local`, `${soDestPath}/ndkBuild`);

  // build.gradle
  cp(`${templatesPath}/build.gradle`, `${packageRoot}/android/build.gradle`);
}

