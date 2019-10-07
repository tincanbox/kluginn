import Config from './lib/Config';
import API from './lib/API';
import UI from './lib/UI';

export default class Kluginn {

  $:object;
  $k:object;
  plugin_id:number;
  config:object;
  api:API;
  ui:UI

  constructor(){
    var self = this;
    self.$ = $;
    self.$k = kintone;
    self.plugin_id = self.$k.$PLUGIN_ID;
    self.config = new Config(self);
    self.api = new API(self);
    self.ui = new UI(self);
  }

  dialog(){
    return Swal.queue.apply(Swal, [arguments]);
  }

}
