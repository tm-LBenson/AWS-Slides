const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

// Function to extract value by key from the front matter
function extractValueByKey(key, content) {
  const regex = new RegExp(`^${key}:\\s*(.+)`, 'm');
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

// First rename all files to numbers
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error getting directory information.', err);
    return;
  }

  files.forEach((file, index) => {
    if (path.extname(file) === '.md') {
      fs.renameSync(
        path.join(directoryPath, file),
        path.join(directoryPath, `${index}.md`),
      );
    }
  });

  // Now rename based on content
  fs.readdir(directoryPath, (err, numberedFiles) => {
    if (err) {
      console.log('Error getting directory information.', err);
      return;
    }
    numberedFiles.forEach((file) => {
      if (path.extname(file) === '.md') {
        const content = fs.readFileSync(path.join(directoryPath, file), 'utf8');
        const endOfFrontMatter = content.indexOf('---', 3); // skip the first '---'
        if (endOfFrontMatter !== -1) {
          const frontMatterContent = content.slice(3, endOfFrontMatter);
          const section = extractValueByKey('section', frontMatterContent);
          const lesson = extractValueByKey('lesson', frontMatterContent);
          const order = extractValueByKey('order', frontMatterContent);
          let newFileName = `2024-1-5-section-${
            section.split('-')[1]
          }-lesson-${lesson}`;
          if (order) {
            newFileName += `-hands-on.md`;
          } else {
            newFileName += `.md`;
          }
          fs.renameSync(
            path.join(directoryPath, file),
            path.join(directoryPath, newFileName),
          );
        }
      }
    });
  });
});
