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
const ShowType = {
  UNSIGNED: "UNSIGNED",
  SIGNED: "SIGNED",
  ADMIN: "ADMIN",
};

export default {
  name: "Sidebar",
  props: ["show", "session"],
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "home",
          show: ShowType.UNSIGNED,
        },
        {
          title: "Ranking",
          url: "ranking",
          show: ShowType.UNSIGNED,
        },
        {
          title: "Employee",
          url: "employee",
          show: ShowType.SIGNED,
        },
        {
          title: "Add pet",
          url: "pet-add",
          show: ShowType.SIGNED,
        },
      ],
    };
  },
  computed: {
    allowedTypes() {
      var types = [ShowType.UNSIGNED];
      if (this.session != null) {
        types += ShowType.SIGNED;
        if (this.session.isAdmin) {
          types += ShowType.ADMIN;
        }
      }
      return types;
    },
    filteredLinks() {
      return this.links.filter((l) => this.allowedTypes.includes(l.show));
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