<template>
  <div>
    <nuxt-Link
      tag="div"
      to="/"
      class="boder-1s text-center mt-40 finishedToDo-conteiner"
    >
      <p>Finished To Do</p>
    </nuxt-Link>
    <div class="text-center mt-10">
      <input type="checkbox" class="inline" />
      <p class="inline">こんにちはサンプル</p>
    </div>
  </div>
</template>

<style scoped>
.boder-1s {
  border: 1px solid;
}
.text-center {
  text-align: center;
}
.mt-40 {
  margin-top: 40px;
}
.mt-10 {
  margin-top: 10px;
}
.inline {
  display: inline;
}
.finishedToDo-conteiner {
  background-color: rgb(56, 114, 221);
  box-shadow: 3px 3px 5px -3px darkgrey;
  margin-right: 20px;
  margin-left: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  transition: 0.3s;
}
.finishedToDo-conteiner:active {
  box-shadow: none;
  transform: translate3d(0, 5px, 0);
}
</style>
