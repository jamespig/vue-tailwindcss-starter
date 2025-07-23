#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

async function createProject(projectName) {
  console.log(chalk.blue(`⏳ Creating project: ${projectName}`));
  console.log(chalk.green("✅ Basic CLI is running!"));
  console.log(
    chalk.yellow("🔍 Next we will add actual project creation functionality")
  );
}

program
  .version("1.0.0")
  .argument("<project-name>", "Vue project name")
  .description("Create a new Vue project")
  .action(async (projectName) => {
    await createProject(projectName);
  });

program.parse();
