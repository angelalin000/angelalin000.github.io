<template>
  <div>
    <button>Show</button>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Produce</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 0 0;

}
button {
  font-size: medium;
  background: #36b4cd;
  color: white;
  border-style: solid;
  border-color: #83d0e0;
  border-width: 1px;
  border-radius: 3px;
  width: 400px;
  padding: 0 0 0 30px;

}
table {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px 0;
}
tr {
  color: #3d96b4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 150px;
  padding: 40px 0 20px 0;
}
</style>