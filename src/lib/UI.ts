import Submodule from '../interface/Submodule'
declare var $: any;
declare var _: any;

export default class __UI extends Submodule {

  action: {[s:string]: Function};

  constructor(c, opt = {}){
    super(c, opt)
    this.init_action_handler();
  }

  /*
   */
  init_action_handler(){
    var self = this;
    var cls = ".action-handler";
    self.core.$(cls).each(function(i, el){
      var $el = self.core.$(el);
      var evc = $el.attr("data-action").split(":");
      var evn = evc[0];
      var evh = evc[1];
      if(evh in self.action){
        self.core.$(document).on(evn, cls, self.core.$.proxy(self.action[evh], self.core.$));
      }
    });
  }

  /*
   */
  render(template_id, attr){
    var t_el = document.getElementById('template:' + template_id);
    if(t_el){
      var comp = _.template(this.$(t_el).html());
      return attr ? comp(attr) : comp;
    }else{
      return "TEMPLATE ERROR";
    }
  }

}
