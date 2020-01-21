<template>
    <div>
              <!-- *************************tabla de datos************************ -->
        <el-table v-loading="loading" :data="tableData" style="width: 100%">
            <el-table-column label="ID" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-circle-check"></i>
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Nombre" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.nombre }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Operaciones">
                <template slot-scope="scope">
                <!-- @click="handleEdit(scope.$index, scope.row)" -->
                    <el-button size="mini" @click="handleQueryID(scope.row)">Editar</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Eliminar</el-button>
                    <el-button size="mini" type="primary" @click="handleFormulario(scope.$index, scope.row)" icon="el-icon-document">Formulario</el-button>
                </template>
            </el-table-column>
        </el-table>
<!-- *************************tabla fin************************ -->
<!-- *************************formulario de Edicion************************ -->
        <el-dialog title="Actualizar Registro" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="Nombre: " prop="nombre">
                    <el-input v-model="nombreUpdate"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancelar</el-button>
                <el-button type="primary" @click="handleEdit()">Actualizar</el-button>
            </span>
        </el-dialog>
<!-- ********************Edicion Fin********************* -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark buttonCreate">
                    <el-button type="primary" class="custom-icon" icon="el-icon-plus" @click="dialogVisible = true" circle></el-button>
                    <el-dialog title="Nuevo Registro" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                        <el-form :model="create" :rules="rules" ref="create" label-width="120px" class="demo-create">
                            <el-form-item label="Nombre:" prop="nombre">
                                <el-input v-model="create.nombre"></el-input>
                            </el-form-item>
                            <br />
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('create')">Create</el-button>
                                <el-button @click="resetForm('create')">Reset</el-button>
                            </el-form-item>
                        </el-form>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
        <el-pagination
            v-if="tableData.length > 0"
            style="padding-bottom:20px;"
            layout="prev, pager, next"
            :page-size="pagination.pageSize"
            :page-count="pagination.count"
            :current-page="pagination.currentPage"
            :total="tableData.lenght"
            @current-change="currentChange"
            @prev-click="prev"
            @next-click="next"
        ></el-pagination>
    </div>
</template>
<script>
import {
    getPlantillas,
    getIDPlantillas,
    createPlantilla,
    deletePlantilla,
    updatePlantilla
} from "../../utils/crud";
import usuarioPage from "../../components/usuarios/users";
import plantillas from '../../components/plantillas/plantillas';
// import { accessPricing } from '../utils/textConfig'
// import { formatDate } from "../utils/utils";
// import { Loading } from "element-ui";
// import defaultAvatar from "../assets/media/avatars/profile.png";

export default {
    data() {
    return {
        pagination: {
            count: 2,
            pageSize: 5,
            currentPage: 1
        },
    create: {
        nombre: null
    },
    rules: {
        name: [
        {
            required: true,
            message: "Por favor ingrese el campo nombre",
            trigger: "blur"
            }
        ]
    },
        idUpdate: null,
        nombreUpdate: null,
        tableData: [],
        loading: false,
        dialogVisible: false,
        dialogFormVisible: false,
        filterData: []
    };
  },
  methods: {
    getData() {
      //let loadingInstance = Loading.service({})
        getPlantillas().then(response => {
            this.filterData = response.data;
            let length = parseInt(response.data.length - 1);
            let pageSize = parseInt(this.pagination.pageSize);
            let count = Math.ceil(length / pageSize);
            this.pagination.count = count;
            this.filterTable();
        });
    },
    filterTable() {
      let index = (this.pagination.currentPage - 1) * this.pagination.pageSize;
        this.tableData = this.filterData.slice(
            index,
            index + this.pagination.pageSize
        );
    },
    prev(e) {
        this.pagination.currentPage = e;
        this.filterTable();
    },
    next(e) {
        this.pagination.currentPage = e;
        this.filterTable();
    },
    currentChange(e) {
        this.pagination.currentPage = e;
        this.filterTable();
    },
    handleFormulario(index, row) {
        this.$router.push({ path: "form/" + row.id });
      // row.id
    },
    handleQueryID(row) {
        getIDPlantillas(row.id).then(response => {
            this.nombreUpdate = response.data.nombre;
            this.idUpdate = response.data.id;
            this.dialogFormVisible = true;
        });
    },
    handleEdit(update) {
        updatePlantilla(this.idUpdate, this.nombreUpdate).then(response => {
        this.getData();
        this.dialogFormVisible = false;
        this.$message({
            type: "success",
            message: "Campos Actualizados!!"
        });
        });
    },
    handleDelete(index, row) {
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
            deletePlantilla(row.id).then(data => {
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
    handleClose(done) {
        this.$confirm("¿Estás seguro de cerrar la ventana?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //handlerCreate
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          createPlantilla(this.create).then(sucess => {
            this.getData();
            this.create.nombre = null;
            this.$message({
              type: "success",
              message: "Se a agregado un registro!!"
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.profile-img-big {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
  object-position: center right;
  margin: auto;
}

.profile {
  text-align: center;
  padding-right: 0px;
  padding-left: 0px;
}

.profile-username {
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
}

.campaign-name {
  font-size: 1.2rem;
  letter-spacing: -0.029375rem;
  font-weight: 600;
  text-transform: capitalize;
}

.card-body div > h2 {
  font-weight: bold;
  text-transform: capitalize;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.campaign-data {
  text-align: left;
}

.campaign-card {
  display: grid;
  grid-template-columns: 10fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.el-card {
  width: 100%;
  margin-bottom: 20px;
}

.content-card {
  padding-top: 5px;
}

.card-group {
  grid-column: span 1;
}

.profile-space {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  padding-bottom: 20px;
}

.new-campaign {
  display: flex;
  align-items: center;
  justify-content: center;
}

.campaign-space {
  display: grid;
  grid-template-columns: 6fr 2fr;
}

@media screen and (max-width: 765px) {
  .profile-space {
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
  .new-campaign {
    grid-column: span 2;
    text-align: right;
    display: block;
    float: right;
  }
  .profile-data {
    grid-column: span 1;
    padding-left: 10px;
  }
  .card-group {
    grid-column: span 2;
  }
}
.custom-icon {
  font-size: 2rem;
}
.buttonCreate {
  margin: auto;
  text-align: center;
  padding-top: 14px !important;
}
.pagination {
  margin: auto;
  text-align: center;
  padding-top: 14px !important;
}
.el-tabs__nav-wrap::after {
  width: 14.5%;
}
</style>