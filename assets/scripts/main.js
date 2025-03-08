import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

import './media-slider';
import './text-scroller';
import './logo-slider';
import './slider';

window.Alpine = Alpine;
Alpine.plugin(intersect);
Alpine.start();