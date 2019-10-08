import Submodule from '../interface/Submodule';
export default class __UI extends Submodule {
    action: {
        [s: string]: Function;
    };
    constructor(c: any, opt?: {});
    init_action_handler(): void;
    render(template_id: any, attr: any): any;
}
