<template>
  <div>
    <div class="bg-gray-300 w-3/4 mx-auto my-4 rounded-md">
      <div class="flex flex-wrap overflow-hidden">
        <!-- check days -->
        <form class="flex flex-wrap w-full overflow-hidden lg:w-1/2 py-4">
          <div class="flex flex-wrap w-full overflow-hiddenpy-4">
            <div class="w-1/2 px-4 ">
              <div class="border-black border-2 rounded-md">
                <p class="text-center bg-gray-400 rounded-t-md">Am/Ab</p>
                <input class="p-2 rounded-b-md w-full" type="date" required>
              </div>
            </div>
            <div v-if="showUntilInput" class="w-1/2 px-4 ">
              <div class="border-black border-2 rounded-md">
                <p class="text-center bg-gray-400 rounded-t-md">Bis (optional)</p>
                <input class="p-2 rounded-b-md w-full" type="date" required>
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
            <div class="border-black border-2 rounded-md w-full">
              <p class=" bg-gray-400 rounded-t-md text-center">Zusätzlicher Text</p>
              <textarea class="p-2 rounded-b-md w-full max-h-[10rem]" name="" id="" rows="3"></textarea>
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
