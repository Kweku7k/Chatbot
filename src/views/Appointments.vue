<template>
  <div class="Appointments">
    <div class="container mt-5">
      <!-- header -->
      <div class="row pt-5 pb-5">
        <!-- <div class="col-1">
          <span
            style="font-size: 1rem; font-weight: 700; cursor: pointer"
            @click="goBack"
            title="Back"
          >&lt;</span>
        </div> -->
        <div class="col-6">
          <h3>
            <b>My Appointments</b>
          </h3>
        </div>
        <div class="col-4 text-right">
          <button
            class="btn btn-outline-danger mr-md-2 mb-2 mb-md-0"
            style="border-radius: 2rem"
            @click="clearAllExpiredAppts"
          >Clear All</button>
          <button
            class="btn btn-primary dropdown-toggle"
            style="border-radius: 2rem;"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{ apptFilter }}</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span class="dropdown-item" @click="apptFilter = 'Upcoming'">Upcoming</span>
            <span class="dropdown-item" @click="apptFilter = 'Expired'">Expired</span>
            <span class="dropdown-item" @click="apptFilter = 'All'">All</span>
          </div>
        </div>
      </div>

      <!-- body -->
      <div class="row">
        <div v-for="(appt, i) in appts" :key="i" class="col-12 col-md-6 mb-3">
          <AppointmentTile :appt="appt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentTile from "@/components/AppointmentTile";

export default {
  name: "appointments",
  components: {
    AppointmentTile
  },
  data() {
    return {
      apptFilter: "Upcoming",
      appts: [
        {
          id: 0,
          doctorName: "Jason Derulo",
          time: "2020-04-06 09:45",
          paymentMethod: "Mobile Money",
          type: "In-clinic"
        },
        {
          id: 0,
          doctorName: "Jason Derulo",
          time: "2020-04-05 08:00",
          paymentMethod: "Mobile Money",
          type: "Virtual"
        },
        {
          id: 0,
          doctorName: "Jason Derulo",
          time: "2020-04-05 08:00",
          paymentMethod: "Visa (**3701)",
          type: "Home"
        }
      ]
    };
  },
  watch: {
    apptFilter(val) {}
  },
  methods: {
    clearAllExpiredAppts() {},
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>
