import inquirer from 'inquirer';

function countCharactersAndWords(text: string) {
  // Remove all whitespaces (spaces, tabs, newlines) and split the text into words
  const words = text.replace(/\s+/g, ' ').trim().split(' ');

  // Count characters by removing spaces
  const characterCount = text.replace(/\s+/g, '').length;

  // Count words
  const wordCount = words.length;

  return { characterCount, wordCount };
}

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'paragraph',
      message: 'Enter an English paragraph:',
    },
  ]);

  const { characterCount, wordCount } = countCharactersAndWords(answers.paragraph);

  console.log(`Character Count (excluding whitespaces): ${characterCount}`);
  console.log(`Word Count (excluding whitespaces): ${wordCount}`);
}

main();
