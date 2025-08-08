const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../turmas');

// Garante que a pasta "turmas" existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Template base do HTML de cada turma
const generateHTML = (className) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Turma ${className}</title>
  <link rel="stylesheet" href="../principal/styles.css" />
  <script src="https://unpkg.com/docx@8.4.0/build/index.umd.js"></script>
</head>
<body>
  <h1>Turma ${className}</h1>

  <div class="controls">
    <button id="sortBtn">Ordenar A-Z</button>
    <button id="generateBtn">Exportar DOCX</button>
  </div>

  <table class="students-table">
    <thead>
      <tr>
        <th>Foto</th>
        <th>Nome</th>
        <th>Nota</th>
        <th>Faltas</th>
        <th>Descrição</th>
        <th>Deficiência</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script src="../principal/script.js"></script>
</body>
</html>
`;

const anos = [1, 2, 3, 4, 5];
const letras = ['A', 'B', 'C', 'D'];

anos.forEach(ano => {
    letras.forEach(letra => {
        const className = `${ano}${letra}`;
        const filename = `turma-${className}.html`;
        const filepath = path.join(outputDir, filename);

        fs.writeFileSync(filepath, generateHTML(className), 'utf8');
        console.log(`✔ Página criada: ${filename}`);
    });
});