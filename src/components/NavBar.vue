<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <div class="navbar-item" href="/">
        Vue multi layouts
      </div>

      <a class="navbar-burger" @click="open = !open">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': open}">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'about'}" @click.native="open = false">
            About
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" to="/" @click.native="open = false">
            Posts
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'photos'}" @click.native="open = false">
            Photos
          </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          Lorem
        </div>
        <div class="navbar-item">
          Ipsum
        </div>
        <div class="navbar-item">
          Dolor
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
