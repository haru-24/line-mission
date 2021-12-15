<template>
  <div>
    <nuxt-Link
      tag="div"
      to="/"
      class="boder-1s text-center mt-40 finishedToDo-conteiner"
    >
      <p>Finished To Do</p>
    </nuxt-Link>
  </div>
</template>

<style scoped>
.mt-40 {
  margin-top: 40px;
}
.boder-1s {
  border: 1px solid;
}
.text-center {
  text-align: center;
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
