<template>
  <div>
    <div>
      <el-tabs>
        <el-tab-pane label="Maestros:"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="nav-width" style="padding: 70px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="General" name="first">
          <el-card class="box-card col-md-6">
            <div class="profile-space">
              <div>
                <b-img
                  class="profile-img-big"
                  src="../../assets/media/avatars/logo.png"
                ></b-img>
              </div>
              <div class="profile-data">
                <div class="profile-username">User name</div>
                <b-badge
                  sytle="text-transform:capitalize;"
                  pill
                  variant="primary"
                  >Plan</b-badge
                >
              </div>
            </div>
          </el-card>
          <el-tabs type="border-card">
            <el-tab-pane
              ><span slot="label"><i class="el-icon-date"></i> Maestros</span
              ><plantillas
            /></el-tab-pane>
            <el-tab-pane label="Usuarios"><usuarioPage /></el-tab-pane>
            <el-tab-pane label="Campañas">Campañas</el-tab-pane>
            <el-tab-pane label="Fichas"><ficha /></el-tab-pane>
            <el-tab-pane label="Estadisticas">Estadisticas</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="Configuración" name="second"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import usuarioPage from "../../components/usuarios/users";
import plantillas from "../../components/plantillas/plantillas";
import ficha from "../../components/fichas/ficha";
// import { accessPricing } from '../utils/textConfig'
// import { formatDate } from "../utils/utils";
// import { Loading } from "element-ui";
// import defaultAvatar from "../assets/media/avatars/profile.png";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    usuarioPage,
    plantillas,
    ficha
  }
};
</script>
