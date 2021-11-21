<template>
  <div>
    <div class="boder-1s text-center w-full title-conteiner">
      <p class="inline content-center">ToDoTitle</p>
      <nuxt-Link tag="div" to="/" class="delete-btn">✖️</nuxt-Link>
    </div>

    <div class="boder-1s w-full">
      <div class="descripion-conteiner">
        <div>
          <p>Description:</p>
          <textarea id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
    <div>
      <div class="boder-1s text-center w-full seved-conteiner">
        <p>Save</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inline {
  display: inline;
}

.title-conteiner {
  padding-top: 7px;
  padding-bottom: 7px;
}
.boder-1s {
  border: 1px solid;
}
.text-center {
  text-align: center;
}

.-mt-20 {
  margin-top: -20px;
}
.inline {
  display: inline;
}
.w-full {
  width: 100%;
}
.descripion-conteiner {
  display: block;
  margin: auto;
  display: flex;
  justify-content: center;
}
textarea {
  margin-bottom: 20px;
  margin-top: -20px;
  width: 300px;
  height: 150px;
  resize: none;
}

.delete-btn {
  height: 30px;
  width: 30px;
  background: #b1b8b9;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  top: 14px;
  display: inline-block;
  font-size: 22px;
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

.content-center {
  margin-left: 25px;
}
</style>
3
