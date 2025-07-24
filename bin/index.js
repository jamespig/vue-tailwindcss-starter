#!/usr/bin/env node

const { Command } = require("commander");
const { createProject } = require("../lib/creator");
const packageJson = require("../package.json");
const chalk = require("chalk");

const program = new Command();

program
  .name("vue-tailwind-starter")
  .description(
    "🚀 Create Vue 3 + TailwindCSS projects with beautiful pre-configured templates"
  )
  .version(packageJson.version);

program
  .command("create <project-name>")
  .description("Create a new Vue + TailwindCSS project")
  .option(
    "-t, --template <template>",
    "Template: minimal|spa|store|full",
    "full"
  )
  .action(async (projectName, options) => {
    try {
      console.log(chalk.blue.bold("🎨 Vue TailwindCSS Starter"));
      console.log(chalk.gray(`v${packageJson.version}\n`));

      await createProject(projectName, options);
    } catch (error) {
      console.error(chalk.red("❌ Error:"), error.message);
      process.exit(1);
    }
  });

// 添加幫助資訊
program.on("--help", () => {
  console.log("");
  console.log(chalk.cyan("Templates:"));
  console.log("  minimal    Vue + TypeScript + TailwindCSS");
  console.log("  spa        + Vue Router");
  console.log("  store      + Vue Router + Pinia");
  console.log("  full       + Vue Router + Pinia + Vitest + ESLint");
  console.log("");
  console.log(chalk.cyan("Examples:"));
  console.log("  $ vue-tailwind-starter create my-project");
  console.log("  $ vue-tailwind-starter create my-spa --template spa");
  console.log("  $ vue-tailwind-starter create my-store --template store");
  console.log("");
});

program.parse();
