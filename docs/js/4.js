(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[4],{173:function(n,t){n.exports="<template>\n  <div>\n    <button class=\"dao-btn blue\" @click=\"alertTimeout()\">自动关闭</button>\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    alertTimeout() {\n      this.$daoAlert('提示', '2 秒后自动关闭')\n        .timeout(2000)\n        .show();\n    },\n  },\n};\n<\/script>"}}]);