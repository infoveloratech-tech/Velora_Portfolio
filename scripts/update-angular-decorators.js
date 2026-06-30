const fs = require('fs');
const path = require('path');
const files = [
  'src/app/app.component.ts',
  'src/app/components/navbar/navbar.component.ts',
  'src/app/components/footer/footer.component.ts',
  'src/app/pages/home/home.component.ts',
  'src/app/pages/contact/contact.component.ts',
  'src/app/pages/about/about.component.ts',
  'src/app/pages/services/services.component.ts',
  'src/app/pages/projects/projects.component.ts',
  'src/app/pages/skills/skills.component.ts'
];
const regex = /template:\s*`[\s\S]*?`,\s*styles:\s*\[\s*`[\s\S]*?`\s*\]/;

for (const file of files) {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!regex.test(content)) {
    throw new Error('template/styles not found in ' + file);
  }
  const name = path.basename(file, '.ts');
  const replacement = `templateUrl: './${name}.html',\n  styleUrls: ['./${name}.css']`;
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
