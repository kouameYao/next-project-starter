import { execSync } from 'child_process';

function checkYarn() {
  if (!process.env.npm_execpath || !process.env.npm_execpath.includes('yarn')) {
    console.error('❌ Vous devez utiliser Yarn pour installer ce projet.');
    process.exit(1);
  }

  const version = execSync('yarn --version').toString().trim();
  console.log(`🔍 Yarn détecté : v${version}`);

  const [major, minor, patch] = version.split('.').map(Number);

  // Version minimale requise
  const minMajor = 1;
  const minMinor = 22;
  const minPatch = 19;

  // Vérifie pour Yarn v1.x
  if (
    major === 1 &&
    (minor < minMinor || (minor === minMinor && patch < minPatch))
  ) {
    console.error(
      `❌ Yarn ${version} détecté. Version minimale requise : ${minMajor}.${minMinor}.${minPatch}`
    );
    process.exit(1);
  }

  // Vérifie Yarn v2+ (Berry)
  if (major >= 2) {
    console.log('✅ Yarn Berry ou supérieur détecté, c’est bon !');
    return;
  }

  console.log('✅ Yarn valide détecté, installation possible.');
}

checkYarn();
