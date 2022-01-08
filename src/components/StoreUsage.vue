<template>
  <div class="counter">
    <h1 class="counter">{{ $store.state.counter }}</h1>
    <div class="buttons">
      <button @click="$store.dispatch('commitInc')">+</button>
      <button @click="$store.dispatch('commitDec')">-</button>
    </div>

    <div>
      {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.getSquare }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreUsage",
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
.counter {
  font-size: 80px;
}
</style>