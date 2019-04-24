<template>
  <b-navbar type="light" variant="white">
    <b-navbar-nav>
      <!-- <b-nav-item to="login">
        Login
      </b-nav-item> -->
      <b-nav-item :to="{ name: 'home' }">
        <IosHomeIcon class="d-inline-block align-top"/>
        Home
      </b-nav-item>
      <b-nav-item :to="{ name: 'bikes' }">
        <IosBicycleIcon class="d-inline-block align-top"/>
        Bikes
      </b-nav-item>
      <b-nav-item :to="{ name: 'users' }">
        <IosPeopleIcon class="d-inline-block align-top"/>
        Users
      </b-nav-item>
      <b-nav-item :to="{ name: 'bikes' }">
        <IosCalendarIcon class="d-inline-block align-top"/>
        Bookings
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item :to="{ name: 'logout' }">
        <IosLogOutIcon class="d-inline-block align-top"/>
        Log out
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import IosHomeIcon from 'vue-ionicons/dist/ios-home.vue'
import IosBicycleIcon from 'vue-ionicons/dist/ios-bicycle.vue'
import IosPeopleIcon from 'vue-ionicons/dist/ios-people.vue'
import IosCalendarIcon from 'vue-ionicons/dist/ios-calendar.vue'
import IosLogOutIcon from 'vue-ionicons/dist/ios-log-out.vue'

export default {
  name: 'TabBar',

  components: {
    IosHomeIcon,
    IosBicycleIcon,
    IosPeopleIcon,
    IosCalendarIcon,
    IosLogOutIcon
  }

}
</script>
