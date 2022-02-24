import * as $ from 'jquery';
import { LayoutProviderService } from '../../services/layout-provider.service';

import './style.scss';

LayoutProviderService.load('home').then(() => {
    console.log('Document Ready');

    const card = $('.card');
    card.css({ "background-color": "blue"});
});
