<template>
  <div class="AppointmentTile">
    <div class="container-fluid">
      <!-- <div class="row align-end">
        <div class="col mb-0 pb-0">
          <span class="text-muted" style="font-size: 0.8rem; margin-left:auto; float:right;">
            <b>{{appt.type}}</b> appointment with
          </span>
        </div>
      </div> -->
      <div class="row">
        <div class="text-muted col-2" id="month" style="font-size: 15px; text-align:center;">
          <b>{{ appt.time | readableDate }}</b>
        </div>
         <div class="col mb-0 pb-0">
          <span class="text-muted" style="font-size: 0.8rem; margin-left:auto;">
            <b>{{appt.type}}</b> appointment
          </span>
        </div>
        <!-- <div class="col-3 text-right">
          <span :class="getTimeInsight.cssClass">
            <b>{{ getTimeInsight.text }}</b>
          </span>
        </div> -->
      </div>
      <div class="row">
        <div class="col-2" id="date" style="font-size:30px; text-align:center;">
          <b>{{ appt.time | readableDay }}</b>
        </div>
        <div class="col-10" style="font-size:30px; float:right;">
          <b>{{ appt.doctorName }}</b>
        </div>
        <!-- <div class="col-9">
          <span class="text-muted">{{ appt.paymentMethod }}</span>
        </div> -->
      </div>
      <div class="row">
        <div class="col-2 text-primary" id="year" style="text-align:center;" >
          <b>{{ appt.time |readableDateTime }}</b>
        </div>
         <div class="col-5">
          <span class="text-muted">{{ appt.paymentMethod }}</span>
        </div>
        <div class="col-5 text-right">
          <button
            v-if="getTimeInsight.text === 'Scheduled'"
            class="btn btn-sm btn-outline-danger"
            style="border-radius: 50%; float:right;"
            title="Delete"
          >
            <!-- <i class="fas fa-times"></i> -->
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "appointment-tile",
  props: {
    appt: {
      type: Object,
      required: true
    }
  },
  computed: {
    getTimeInsight() {
      if (this.appt && this.appt.time) {
        // check if date is due or not
        return {
          text: "Scheduled",
          cssClass: "text-success"
        };
      }
    }
  },
  filters: {
    readableDateTime(val) {
      // return moment(val).format("YYYY @ HH:mm");
      return moment(val).format("YYYY");

    },
    readableDate(val) {
      return moment(val).format("MMM");
    },
    readableDay(val) {
      return moment(val).format("DD")
    },
    // readableDateTime)
  }
};
</script>

<style scoped>
.AppointmentTile {
  border-radius: 16px;
  cursor: pointer;
  background-color: white;
  padding: 10px;
}
.AppointmentTile:hover {
  background-color: #ccc;
}
#date{
  font-weight: bolder;
  /* font-size: 10px; */
}
.row{
  /* margin: 0; */
  padding: 0;
}
</style>
