export type CertificateCardProps = {
	title: string;
	description: string;
	imageURL: string;
	grade: string;
	gradeColor: string;
};

export type Tags = {
	name: string;
	color: string;
};
export type ProjectCardProps = {
	title: string;
	description: string;
	imgURL: string;
	icon: React.ReactNode;
	category: string;
	link: string;
	demoLink: string;
	tags: {
		name: string;
		color: string;
	}[];
};

export type SkillCardProps = {
	id: number;
	title: string;
	content: React.ReactNode;
};

export type SocialMediaCardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
	link: string;
};
