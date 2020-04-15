<template>
  <div class="BookApptFlatCard">
    <div class="container-fluid">
      <div class="row justify-content-center pt-2">
        <div class="col-3 text-cneter">
          <i :class="iconClass" class="m-4 fa-3x"></i>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col">
              <h4>
                <b>{{ heading }}</b>
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="text-sm text-muted">{{ desc }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="text-sm text-success">{{ time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-appt-flat-card",
  props: {
    iconClass: {
      type: String,
      default: "fas fa-video fa-2x"
    },
    heading: {
      type: String,
      default: "Heading"
    },
    desc: {
      type: String,
      default: "lorem desc"
    },
    time: {
      type: String,
      default: "time time time"
    }
  }
};
</script>

<style scoped>
.BookApptFlatCard {
  border-radius: 16px;
  cursor: pointer;
}
.BookApptFlatCard:hover {
  background-color: #ccc;
}
</style>
