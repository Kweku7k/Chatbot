<template>
  <div class="MyHealthSectionFlatCard">
    <div class="container-fluid px-3 py-1">
      <div class="row">
        <div class="col-10">
          <img :src="imgUrl" alt="heading" class="img-style" />
        </div>
        <div class="col-2 text-center pl-4">
          <div class="count-box">{{ count }}</div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <h5>
            <b>{{ heading }}</b>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-health-section-flat-card",
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    heading: {
      type: String,
      default: "Heading"
    },
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.MyHealthSectionFlatCard {
  border-radius: 16px;
  background-color: #fff;
  cursor: pointer;
}
.MyHealthSectionFlatCard:hover {
  background-color: #ccc;
}
.img-style {
  width: 4rem;
}
.count-box {
  background-color: #eee;
  padding: 0.2rem;
  border-radius: 50%;
  width: 2rem;
  margin-left: auto;
}
</style>
