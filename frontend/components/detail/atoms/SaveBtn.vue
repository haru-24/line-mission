<template>
  <div>
    <div class="boder-1s text-center w-full seved-conteiner">
      <p>Save</p>
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
.w-full {
  width: 100%;
}
.seved-conteiner {
  background-color: rgb(157, 185, 238);
  box-shadow: 3px 3px 5px -3px darkgrey;
  width: 100%;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  transition: 0.3s;
}
.seved-conteiner:active {
  box-shadow: none;
  transform: translate3d(0, 5px, 0);
}
</style>
