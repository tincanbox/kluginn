import Submodule from '../interface/Submodule';
export default class _csv extends Submodule {
    constructor(c: any, opt?: {});
    init(): void;
    parse(content: any, clb?: any): Promise<unknown>;
}
