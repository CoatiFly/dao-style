(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[24],{193:function(n,o){n.exports='<template>\n  <div class="dao-dialog demo5">\n    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>\n    <dao-dialog\n      :visible.sync="config.visible"\n      :header="config.header"\n      :size="config.size">\n      <dialog-demo-form></dialog-demo-form>\n    </dao-dialog>\n  </div>\n</template>\n\n<script>\nimport DialogDemoForm from \'./dialog-demo-form\';\n\nexport default {\n  name: \'Demo5\',\n  components: { DialogDemoForm },\n  data() {\n    return {\n      config: {\n        visible: false,\n        header: {\n          title: \'自定义大小\',\n        },\n        size: {\n          width: \'888px\',\n          height: \'333px\',\n        },\n      },\n    };\n  },\n};\n<\/script>\n'}}]);