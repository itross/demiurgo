#!/user/bin/env node
// Copyright (C) 2022 - IT Resources, S.r.l.
//
// based on
// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
// https://github.com/sitepoint-editors/ginit

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import CLI from 'clui';

function projectNameFromPath() {
  const splittedPath = process.cwd().split('/');
  return splittedPath[splittedPath.length - 1];
}

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Demiurgo', {
      font: 'Larry 3D',
      horizontalLayout: 'full',
      verticalLayout: 'full',
      width: 80,
      whitespaceBreak: true
    })
  )
);

console.log(chalk.green('\t\t\tNode.js Project Generator'));
console.log(chalk.cyan('\t\tCopyright (C) 2022 IT Resources s.r.l.'));
console.log(chalk.cyan('\t\t\t\tv0.1.0\n\n'));

function ask() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Inserisci il nome per il progetto',
      default: projectNameFromPath()
    },
    {
      type: 'confirm',
      name: 'createDir',
      message:
        'Vuoi creare la directory di progetto (altrimenti il progetto sarà generato nella directory corrente)'
    },
    {
      type: 'confirm',
      name: 'eslint',
      message: 'Vuoi utilizzare ESlint e Prettier per il progetto'
    },
    {
      type: 'list',
      name: 'type',
      message: 'Che tipo di progetto vuoi generare',
      choices: ['Node.js vuoto', 'Fastify App', 'Fastify Plugin']
    }
  ];
  return inquirer.prompt(questions);
}

// function askProjectName() {
//   const questions = [
//     {
//       type: 'input',
//       name: 'projectName',
//       message: 'Inserisci il nome per il progetto',
//       default: projectNameFromPath()
//     }
//   ];
//   return inquirer.prompt(questions);
// }

// function askEslint() {
//   const questions = [
//     {
//       type: 'input',
//       name: 'eslint',
//       message: 'Vuoi utilizzare ESlint e Prettier per il progetto',
//       default: true
//     }
//   ];
//   return inquirer.prompt(questions);
// }

(async () => {
  // const answerProjectName = await askProjectName();
  // const answerEslint = await askEslint();
  // const answers = { ...answerProjectName, ...answerEslint };
  const answers = await ask();
  const status = new CLI.Spinner(
    'Inizializzazione della struttura di progetto...'
  );
  status.start();

  setTimeout(() => {
    status.stop();
    console.log(answers);
  }, 2000);
  // console.log(projectName);
})();
