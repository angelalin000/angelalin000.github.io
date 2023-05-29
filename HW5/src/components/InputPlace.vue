<template>
  <form>
    <label>Date:</label>
    <input type="text" id="date" name="date" placeholder="ex : 111/11">
    <label>Produce:</label>
    <input type="text" id="produce" name="produce" placeholder="ex : 水費">
    <label>Price:</label>
    <input type="text" id="price" name="price" placeholder="ex : 95.5">
    <button>Enter</button>
  </form>

</template>

<script>
export default {
}
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 40px 0 50px 0;
}
label {
  padding: 0 0 0 30px;
  color: #355fa7;
}
input {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #355fa7;
  border-width: 1px;
  border-radius: 3px;
}
button {
  font-size: medium;
  background: #355fa7;
  color: white;
  border-style: solid;
  border-color: #6c98e3;
  border-width: 1px;
  border-radius: 3px;
  gap: 100px;
  width: 70px;
}
</style>