<template>
  <header>
    <div class="container">
      <router-link to="/" tag="h1" class="logo">Kickback</router-link>
      <div class="nav__controls">
        <BaseButtonHollow label="Create event" />
        <TheTopUserSettings />
      </div>
    </div>
  </header>
</template>

<script>
import BaseButtonHollow from "@/components/BaseButtonHollow";
import TheTopUserSettings from "@/components/TheTopUserSettings";

export default {
  name: "Header",
  components: {
    BaseButtonHollow,
    TheTopUserSettings
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.07);
  padding: 1.5rem 0;
  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    cursor: pointer;
  }
  .nav__controls {
    display: flex;
    align-items: flex-end;
    button {
      margin-right: 1.5rem;
    }
  }
}
</style>