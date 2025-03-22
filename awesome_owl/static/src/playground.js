/** @odoo-module **/

import {Component, markup, useState} from '@odoo/owl';
import {Counter} from './counter/counter';
import {Card} from './card/card';

export class Playground extends Component {
    static template = 'awesome_owl.playground';
    static components = {Counter, Card}

    cardContent = '<div class="text-primary">some content</div>'
    escapedCardContent = markup(this.cardContent)

    setup = () => this.state = useState({sum: 2});

    incrementSum = () => this.state.sum++;
}
