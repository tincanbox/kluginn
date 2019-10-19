import Submodule from '../interface/Submodule';
export default class _file extends Submodule {
    constructor(c: any, opt?: {});
    init(): void;
    select(): Promise<unknown>;
    read(input: any, tp?: string): Promise<unknown>;
}
