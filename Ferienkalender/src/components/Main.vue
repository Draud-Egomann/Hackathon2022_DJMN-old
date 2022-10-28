<template>
  <div class="bg-[#BFBFBF] py-4">
    <div class="bg-gray-100 w-3/4 mx-auto px-2 py-4 rounded-sm">
      <div class="flex flex-wrap overflow-hidden">
        <!-- check days -->
        <form class="flex flex-wrap w-full overflow-hidden lg:w-1/2 py-4">
          <div class="flex flex-wrap w-full overflow-hiddenpy-4">
            <div class="w-1/2 px-4 ">
              <div class="border-black border-2 rounded-sm">
                <p class="text-center bg-gray-400 rounded-t-sm">Am/Ab</p>
                <input class="p-2 rounded-b-sm w-full" type="date" required>
              </div>
            </div>
            <div v-if="showUntilInput" class="w-1/2 px-4 ">
              <div class="border-black border-2 rounded-sm">
                <p class="text-center bg-gray-400 rounded-t-sm">Bis (optional)</p>
                <input class="p-2 rounded-b-sm w-full" type="date" required>
              </div>
            </div>
            <!-- <button class="btn" type="submit" value="submit">Bestätigen</button> -->
          </div>
          <div class="flex flex-wrap w-full">
            <div class="w-1/2 p-2">
              <input class=" inline-block m-2" type="checkbox" @click="showUntilInput = !showUntilInput" />
              <p class="inline-block">Halber Tag abwesend</p>
            </div>
          </div>
          <div class="flex w-full px-4 ">
            <div class="border-black border-2 rounded-sm w-full">
              <p class=" bg-gray-400 rounded-t-sm text-center">Zusätzlicher Text</p>
              <textarea class="p-2 rounded-b-sm w-full max-h-[10rem]" name="" id="" rows="3"></textarea>
            </div>
          </div>
        </form>
        <div class="w-full overflow-hidden lg:w-1/2">
          <p>test</p>
        </div>

        <!-- statik box -->
        <div>

        </div>
      </div>
    </div>
    <div class="w-1/2 m-auto">
      <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </div>
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
    let showUntilInput: boolean = true;

    return {
      showUntilInput,
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
        dateClick: this.changeToDay, // On Date Click, calls function declared in methods
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
