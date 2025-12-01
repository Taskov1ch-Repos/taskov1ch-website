import { type Project, type LinkItem, type Skill } from "../types";

export const projects: Project[] = [
	{
		id: "01",
		name: "AURION",
		description: "High-performance data aggregation engine for real-time analytics.",
		description_ru: "Высокопроизводительный движок агрегации данных для аналитики в реальном времени.",
		tags: ["PYTHON", "REDIS", "DOCKER"],
		isMain: true,
		status: "ONLINE",
		repoUrl: "https://github.com/microsoft/TypeScript", // Demo URL
		repoBranch: "main"
	},
	{
		id: "02",
		name: "BANEDETTA",
		description: "Automated plugin management system for Minecraft Bedrock servers.",
		description_ru: "Автоматизированная система управления плагинами Minecraft Bedrock.",
		tags: ["PHP", "PMMP", "REACT"],
		isMain: false,
		status: "DEV",
		repoUrl: "https://github.com/pmmp/PocketMine-MP" // Demo URL
	},
	{
		id: "03",
		name: "CORE_MATRIX",
		description: "Neural network visualization tool running in the browser.",
		description_ru: "Инструмент визуализации нейронных сетей в браузере.",
		tags: ["TYPESCRIPT", "WEBGL", "D3"],
		isMain: true,
		status: "ONLINE",
		repoUrl: "https://github.com/d3/d3" // Demo URL
	},
	{
		id: "04",
		name: "VOID_SHELL",
		description: "CLI wrapper for managing cloud infrastructure via Discord.",
		description_ru: "CLI-оболочка для управления облачной инфраструктурой через Discord.",
		tags: ["GO", "DISCORD API", "AWS"],
		isMain: false,
		status: "OFFLINE",
		repoUrl: "https://github.com/docker/cli"
	}
];

export const skills: Skill[] = [
	{ name: "PYTHON", level: 95, category: "LANG" },
	{ name: "TYPESCRIPT", level: 85, category: "LANG" },
	{ name: "RUST", level: 60, category: "LANG" },
	{ name: "REACT", level: 90, category: "FRAMEWORK" },
	{ name: "DOCKER", level: 80, category: "TOOL" },
	{ name: "POSTGRESQL", level: 75, category: "TOOL" }
];

export const links: LinkItem[] = [
	{ id: "L1", label: "GITHUB", url: "https://github.com", category: "CODE" },
	{ id: "L2", label: "LINKEDIN", url: "https://linkedin.com", category: "SOCIAL" },
	{ id: "L3", label: "TWITTER", url: "https://twitter.com", category: "SOCIAL" },
	{ id: "L4", label: "MAIL", url: "mailto:contact@example.com", category: "CONTACT" }
];