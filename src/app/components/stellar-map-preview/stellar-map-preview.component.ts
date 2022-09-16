import { Component, Input, OnInit } from '@angular/core';
declare var Celestial: any;
interface StellarMapColor {
  globe: string;
  background: string;
  text: string;
}
@Component({
  selector: 'app-stellar-map-preview',
  templateUrl: './stellar-map-preview.component.html',
  styleUrls: ['./stellar-map-preview.component.scss']
})
export class StellarMapPreviewComponent implements OnInit {
  @Input() city = '';
  @Input() country = '';
  @Input() date = '';
  @Input() coordinates = '';
  @Input() style: StellarMapColor | undefined;

  styleColors = {};
  constructor() { }

  ngOnInit(): void {
    this.mapInit();
    this.styleColors = {
      background: this.style?.background,
      color: this.style?.text,
    }
  }

  mapInit () {
    const DATE = new Date("2021-09-25T04:00:00+0000");
    const [LAT, LON] = [36.525321, -121.815916];
    const FONT = "Raleway";

    const config = {
      container: "map",
      width: 0,
      datapath: "../../../assets/data/", // Path/URL to data files, empty = subfolder 'data'

      form: false,
      advanced: false,
      interactive: false,
      disableAnimations: true,

      zoomlevel: null,
      zoomextend: 1,

      projection: "airy",
      transform: "equatorial",

      follow: "zenith",
      geopos: [LAT, LON],

      lines: {
        graticule: { show: false },
        equatorial: { show: false },
        ecliptic: { show: false },
        galactic: { show: false },
        supergalactic: { show: false }
      },

      planets: {
        show: false,
        which: ["mer", "ven", "ter", "lun", "mar", "jup", "sat"],

        symbolType: "disk",
        names: true,
        nameStyle: {
          fill: "#00ccff",
          font: `14px ${FONT}`,
          align: "center",
          baseline: "top"
        },
        namesType: "en"
      },

      dsos: {
        show: false,
        names: false
      },

      constellations: {
        names: false,
        namesType: "iau",
        nameStyle: {
          fill: "#ffffff",
          align: "center",
          baseline: "middle",
          font: [`14px ${FONT}`, `8px ${FONT}`, `0px ${FONT}`]
        },
        lines: true,
        lineStyle: { stroke: "#cccccc", width: 1.5, opacity: 1 }
      },

      mw: {
        show: false,
        style: { fill: "#ffffff", opacity: 0.02 }
      },

      background: {
        fill: this.style?.globe || "#D2001A", // globe color
        stroke: "#EFEFEF",
        opacity: 1,
        width: 2
      },

      stars: {
        colors: true,
        size: 12,
        limit: 6,
        exponent: -0.26,
        designation: false,

        propername: false,
        propernameType: "name",
        propernameStyle: {
          fill: "#ddddbb",
          font: `8px ${FONT}`,
          align: "right",
          baseline: "center"
        },
        propernameLimit: 2.0
      }
    };
    Celestial.display(config);
    Celestial.skyview({ date: DATE });
  }
}
