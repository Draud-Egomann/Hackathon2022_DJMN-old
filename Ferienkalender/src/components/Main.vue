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
        }
      },
    }
  }
}
</script>
<template>
  <div class="w-1/2 m-auto">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>