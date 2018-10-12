(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[23],{192:function(n,o){n.exports='<template>\n  <div class="dao-dialog demo4">\n    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>\n    <dao-dialog\n      :visible.sync="config.visible"\n      :header="config.header"\n      :containerClass="config.containerClass">\n      <dialog-demo-form></dialog-demo-form>\n    </dao-dialog>\n  </div>\n</template>\n\n<script>\nimport DialogDemoForm from \'./dialog-demo-form\';\n\nexport default {\n  name: \'Demo4\',\n  components: { DialogDemoForm },\n  data() {\n    return {\n      config: {\n        visible: false,\n        header: {\n          title: \'自定义 container class\',\n        },\n        containerClass: \'custom-class\',\n      },\n    };\n  },\n};\n<\/script>\n'}}]);