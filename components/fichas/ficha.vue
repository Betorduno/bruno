<template>
  <div>
    <el-tabs tab-position="left" type="border-card">
      <el-tab-pane label="Espacial" height="100">
        <el-table :data="tableData" style="width: 800px">
          <el-table-column prop="titulo" width="400">
          </el-table-column>
          <el-table-column prop="data"  width="400">
          </el-table-column>
        </el-table>
        <br>
        <el-button type="success" plain>Actualizar</el-button>
        <el-button type="info" @click="imprimir()" plain>Imprimir</el-button>
      </el-tab-pane>
      <el-tab-pane label="Ocupante"></el-tab-pane>
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
export default {
  data() {
    
    return {
      tableData: [{
          titulo: 'Elaborado por:',
          data: 'Alberto'
        }, {
          titulo: 'Coordenados:',
          data: 'sur-norte '
        }, {
          titulo: 'Municipio:',
          data: 'Tamalito'
        }, {
          titulo: 'Vereda:',
          data: 'puntapie'
        },
        {
          titulo: 'Estado:',
          data: 'Cerrada'
        }]
    };
  },
  methods: {
    imprimir() {
      window.print();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
