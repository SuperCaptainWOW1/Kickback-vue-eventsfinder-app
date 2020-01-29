<template>
  <div class="user-settings" :class="{ active: dropdownActive }">
    <img class="avatar" :src="userAvatar" alt />

    <div class="cta" @click="showDropdown">
      <span class="name callout">{{ userName }}</span>
      <i class="fas fa-angle-down"></i>
    </div>

    <ul v-show="dropdownActive" class="dropdown">
      <li>Edit profile</li>
      <li>Quit</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dropdownActive: false
    };
  },
  computed: {
    userAvatar() {
      return this.$store.getters.info.avatar;
    },
    userName() {
      return this.$store.getters.info.name;
    }
  },
  methods: {
    showDropdown() {
      this.dropdownActive = !this.dropdownActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.user-settings {
  padding: 0.4rem 1rem;
  border: 2px solid #ebebed;
  border-radius: $button-border__radius;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 17.5rem;
  position: relative;
  &.active {
    border-color: $c-font_accent;
    .cta > .name,
    .cta > i {
      color: $c-font_accent;
    }
  }
  .avatar {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    cursor: pointer;
  }
  .cta {
    cursor: pointer;
    .name {
      margin-right: 1.2rem;
    }
    i {
      color: #a8adb4;
    }
  }
  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    // Shift left 2px because of the border on parent
    left: -2px;
    width: inherit;
    padding: 0.4rem 1rem;
    background-color: #fff;
    border: 2px solid #ebebed;
    // border-top: none;
    border-radius: $button-border__radius;
    line-height: 3rem;
    li {
      cursor: pointer;
      &:hover {
        color: #808080;
      }
    }
  }
}
</style>
