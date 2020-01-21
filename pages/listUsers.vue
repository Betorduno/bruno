<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img
                style="width: 100px; height: 100px"
                src="../assets/media/avatars/logo.png"
                fit="cover"
              />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <h1 style="text-align: left; font-size: 200%;">Lista de usuarios</h1>
              <br />
            </div>
          </el-col>
        </el-row>
        <el-container>
          <div class="tablePage">
            <el-table
              :data="tableData.filter(data => !search || data.nombre.toLowerCase().includes(search.toLowerCase())|| data.documento.toString() .toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="Identificación" prop="documento"></el-table-column>
              <el-table-column label="Nombre" prop="nombre"></el-table-column>
              <el-table-column label="Apellido" prop="apellido"></el-table-column>
              <el-table-column label="Rol">
                <template slot-scope="props">
                  <p v-if="props.row.rol==1">Administrador</p>
                  <p v-else>Usuario</p>
                </template>
              </el-table-column>
              <!-- <el-table-column label="Telefono" prop="telefono">
              </el-table-column>-->
              <el-table-column label="Email" prop="email"></el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="Escribe para buscar" />
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                  >Editar</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
            <br />
            <el-row>
              <el-col :span="9">
                <div style="text-align: left;">
                  <el-button type="primary" icon="el-icon-plus" circle></el-button>
                </div>
              </el-col>
              <el-col :span="15">
                <div style="text-align: left;">
                  <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-container>
      </el-main>
      <el-footer>Pie de página</el-footer>
    </el-container>
  </div>
</template>
<script>
import { getUsuarios } from "../utils/crud";
export default {
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  methods: {
    prueba(data) {
      console.log("----------->", data);
    },
    getData() {
      getUsuarios().then(response => {
        this.tableData = response.data;
        // console.log('---->',this.tableData)
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
  }
};
</script>
<style>
.el-header {
  background-color: #303133 !important;
}
.el-main {
  padding: 50px;
  margin: auto;
  text-align: center;
  min-height: 500px;
  width: 80%;
  background-color: #fff;
}
.el-main .tablePage {
  width: 100%;
}

.el-footer {
  background-color: #303133 !important;
}
</style>

