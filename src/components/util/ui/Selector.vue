<template>
  <div class="selector">
    <h1 class="selector--label">{{title}}</h1>
    <div class="selector--items">
      <div class="selector--item" v-for="item in items" :key="item.value" :class="{active: item.value == active}" @click="select(item)">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   items: {
     type: Array,
     default: () => [
       {
         value: 'any',
         text: 'any'
       }
     ]
   },
   title: {
     type: String,
     default: ''
   },
 },
 computed: {
   active() {
    return this.$attrs ? this.$attrs.value : this.items[0].value
   }
 },
 mounted() {
   this.select(this.items[0])
 },
 methods: {
   select(item) {
     this.$emit('input', item.value)
   }
 }
}
</script>

<style>

</style>