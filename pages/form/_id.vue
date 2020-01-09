<template>
  <div>
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="formDta">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="id" label="ID " width="150"></el-table-column>
            <el-table-column prop="fecha_inicio" label="Fecha_inicio" width="120"></el-table-column>
            <el-table-column prop="fecha_fin" label="Fecha_fin" width="120"></el-table-column>
            <el-table-column fixed="right" label="Operaciones" width="300">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="handleEditar(scope.$index, scope.row)"
                  size="small"
                >Editar</el-button>
                <el-button
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  size="small"
                >Eliminar</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark buttonCreate">
                <el-button
                  type="primary"
                  @click="dialogFormVisible = true"
                  icon="el-icon-plus"
                  style="padding: 12px;"
                  circle
                ></el-button>
                <!-- *********************formulario crear registro*********************** -->
                <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
                  <el-form
                    :model="createData"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="120px"
                    class="demo-ruleForm"
                  >
                    <el-form-item label="Fecha Inicio" required>
                      <el-col :span="11">
                        <el-form-item prop="fecha_inicio">
                          <el-date-picker
                            type="date"
                            placeholder="Fecha inicio"
                            v-model="createData.fecha_inicio"
                            style="width: 100%;"
                          ></el-date-picker>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="Fecha Fin" required>
                      <el-col :span="11">
                        <el-form-item prop="fecha_fin">
                          <el-date-picker
                            type="date"
                            placeholder="Fecha Fin"
                            format="yyyy-MM-dd"
                            v-model="createData.fecha_fin"
                            style="width: 100%;"
                          ></el-date-picker>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="Plantilla" prop="id_plantilla">
                      <el-col :span="8">
                        <el-select
                          v-model="createData.id_plantilla"
                          placeholder="Ingrese la plantilla"
                        >
                          <el-option
                            v-for="(plantilla, index) in dataPlantilla"
                            :key="plantilla.index"
                            :label="plantilla.nombre"
                            :value="plantilla.id"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="Usuario" prop="id_usuario">
                      <el-input v-model="createData.id_usuario"></el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                      <el-button @click="resetForm('ruleForm')">Reset</el-button>
                    </el-form-item>-->
                  </el-form>

                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">Confirm</el-button>
                  </span>
                </el-dialog>
                <!-- *************************************fin ************************************* -->
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import { getFormulario, getPlantillas } from "../../utils/crud";
import moment from 'moment';
export default {
  data() {
    return {
      id: this.$route.params.id,
      tableData: [],
      createData: {
        fecha_inicio: null,
        fecha_fin: null,
        id_plantilla: null,
        id_usuario: "676912f3-d0cc-476e-9350-46820dc0a7e81"
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      rules: {
        fecha_inicio: [
          {
            type: "date",
            required: true,
            message: "Por favor ingrese la fecha inicio",
            trigger: "change"
          }
        ],
        fecha_fin: [
          {
            type: "date",
            required: true,
            message: "Por favor ingrese la fecha fin",
            trigger: "change"
          }
        ],
        id_plantilla: [
          {
            required: true,
            message: "Por favor ingrese una plantilla",
            trigger: "change"
          }
        ]
      },
      dataPlantilla: []
    };
  },
  methods: {
    getData() {
      getFormulario(this.id).then(response => {
        this.tableData = response.data;
      });
      getPlantillas().then(response => {
        this.dataPlantilla = response.data;
        // console.log(this.dataPlantilla);
      });
    },
    handleEditar(index, row) {
      // console.log(">>>>>>>>>", row);
    },
    handleUpdate(index, row) {
      // console.log(">>>>>>>>>", row);
    },
    handleDelete(index, row) {
      // console.log(">>>>>>>>>", row);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let fechaIni = moment(this.createData.fecha_inicio).format("DD/MM/YYYY");
          let fecha_fin = moment(this.createData.fecha_fin).format("DD/MM/YYYY");
          console.log('---->', fechaIni)
          // validateFecha(this.createData.fecha_inicio,this.createData.fecha_fin)
    
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style>
.formDta {
  margin: auto;
  text-align: center !important;
  width: 70%;
}
.buttonCreate {
  margin: auto;
  text-align: center;
  padding: 14px !important;
}
</style>
