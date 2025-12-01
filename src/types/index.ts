export interface Project {
	id: string;
	name: string;
	description: string;
	description_ru?: string;
	tags: string[];
	isMain: boolean;
	cover?: string;
	repoUrl?: string;
	repoBranch?: string;
	status: "ONLINE" | "OFFLINE" | "DEV";
}

export interface Skill {
	name: string;
	level: number;
	category: "LANG" | "FRAMEWORK" | "TOOL";
}

export interface LinkItem {
	id: string;
	label: string;
	url: string;
	category: "SOCIAL" | "CODE" | "CONTACT";
}