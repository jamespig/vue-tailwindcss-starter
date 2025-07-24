import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import chalk from "chalk";
import ora from "ora";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 可用的模板
const TEMPLATES = {
  base: "vue-tailwind-base",
  router: "vue-tailwind-router",
};

async function createProject(projectName, options) {
  const { template = "base" } = options;
  const templateName = TEMPLATES[template];

  if (!templateName) {
    throw new Error(
      `Unknown template: ${template}. Available: ${Object.keys(TEMPLATES).join(
        ", "
      )}`
    );
  }

  console.log(
    chalk.blue(
      `🚀 Creating ${chalk.bold(projectName)} with ${chalk.bold(
        template
      )} template`
    )
  );
  console.log("");

  // 檢查目標目錄
  const targetPath = path.resolve(projectName);
  if (await fs.pathExists(targetPath)) {
    throw new Error(`Directory ${projectName} already exists`);
  }

  try {
    await copyTemplate(templateName, projectName);
    await updateProjectName(projectName);
    await installDependencies(projectName);
    showSuccess(projectName, template);
  } catch (error) {
    // 清理失敗的建立
    try {
      await fs.remove(targetPath);
    } catch (cleanupError) {
      // 忽略清理錯誤
    }
    throw error;
  }
}

async function copyTemplate(templateName, projectName) {
  const spinner = ora("📋 Copying template files...").start();

  try {
    const templatePath = path.join(__dirname, "../templates", templateName);
    const targetPath = path.resolve(projectName);

    if (!(await fs.pathExists(templatePath))) {
      throw new Error(`Template ${templateName} not found at ${templatePath}`);
    }

    await fs.copy(templatePath, targetPath);
    spinner.succeed("✅ Template files copied");
  } catch (error) {
    spinner.fail("❌ Failed to copy template");
    throw error;
  }
}

async function updateProjectName(projectName) {
  const spinner = ora("🏷️  Updating project name...").start();

  try {
    const packageJsonPath = path.join(projectName, "package.json");

    if (await fs.pathExists(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }

    spinner.succeed("✅ Project name updated");
  } catch (error) {
    spinner.fail("❌ Failed to update project name");
    throw error;
  }
}

async function installDependencies(projectName) {
  const spinner = ora("📦 Installing dependencies...").start();

  try {
    const packageManager = detectPackageManager();
    spinner.text = `📦 Installing dependencies with ${packageManager}...`;

    execSync(`${packageManager} install`, {
      cwd: path.resolve(projectName),
      stdio: "pipe",
    });

    spinner.succeed(`✅ Dependencies installed with ${packageManager}`);
  } catch (error) {
    spinner.fail("❌ Failed to install dependencies");
    throw error;
  }
}

function detectPackageManager() {
  try {
    execSync("pnpm --version", { stdio: "pipe" });
    return "pnpm";
  } catch {}

  try {
    execSync("yarn --version", { stdio: "pipe" });
    return "yarn";
  } catch {}

  return "npm";
}

function showSuccess(projectName, template) {
  console.log("");
  console.log(chalk.green.bold("🎉 Project created successfully!"));
  console.log("");

  console.log(chalk.cyan("📁 Project Details:"));
  console.log(`   Name: ${chalk.bold(projectName)}`);
  console.log(`   Template: ${chalk.bold(template)}`);
  console.log("");

  console.log(chalk.cyan("🚀 Next steps:"));
  console.log(`   ${chalk.gray("cd")} ${projectName}`);
  console.log(`   ${chalk.gray("npm run dev")}`);
  console.log("");

  console.log(chalk.yellow("✨ Happy coding! Build something amazing! 🚀"));
  console.log("");
}

export { createProject };
