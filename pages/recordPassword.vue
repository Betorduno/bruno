<template>
    <div>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <img style="width: 100px; height: 100px" src="../assets/media/avatars/logo.png" fit="cover"/>
                    </div>
                </el-col>
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                
                
                <el-form :model="datos" :rules="rules" ref="datos" label-width="120px" class="demo-datos">
                    <el-form-item> <h1>Recuperar contraseña</h1></el-form-item>
                    <br>
                    <el-form-item label="Cedula" prop="cedula">
                        <el-input v-model="datos.cedula"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="datos.email"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align: left;">
                        <el-button  type="primary" @click="submitForm('datos')">Recuperar</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </el-main>
        <el-footer>Pie de página</el-footer>
    </el-container>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            datos:{
                cedula: '',
                email: ''
            },
            rules: {
                cedula: [
                    { required: true, message: 'Por favor ingrese la cedula', trigger: 'blur' },
                    { min: 10, max: 10, message: 'La longitud debe ser 10 caracteres', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Por favor ingrese el email', trigger: 'blur' },
                    { type: 'email', message: 'Email no valido', trigger: 'blur' }
                ]
            }
            
        }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // }
    }
    }
</script>
<style>
    .el-header{
        background-color: #303133 !important;

    }
    .el-main{
        padding: 50px;
        margin:auto;
        text-align: center;
        min-height: 500px;
        width: 40%;
        background-color: #fff;
    }
    .el-main .tablePage{
        width: 100%
    }
    
    .el-footer{
        background-color: #303133 !important;
    }
</style>

