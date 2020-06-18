<template>
  <tippy
    interactive
    :animate-fill="false"
    theme="light"
    animation="fade"
    trigger="click"
    placement="right"
    class="shadow-none"
    arrow>

    <template v-slot:trigger>
      <i class="countdownIcon fas fa-cogs"></i>
    </template>
    <div class="settingsBody">
        <!-- <label>Choose a date for Countdown timer</label> -->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <i class="fas fa-calendar-day"></i>
          </span>
        </div>
        <datepicker v-model="date" :bootstrap-styling=true  placeholder="Select Date" name="datepicker"></datepicker>
      </div>
      <!-- <button class="btn btn-primary">Pause</button> -->
    </div>
  </tippy>
</template>
<script>
import Datepicker from 'vuejs-datepicker';

export default {
  // ...
  components: {
    Datepicker
  },
  data(){
    return {
      date: this.$store.getters.getDate
    }
  },
  created(){

  },
  watch:{
    date: function(newVal, oldVal){
      this.$cookies.set("countDownTime", newVal)
      this.$store.dispatch("setDate", newVal)
    }
  }
}

</script>
<style scoped>
.countdownIcon{
  font-size:32px;
  cursor: pointer;

}
.settingsBody{
  padding: 10px;
}
.vdp-datepicker .input-group .form-control[readonly] {
background: none !important;
}
</style>
