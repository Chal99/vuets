<template>
  <div>
    <div class="form-group row mb-3">
      <div class="col-md-8 row">
        <label class="col-md-4 me-4">DateofBirth</label>
        <div class="col-md-7">
          <datepicker v-model="db" format="dd-MM-yyyy" class="form-control"></datepicker>
        </div>
      </div>
      <div class="col-md-4 row">
        <label class="col-md-3" for="age">Age</label>
        <div class="col-md-9">
          <input id="age" type="text" class="form-control" :value="calculate()" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component"
import datepicker from "vue3-datepicker"
import {Emit} from "vue-property-decorator"

@Options({
  components: {
    datepicker
  },
})

export default class MyAge extends Vue {
  public db = new Date();
  public age="";
  @Emit('getDB')
  getAge(){
    let new_db=this.db;
    return new_db;
  }
  public calculate():any {
    this.$emit('getDB', this.db);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - this.db.getFullYear();
    const month = currentDate.getMonth() - this.db.getMonth();
    if(month < 0 || month === 0 && currentDate.getDate < this.db.getDate) {
        age = age - 1;
    }
    return age;
  }
}
</script>
