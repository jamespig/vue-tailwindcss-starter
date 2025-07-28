#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "../lib/creator.mjs";
import fs from "fs-extra";
import chalk from "chalk";

const program = new Command();
const packageJson = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url), "utf8")
);

program
  .name("vue-tailwind-starter")
  .description(
    "🚀 Create Vue 3 + TailwindCSS projects with beautiful pre-configured templates"
  )
  .version(packageJson.version);

program
  .command("create <project-name>")
  .description("Create a new Vue + TailwindCSS project")
  .option("-t, --template <template>", "Template: base|router", "base")
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
  console.log("  base       Vue + TypeScript + TailwindCSS");
  console.log("  router     + Vue Router");
  console.log("");
  console.log(chalk.cyan("Examples:"));
  console.log("  $ vue-tailwind-starter create my-project");
  console.log("  $ vue-tailwind-starter create my-project --template router");
  console.log("");
});

program.parse();
