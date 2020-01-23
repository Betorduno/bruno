<template>
  <div>
    <el-tabs tab-position="left" type="border-card">
      <el-tab-pane label="Espacial" height="100">
          <el-form v-if="visibleForm" ref="form" v-for="data in tableData" label-width="120px">
              <br>
              <el-form-item label="ID">
                <el-tag type="info">{{data.id}}</el-tag>
              </el-form-item>
              <el-form-item label="Latitud">
                <el-tag type="info">{{data.latitud}}</el-tag>
              </el-form-item>
              <el-form-item label="Longitud">
                <el-tag type="info">{{data.longitud}}</el-tag>
              </el-form-item>
              <el-form-item label="Usuario">
                <span v-if="data.id_usuario!=null"><el-tag type="info">{{data.id_usuario}}</el-tag></span>
                <span v-else><el-tag type="info">Ninguno</el-tag></span>
              </el-form-item>
              <el-form-item label="Formulario">
                <el-tag type="info"> {{data.id_formulario}}</el-tag>
              </el-form-item>
              <el-form-item label="Plantilla">
                <el-tag type="info" :onload="searchPlantilla(data.id_plantilla)">{{ids.plant}}</el-tag>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="visibleForm=false; visibleUpdate=true;">Editar</el-button>
                <el-button @click="imprimir()">Impirmir</el-button>
              </el-form-item>
          </el-form>
          <!---formulario actualizar-->

          <el-form v-if="visibleUpdate" :model="dataAll" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="ID" prop="id" disabled="true">
              <el-input v-model="dataAll.id"></el-input>
            </el-form-item>
            <el-form-item label="Latitud" prop="latitud">
              <el-input v-model="dataAll.latitud"></el-input>
            </el-form-item>
            <el-form-item label="Longitud" prop="longitud">
              <el-input v-model="dataAll.longitud"></el-input>
            </el-form-item>
            <el-form-item label="Plantilla" prop="id_plantilla">
              <el-select  v-model="dataAll.id_plantilla" placeholder="Plantillas">
                <el-option  v-for="p in plantilla" :value="p.id">{{p.nombre}}</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
              <el-button @click="visibleUpdate=false; visibleForm= true;">Cancelar</el-button>
            </el-form-item>
          </el-form>
      </el-tab-pane>
      <el-tab-pane label="Ocupante">
      </el-tab-pane>
      <el-tab-pane label="Predio"></el-tab-pane>
      <el-tab-pane label="Cultivo Principal"></el-tab-pane>
      <el-tab-pane label="Mercado"></el-tab-pane>
      <el-tab-pane label="Complementarios"></el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<style>
.el-header {
  background-color: #fff;
  color: #fff;
  line-height: 60px;
}
.el-tabs__header.is-left {
  height: 450px !important;
  border-right: 1px solid #821433 !important;
}
.el-aside {
  color: #fff;
}
</style>

<script>
import {  
        getFichas,
        getIDPlantillas,
        getPlantillas,
        updateFicha
      } from '../../utils/crud.js'
export default {
  data() {
    
    return {
      tableData: [],
      visibleForm: true,
      visibleUpdate: false,
      ids:{
        plant:''
      },
      dataAll:{
          id: '',
          latitud: '',
          longitud: '',
          id_usuario: '',
          id_formulario: '',
          id_plantilla: ''
      },
      rules: {
          id: [
            { required: true, message: 'Ingrese el ID', trigger: 'blur' },
            {  message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          latitud: [
            { required: true, message: 'Ingrese latitud', trigger: 'blur' },
            {  message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          longitud: [
            { required: true, message: 'Ingrese longitud', trigger: 'blur' },
            {  message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          id_plantilla: [
            { required: true, message: 'Ingrese una plantilla', trigger: 'change' }
          ]
        }, 
        plantilla:[]
      }
    },
  methods: {
    imprimir() {
      window.print();
    }, 
    getData(){
      getFichas().then((response)=>{
        console.log('datos--->', response.data );
        this.tableData = response.data;
        this.dataAll.id = response.data[0].id;
        this.dataAll.latitud = response.data[0].latitud;
        this.dataAll.longitud = response.data[0].longitud;
        this.dataAll.id_usuario = response.data[0].id_usuario;
        this.dataAll.id_formulario = response.data[0].id_formulario;
        this.dataAll.id_plantilla = response.data[0].id_plantilla;
      
      })
    },
    searchPlantilla(id){
      console.log('sssssss',id)
      getIDPlantillas(id).then((response)=>{
        this.ids.plant= response.data.nombre;
      })
    },
    searchAllPlantilla(){
      getPlantillas().then((response)=>{
        this.plantilla= response.data;
      })
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            updateFicha(this.dataAll)
              .then((response)=>{
                this.visibleUpdate = false;
                this.visibleForm =true;
                this.getData();
                this.$message({
                    type: "success",
                    message: "Campos Actualizados!!"
                  });
              })
              .catch(error=>{
                  this.$message({
                      type: "info",
                      message: "Error al actualizar"
                  });
              })
          } else {
            console.log('error submit!!');
            
            return false;
          }
        });
      },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted() {
    this.getData();
    this.searchAllPlantilla()
    
  },
};
</script>
<style>
.el-tag--info{
  width: 50% !important;
}
</style>
