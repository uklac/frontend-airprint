export interface ConfigStreetMap {
	styleUrl?: string;
	poster: {
		background: string;
		text: string;
	}
}
export interface ThemeStreetMap {
  url: string,
  title: string,
  configuration?: ConfigStreetMap
}
