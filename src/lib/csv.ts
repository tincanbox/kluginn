import Submodule from '../interface/Submodule';

declare var $: any;
declare var _: any;
declare var Papa: any;

export default class _csv extends Submodule {

  constructor(c, opt = {}){
    super(c, opt);
  }

  /* Object
   */
  init(){
  }

  parse(content, clb = null){
    return new Promise(function(rs, rj){
      var p = Papa.parse(content, {
        header: false,
        step: clb,
        error: (err) => {
          rj(err);
        },
        complete: (result) => {
          rs(result);
        }
      });
    });
  }

};
