<template>
  <v-container class="action-container">
    <v-row>      
      <v-col cols="12">
        <v-date-picker v-model="picker" width="215" color="teal lighten-2"></v-date-picker>
      </v-col>

      <v-col cols="12" class="action">
        <v-dialog
          ref="dialog1"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="选择任务开始时间"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" color="teal lighten-2" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog1.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col cols="12" class="action">
        <v-dialog
          ref="dialog2"
          v-model="modal1"
          :return-value.sync="endDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDate"
              label="选择任务截止时间"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="endDate" color="teal lighten-2" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog2.save(endDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col cols="12" class="action-search">
        <v-text-field
          v-model="message"
          label="Search"
          outlined
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="action-select">
        <v-radio-group
          :row="row"
          :color="color"
        >
          <v-radio label="学生版"></v-radio>
          <v-radio label="教师版"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ActionView',
    data() {
      return {
          task:[],
          picker: new Date().toISOString().substr(0, 10),
          date: new Date().toISOString().substr(0, 7),
          endDate: new Date().toISOString().substr(0, 7),
          modal: false,
          modal1: false,
          message:"",
      };
    },
  }
</script>

<style>
.action-container{
  padding: 12px;
}
.action{
  padding: 10px 12px 3px 18px;
}
.action-search{
  padding: 15px 12px 0px 18px;
}
.action-select{
  padding: 0px 12px 0px 18px;
}
</style>