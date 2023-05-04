const fs = require('fs');
const path = require('path');
const process = require('process');

const { APP_VERSION, npm_package_version } = process.env;

let appVersion = (APP_VERSION || '').trim();

if (!appVersion) {
  const ROOT_DIR = path.resolve(__dirname, '../../');
  appVersion = npm_package_version;
  if (!appVersion) appVersion = require(`${ROOT_DIR}/lerna.json`).version || '0.0.0';
}

const execute = () => {
  const chartPath = path.resolve(__dirname, '../ui');
  const savePath = path.join(chartPath, 'values.yaml');
  const templatePath = path.join(chartPath, 'values-prod.yaml');

  const template = fs.readFileSync(templatePath).toString();
  const parsed = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    switch (key) {
      case 'APP_VERSION':
        return appVersion;
      default:
        return process.env[key] || '';
    }
  });

  fs.rmSync(savePath, { force: true });
  fs.writeFileSync(savePath, parsed);

  console.log('[Info]: App Chart Values Rendered Successfully');
};

execute();
