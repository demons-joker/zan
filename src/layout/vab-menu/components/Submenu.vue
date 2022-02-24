<template>
  <a-sub-menu :key="item.fullPath">
    <template v-slot:title>
      <span class="anticon">
        <IconFont :type="item.meta.icon" />
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script>
  export default {
    name: 'Submenu',
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
    },
  }
</script>
