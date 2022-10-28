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
import deLocale from '@fullcalendar/core/locales/de';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        // view on start of page
        initialView: 'dayGridMonth',
        // entries in calendar
        events: [
          {
            id: '1',
            title: 'Testevent',
            start: '2022-10-28'
          }],
        // Tools for switching day, week or month
        headerToolbar: {
          center: 'dayGridMonth,dayGridWeek,dayGridDay' // buttons for switching between views
        },
        // The custom views with settings
        views: {
          dayGridMonth: {
            type: 'dayGridMonth',
          },
          dayGridWeek: {
            type: 'dayGridWeek',
          },
          dayGridDay: {
            type: 'dayGridDay',
          }
        },
        navLinks: true,
        selectable: true,
        locales: [ deLocale ],
        locale: 'de',
        dateClick: this.changeToDay // On Date Click, calls function declared in methods
      },
    }
  },
  methods: {
    // Changes to Clicked Date
    changeToDay: function (info: any) {
      // to see if it worked
      console.log("Clicked", info);
      // gets element and changes view
      let calendarApi = this.$refs.fullCalendar.getApi()
      calendarApi.changeView('dayGridDay', info.date)
    }
  }
}
</script>

<style scoped>

</style>
