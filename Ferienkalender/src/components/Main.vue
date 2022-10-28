<template>
  <div class="w-1/2 m-auto">
    <FullCalendar ref="fullCalendar" :options="calendarOptions" />
  </div>
</template>

<script lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        events: [
          {
            id: '1',
            title: 'Testevent',
            start: '2022-10-28'
          }],
        headerToolbar: {
          center: 'dayGridMonth,dayGridDay' // buttons for switching between views
        },
        views: {
          dayGridMonth: {
            type: 'dayGridMonth',
          },
          dayGridDay: {
            type: 'dayGridDay',
          }
        },
        navLinks: true,
        selectable: true,
        dateClick: this.changeToDay
      },
    }
  },
  methods: {
    changeToDay: function (info: any) {
      console.log("Clicked", info);
      let calendarApi = this.$refs.fullCalendar.getApi()
      calendarApi.changeView('dayGridDay', info.date)
    }
  }
}
</script>

<style scoped>

</style>
