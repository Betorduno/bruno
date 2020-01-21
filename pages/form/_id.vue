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
                <el-button type="primary" @click="handleQueryID(scope.row)" size="small">Editar</el-button>
                <el-button type="danger" @click="handleDelete(scope.row)" size="small">Eliminar</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-dialog title="Shipping address" :visible.sync="dialogUpdate">
            <el-form :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="Fecha Inicio" required>
                <el-col :span="11">
                  <el-form-item>
                    <el-date-picker
                      v-model="updateData.fecha_inicio"
                      type="date"
                      placeholder="Ingrese fecha inicio"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="Fecha Fin" required>
                <el-col :span="11">
                  <el-form-item>
                    <el-date-picker
                      v-model="updateData.fecha_fin"
                      type="date"
                      placeholder="Ingrese fecha fin"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogUpdate = false">Cancelar</el-button>
              <el-button type="primary" @click="handleUpdate()">Actualizar</el-button>
            </span>
          </el-dialog>

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
                <el-dialog :title="dataPlantilla.nombre" :visible.sync="dialogFormVisible">
                  <el-form
                    :model="createData"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="120px"
                    class="demo-ruleForm"
                  >
                    <el-form-item label="Fecha Inicio" required>
                      <el-col :span="11">
                        <el-form-item prop="formatDate(fecha_inicio)">
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
                    <!-- <el-form-item label="Plantilla" prop="id_plantilla">
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
                    </el-form-item>-->
                    <el-form-item label="Usuario" prop="id_usuario">
                      <el-input v-model="createData.id_usuario"></el-input>
                    </el-form-item>
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
import {
  getFormulario,
  getIDPlantillas,
  validateFecha,
  createFormulario,
  formatDate,
  deleteFormulario,
  updateFormulario
} from "../../utils/crud";
import moment from "moment";
import { log } from "util";
export default {
  data() {
    return {
      id: this.$route.params.id,
      tableData: [],
      createData: {
        fecha_inicio: null,
        fecha_fin: null,
        id_plantilla: null,
        id_usuario: null
      },
      dialogUpdate: false,
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
      dataPlantilla: [],
      updateData: {
        id: null,
        fecha_inicio: null,
        fecha_fin: null
      }
    };
  },
  methods: {
    getData() {
      getFormulario(this.id).then(response => {
        this.tableData = response.data;
        this.tableData.map(data => {
          // console.log("......>", data);
        });
      });
      getIDPlantillas(this.id).then(response => {
        this.dataPlantilla = response.data;
        this.createData.id_plantilla = response.data.id;
      });
    },
    handleQueryID(row) {
      this.dialogUpdate = true;
      let data = this.tableData.filter(f => f.id == row.id);
      if (data) {
        this.updateData.id = data[0].id;
        this.updateData.fecha_inicio = data[0].fecha_inicio;
        this.updateData.fecha_fin = data[0].fecha_fin;
      }
    },
    handleUpdate() {
      updateFormulario(this.updateData).then(response => {});
    },
    handleDelete(row) {
      this.$confirm(
        "Esto eliminará permanentemente el registro, desea continuar?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancelar",
          type: "warning"
        }
      )
        .then(() => {
          deleteFormulario(row.id).then(data => {
            this.getData();
            this.$message({
              type: "success",
              message: "Eliminado!!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Cancelado!!"
          });
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let fechaI = moment(this.createData.fecha_inicio);
          let fechaF = moment(this.createData.fecha_fin);
          // this.createData.fecha_inicio = fechaI.format("YYYY-MM-DD");
          // this.createData.fecha_fin = fechaF.format("YYYY-MM-DD");

          if (validateFecha(fechaI, fechaF)) {
            createFormulario(this.createData).then(response => {
              console.log("console->", response);
              this.dialogFormVisible = false;
            });
            // console.log('-ZZZZZZZ', this.createData)
          } else {
            this.$message({
              type: "info",
              message: "Por favor verifique las fechas de inicio y fin!"
            });
          }
          //
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
