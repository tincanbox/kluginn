import Submodule from '../interface/Submodule';
export default class __Config extends Submodule {
    $form: any;
    selector: {
        [key: string]: string;
    };
    constructor(c: any, opt?: {});
    init(): void;
    apply_app_config(): void;
    save(p: any): any;
    fetch_config(): {
        [key: string]: any;
    };
    update_form(): void;
    retrieve_form_data(): {};
}
