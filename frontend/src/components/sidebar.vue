<template>
  <div class="sidebar" v-bind:class="{ hidden: !show }">
    <div class="sidebar-top">
      <span>HOME</span>
      <span v-on:click="closeClickHandler" class="sidebar-close"></span>
    </div>
    <div class="sidebar-content">
      <router-link
        v-for="l in filteredLinks"
        v-bind:key="l.title"
        v-bind:to="l.url"
      >
        <span>{{ l.title }} </span>
      </router-link>
      <span>Descubra</span>
      <span>Compartilhe</span>
    </div>
    <div class="sidebar-bottom">
      <span>The DiViLipes Developers - 2021</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["show", "session"],
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "home",
          signed: false,
        },
        {
          title: "Ranking",
          url: "ranking",
          signed: false,
        },
        {
          title: "Employee",
          url: "employee",
          signed: true,
        },
        {
          title: "Add pet",
          url: "pet-add",
          signed: true,
        },
      ],
    };
  },
  computed: {
    filteredLinks() {
      return this.links.filter((l) => this.session.signed || !l.signed);
    },
  },
  methods: {
    closeClickHandler() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style src="../styles/sidebar.scss" lang="scss" scoped></style>