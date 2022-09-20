// Button.stories.ts

import { Story, Meta } from '@storybook/angular/types-6-0';
import { BasketComponent } from './basket.component';
import { moduleMetadata } from '@storybook/angular';
import { ComponentsModule } from '../components.module';
import { MatSelectModule } from '@angular/material/select';

export default {
    title: 'Basket',
    component: BasketComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [ComponentsModule,
                MatSelectModule
            ],
        })
    ]
} as Meta;

export const Basket: Story = () => ({
    props: {
        products: [
            {
                url: "https://generator.mapiful.com/streetmaps/?width=5906&height=8268&sku=mapiful-poster-50x70&headline=Paris&divider=France&tagline=48.8318%C2%B0N+%2F+2.4339%C2%B0E&theme=playroom&style=asphalt&hue=0&saturation=100&zoom=13&SWLng=2.3831748962402&SWLat=48.785038892908&NELng=2.4846267700195&NELat=48.878489786571",
                size: "50×70cm - Portrait (Streetmap)",
                amount: 1,
                price: 5,
            },
            {
                url: "https://generator.mapiful.com/streetmaps/?width=5906&height=8268&sku=mapiful-poster-50x70&headline=Paris&divider=France&tagline=48.8318%C2%B0N+%2F+2.4339%C2%B0E&theme=playroom&style=asphalt&hue=0&saturation=100&zoom=13&SWLng=2.3831748962402&SWLat=48.785038892908&NELng=2.4846267700195&NELat=48.878489786571",
                size: "50×70cm - Portrait (Streetlamp)",
                amount: 1,
                price: 10,
            }
        ]
    }
});

