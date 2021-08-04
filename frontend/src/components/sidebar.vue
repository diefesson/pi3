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
<<<<<<< HEAD
const ShowType = {
  UNSIGNED: "UNSIGNED",
  SIGNED: "SIGNED",
  ADMIN: "ADMIN",
};

=======
>>>>>>> login
export default {
  name: "Sidebar",
  props: ["show", "session"],
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "home",
<<<<<<< HEAD
          show: ShowType.UNSIGNED,
=======
          signed: false,
>>>>>>> login
        },
        {
          title: "Ranking",
          url: "ranking",
<<<<<<< HEAD
          show: ShowType.UNSIGNED,
=======
          signed: false,
>>>>>>> login
        },
        {
          title: "Employee",
          url: "employee",
<<<<<<< HEAD
          show: ShowType.SIGNED,
=======
          signed: true,
>>>>>>> login
        },
        {
          title: "Add pet",
          url: "pet-add",
<<<<<<< HEAD
          show: ShowType.SIGNED,
=======
          signed: true,
>>>>>>> login
        },
      ],
    };
  },
  computed: {
<<<<<<< HEAD
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
=======
    filteredLinks() {
      return this.links.filter((l) => this.session.signed || !l.signed);
>>>>>>> login
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