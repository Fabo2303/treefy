document.getElementById('copyTree').addEventListener('click', () => {
  const treeContainer = document.getElementById('tree-container');
  const treeText = treeContainer.innerText;

  if (!treeText.trim() || treeText.trim() === '📂 Tu estructura aparecerá aquí...') { 
    alert('No hay estructura para copiar.');
    return;
  }

  navigator.clipboard.writeText(treeText)
    .then(() => {
      alert('¡Estructura copiada al portapapeles!');
    })
    .catch(err => {
      console.error('Error al copiar: ', err);
    });
});

document.getElementById('clearTree').addEventListener('click', () => {
  const treeContainer = document.getElementById('tree-container');
  treeContainer.innerHTML = '📂 Tu estructura aparecerá aquí...';
});

document.getElementById("folderInput").addEventListener("change", function() {
  var fileCount = this.files.length;
  var fileCountText = fileCount === 1 ? "1 archivo seleccionado" : fileCount + " archivos seleccionados";
  document.getElementById("fileCount").textContent = fileCountText;
});

function checkFileName(fileName) {
  const excludedNames = new Set([
  // Python
  '__pycache__', 'venv', '.venv', '.pytest_cache', '.mypy_cache', '.tox', '.coverage',

  // Node.js / JavaScript
  'node_modules', '.parcel-cache', '.next', 'dist', 'build', 'coverage', '.turbo', '.vercel', '.netlify',

  // Git / Version control
  '.git', '.hg', '.svn', '.gitlab-ci',

  // Docker
  '.docker', '.dockerignore', 

  // System / OS
  '.DS_Store', 'Thumbs.db',

  // IDEs / Editors
  '.vscode', '.idea', '.nvim', '.history',

  // Web frameworks
  '.svelte-kit', '.astro', '.nuxt', '.docusaurus',

  // Logs
  'logs', 'log', '.log',

  // Databases
  'db', 'database', 'data',

  // Caches
  '.cache', 'cache', '.gradle', '.yarn-cache',

  // Java / Android
  'bin', 'out', '.gradle', '.settings',

  // Misc
  '.env', '.env.local', '.env.production', '.env.development', '.env.test', // Aunque son archivos, a veces como carpetas
]);

  
  for (const excluded of excludedNames) {
    if (fileName.includes(excluded)) {
      return false;
    }
  }

  return true;
}

function handleSelect() {
  const folderInput = document.getElementById('folderInput');
  const files = folderInput.files;

  if (files.length === 0) {
    alert("No se seleccionó ninguna carpeta.");
    return;
  }

  const fullPath = files[0].webkitRelativePath;
  const rootFolderName = fullPath.split('/')[0];

  const treeStructure = buildTree(files);
  const treeString = `${rootFolderName}/\n` + generateTreeFromObject(treeStructure[rootFolderName], 0); // 👈 imprimimos root manualmente

  const treeContainer = document.getElementById('tree-container');
  treeContainer.innerHTML = `<pre>${treeString}</pre>`;
}

function buildTree(files) {
  const root = {};

  for (const file of files) {
    const fullPath = file.webkitRelativePath;
    if (!checkFileName(fullPath)) {
      continue;
    }

    const parts = fullPath.split('/');
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!current[part]) {
        current[part] = (i === parts.length - 1) ? null : {};
      }
      current = current[part];
    }
  }

  return root;
}

function getIcon(fileName, isFolder) {
  if (isFolder) {
    return iconMap.folder;
  }

  const lowerName = fileName.toLowerCase();

  if (iconMap[lowerName]) {
    return iconMap[lowerName];
  }

  const extension = '.' + lowerName.split('.').pop();
  return iconMap[extension] || iconMap.file;
}

function generateTreeFromObject(tree, depth = 0) {
  const folders = [];
  const files = [];

  for (const key of Object.keys(tree)) {
    if (tree[key] === null) {
      files.push(key);
    } else {
      folders.push(key);
    }
  }

  folders.sort((a, b) => a.localeCompare(b));
  files.sort((a, b) => a.localeCompare(b));

  const entries = [...folders, ...files];
  let result = '';

  entries.forEach((key, index) => {
    const isLast = index === entries.length - 1;
    const prefix = '│   '.repeat(depth) + (isLast ? '└── ' : '├── ');
    const isFolder = tree[key] !== null;
    const icon = getIcon(key, isFolder);
    const displayName = isFolder ? `${key}/` : key;

    result += `${prefix}${icon} ${displayName}\n`;

    if (isFolder) {
      result += generateTreeFromObject(tree[key], depth + 1);
    }
  });

  return result;
}

