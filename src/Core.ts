import Config from './lib/Config';
import API from './lib/API';
import UI from './lib/UI';

declare var kintone: any;
declare var Swal: any;
declare var FM: any;

export default class Kluginn {

  $: object;
  $k: {[key:string]: any};
  plugin_id:number;
  config:object;
  api:API;
  ui:UI;
  vendor:object;

  constructor(){
    var self = this;
    if(!kintone){
      throw new Error("Kluginn only works with kintone !!");
    }
    self.$k = kintone;
    self.$ = $;
    self.plugin_id = self.$k.$PLUGIN_ID;
    self.config = new Config(self);
    self.api = new API(self);
    self.ui = new UI(self);
    self.vendor = {};
    self.vendor["FM"] = FM;
  }

  dialog(){
    return Swal.queue.apply(Swal, [arguments]);
  }

}
