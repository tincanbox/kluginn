import Submodule from '../interface/Submodule'
declare var $: any;
declare var _: any;

export default class __UI extends Submodule {

  action: {[s:string]: Function};

  constructor(c, opt = {}){
    super(c, opt)
  }

  /*
   */
  bind_action(ins){
    var self = this;
    var atr = "data-action";
    var sel = "*[" + atr + "]";
    self.core.$(sel).each(function(i, el){
      var $el = self.core.$(el);
      var evc = $el.attr(atr).split(":");
      // click:do_something
      var evn = evc[0];
      var evh = "action_" + evc[1];
      if(evh in ins){
        self.core.$(document).on(evn, sel, self.core.$.proxy(ins[evh], self.core.$));
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
