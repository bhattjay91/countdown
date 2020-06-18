<template>
<div class="">
  <div class="timeDisplay" >
    <h3>Countdown to: {{date | getFormatTime}}    </h3>
    <div style="padding-left:10px;">
      <CountDownSettings />
    </div>
  </div>
  <ul>
    <li v-if="day != 0"><span id="days">{{day}}</span>days</li>
    <li v-if="hours != 0"><span id="hours">{{hours}}</span>Hours</li>
    <li v-if="min != 0"><span id="minutes">{{min}}</span>Minutes</li>
    <li><span id="seconds">{{sec}}</span>Seconds</li>
  </ul>
</div>
</template>
<script>
import CountDownSettings from '@/components/CountDownSettings.vue'
export default {
  name: 'CountDown',
  components: {
    CountDownSettings
  },
  data(){
    return {
      day:null,
      hours: null,
      min: null,
      sec: null,
      countDownInterval: null,
      date: null,
    }
  },
  filters:{
    getFormatTime: function(value){
      let d = new Date(value);
      let ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d)
      let mo = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(d)
      let da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d)
      return mo+'/'+da+'/'+ye;
    }
  },
  computed: {
    getDate () {
      return this.$store.getters.getDate
    }
  },
  created(){
    this.date = this.getDate
    this.getCountDown();
  },
  destory(){
      clearInterval(this.countDownInterval);
  },
  methods:{
    getCountDown: function(){

      var countDownDate = new Date(this.date).getTime();

      let self = this
      this.countDownInterval = setInterval(function() {

        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        self.day = days
        self.hours = hours
        self.min = minutes
        self.sec = seconds

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(this.countDownInterval);
        }
      }, 1000);

    }
  },
  watch:{
    getDate: function(newVal, oldVal){
      this.date = newVal
      clearInterval(this.countDownInterval);
      this.getCountDown()
    }
  }
}
</script>
<style scoped>
li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
  margin: .5em;
  color: white;
  background: rgba(0, 0, 0, 0.3); /* white background with 30% opacity */
}
li span {
  display: block;
  font-size: 4.5rem;
}
.timeDisplay{
  padding: 1em;
  color: white;
  background: rgba(0, 0, 0, 0.3); /* white background with 30% opacity */
  display: inline-flex;
}
</style>
