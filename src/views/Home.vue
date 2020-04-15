<template>
  <div class="Home">
    <div class="container px-5 my-5">
      <!-- greeting -->
      <div class="row pt-5">
        <div class="col">
          <p class="greeting">
            Hi
            <b>{{ userName }}</b>,
            <br />how can we help you?
          </p>
        </div>
      </div>

      <!-- bookings -->
      <div class="row mt-4">
        <div class="col-12">
          <h4>Book In-Clinic Visits</h4>
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-couch"
            heading="Urgent Care"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-couch"
            heading="Primary Care"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-couch"
            heading="Checkup"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h4>Get Virtual Care</h4>
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-video"
            heading="Virtual Urgent Care"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-video"
            heading="Virtual Primary Care"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
        <div class="col-12 mt-3">
          <BookApptFlatCard
            iconClass="fas fa-video"
            heading="Virtual Mental Care"
            desc="Ideal for immediate medical attention"
            time="Today at 5:00"
            @click="bookAppt"
          />
        </div>
      </div>

      <!-- my health -->
      <div class="row mt-5">
        <div class="col-12">
          <h4>My Health</h4>
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/calendar.png"
            heading="Appointments"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/heart-with-pulse.png"
            heading="Vitals"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/supplement-bottle.png"
            heading="Prescriptions"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/thin-test-tube.png"
            heading="Lab Results"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/documents.png"
            heading="Documents"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/color/48/000000/medical-heart .png"
            heading="Medical Images"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://kweku7k.github.io/patients/noun_Smart Watch_2441119.svg"
            heading="Connected Devices"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
        <div class="col-12 mt-3">
          <MyHealthSectionFlatCard
            imgUrl="https://img.icons8.com/cotton/48/000000/medical-history.png"
            heading="Medical History"
            :count="0"
            @click.native="goToAppointments"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookApptFlatCard from "@/components/BookApptFlatCard";
import MyHealthSectionFlatCard from "@/components/MyHealthSectionFlatCard";

export default {
  name: "home",
  components: {
    BookApptFlatCard,
    MyHealthSectionFlatCard
  },
  data() {
    return {
      userName: "Ehi"
    };
  },
  methods: {
    bookAppt() {},
    goToAppointments() {
      this.$router.push({ name: "appointments-route" });
    }
  }
};
</script>

<style scoped>
.greeting {
  font-size: 1.6rem;
}
</style>
