import API from './lib/API';
import UI from './lib/UI';
export default class Kluginn {
    $: object;
    $k: {
        [key: string]: any;
    };
    plugin_id: number;
    config: object;
    api: API;
    ui: UI;
    vendor: object;
    constructor();
    dialog(): any;
}
