export interface ConfigStreetMap {
	background?: {
		fill: string;
	},
	poster: {
		background: string;
		text: string;
	}
}
export interface ThemeStreetMap {
  url: string,
  title: string
  configuration?: ConfigStreetMap
}
