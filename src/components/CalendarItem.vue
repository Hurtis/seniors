<template>
  <div>
    <div class="calendar" v-for="(item, index) in article" :key="index">
      <span class="hour">{{ item.hour }}</span>
      <span class="text"> {{ item.desc }}</span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  name: "CalendarItem",
  props: ["article"],
};
</script>

<style scoped>
.calendar {
  padding: 1rem;
  color: hsl(0, 0%, 21%);
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
.hour {
  padding-right: 1rem;
  font-weight: bold;
}
</style>