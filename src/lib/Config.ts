import Submodule from '../interface/Submodule';
declare var $: any;
declare var _: any;

export default class __Config extends Submodule {

  $form: any;
  selector: {[key:string]: string};

  constructor(c, opt = {}){
    super(c, opt);
    this.selector = {
      "form_input_class": "plugin-data"
    }
    this.$form = this.$('.js-submit-settings');
    this.init();
  }

  /* Object
   */
  init(){
    this.update_form();
  }


  /* name[%form_input_class%] を持つ全要素に対して、
   * val() で値の更新をかける。主に fetch_config とのセット用。
   *
   * ( void
   * ) -> Nothing
   */
  apply_app_config(){
    var self = this;
    for(var k in self.config){
      self.core.$("." + self.selector.form_input_class + "[name=" + k + "]").val(self.config[k]);
    }
  }

  /*
   *
   * ( p:Object = Object for setConfig(p) param.
   * ) -> Promise
   */
  save(p){
    var self = this;
    return new self.$k.Promise(function(res, rej){
      var d = self.retrieve_form_data();
      console.log("Saving form data", d);
      try{
        self.$k.plugin.app.setConfig((p ? _.extend(d, p) : d), function() {
          self.update_form();
          res(self.config);
        });
      }catch(e){
        rej(e);
      }
    });
  }

  /* getConfig() して self.config の内容を更新するだけ。
   *
   * ( void
   * ) -> Nothing
   */
  fetch_config(){
    var self = this;
    self.config = self.core.$k.plugin.app.getConfig(self.core.plugin_id)
    return self.config;
  }

  /* fetch_config で self.config の内容を更新したうえで、
   * apply_app_config を呼ぶだけのショートカット
   *
   * ( void
   * ) -> Nothing
   */
  update_form(){
    console.log("Updating form");
    this.fetch_config();
    this.apply_app_config();
  }

  /* form_input_class(default: plugin-data) に設定された要素を全取得し、
   * val() で取得した値をObjectにまとめて返す
   *
   * ( void
   * ) -> Object
   */
  retrieve_form_data(){
    var self = this;
    var data = {};
    self.core.$("." + self.selector.form_input_class).each(function(i, el){
      var $el = self.core.$(el);
      var nm = $el.attr("name");
      data[nm] = $el.val();
    });
    return data;
  }

};
