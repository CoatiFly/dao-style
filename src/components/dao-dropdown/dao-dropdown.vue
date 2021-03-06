<template>
  <div
    :class="[prefixCls, {'dao-dropdown-is-open': visible}]"
    v-clickoutside:dao-select-dropdown="handleClose"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <div
      :class="[prefixCls + '-rel']"
      ref="reference"
      @click="handleClick">
      <slot></slot>
    </div>
    <div
      :class="[prefixCls + '-popper', 'dao-select-dropdown']"
      v-show="visible"
      ref="popper">
      <div
        :class="[prefixCls + '-inner']">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import clickoutside from '../../directives/clickoutside';
  import { _includes } from '../../utils/assist';
  import Popper from '../base/popper';

  const prefixCls = 'dao-dropdown';

  export default {
    name: 'Dropdown',
    directives: { clickoutside },
    mixins: [Popper],
    props: {
      trigger: {
        validator(value) {
          return _includes(['click', 'hover', 'custom'], value);
        },
        default: 'hover',
      },
      show: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        prefixCls,
        unwatch: null,
      };
    },
    methods: {
      handleClick() {
        if (this.trigger !== 'click') return;
        this.visible = !this.visible;
      },
      handleMouseenter() {
        if (this.trigger !== 'hover') return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, 250);
      },
      handleMouseleave() {
        if (this.trigger !== 'hover') return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, 150);
      },
      handleClose() {
        if (this.trigger !== 'click') return;
        this.visible = false;
      },
      hasParent() {
        const $parent = this.$parent.$parent;
        if ($parent && $parent.$options.name === 'Dropdown') {
          return $parent;
        }
        return false;
      },
    },
    mounted() {
      // this.$on('on-click', (key) => {
      //   const $parent = this.hasParent();
      //   if ($parent) $parent.$emit('on-click', key);
      // });
      if (this.hasParent()) {
        this.forceNotAppendToBody = true;
      }
      this.$on('on-hover-click', () => {
        const $parent = this.hasParent();
        if ($parent) {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return;
            this.visible = false;
          });
          $parent.$emit('on-hover-click');
        } else {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return;
            this.visible = false;
          });
        }
      });
      this.$on('on-haschild-click', () => {
        this.$nextTick(() => {
          if (this.trigger === 'custom') return;
          this.visible = true;
        });
        const $parent = this.hasParent();
        if ($parent) $parent.$emit('on-haschild-click');
      });
      // 选择popper元素下的ul的子代dao-dropdown-item-base的元素，添加click监听,点击的时候关闭popper
      if (this.appendToBody) {
        Array.from(
          this.$refs.popper.querySelectorAll('ul.dao-dropdown-menu > li.dao-dropdown-item-base'),
        ).forEach((li) => {
          li.addEventListener('click', this.handleClose);
        });
      }
      if (this.trigger === 'custom') {
        this.unwatch = this.$watch('show', () => {
          setTimeout(() => {
            this.visible = !!this.show;
          }, 0);
        }, {
          immediate: true,
        });
      }
    },
    beforeDestroy() {
      if (this.appendToBody) {
        Array.from(
          this.$refs.popper.querySelectorAll('ul.dao-dropdown-menu > li.dao-dropdown-item-base'),
        ).forEach((li) => {
          li.removeEventListener('click', this.handleClose);
        });
      }
      if (this.unwatch) {
        this.unwatch();
      }
    },
  };
</script>

<style lang="scss" src="./dao-dropdown.scss"></style>
