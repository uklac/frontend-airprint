export interface ConfigStellarMap {
	lines?: {
		graticule: boolean;
	},
	constellations?: {
		name: boolean;
		lines: boolean;
	},
	background?: {
		fill: string;
	},
	poster: {
		background: string;
		text: string;
	}
}

export interface ThemeStellarMap {
  url: string,
  title: string,
	configuration?: ConfigStellarMap
}
