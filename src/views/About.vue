<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>



<script>
import BookApptFlatCard from "@/components/BookApptFlatCard";
export default {
    name: "about",
    components: {
      BookApptFlatCard,
      MyHealthSectionFlatCard
    },
}