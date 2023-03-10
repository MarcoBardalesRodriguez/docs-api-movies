export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/MarcoBardalesRodriguez/docs-api-movies/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.com`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Information', link: 'en/information' },
			{ text: 'Named', link: 'en/named' }
		],
		' Resource List': [
			{ text: 'Movies', link: 'en/movies' },
			{ text: 'Genres', link: 'en/genres' },
			{ text: 'Genres mapping', link: 'en/genremapping' },
			{ text: 'Persons', link: 'en/persons' },
			{ text: 'Directors mapping', link: 'en/directormapping' },
			{ text: 'Roles mapping', link: 'en/rolemapping' },
			{ text: 'Rating', link: 'en/rating' }
		],
	},
};
