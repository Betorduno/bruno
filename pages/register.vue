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
            <el-container> 
                <div>
                    <div style="padding:40px">
                        <h1>Crear tu cuenta </h1>
                    </div>
                    <el-row >
                        <el-col>
                            <div class="grid-content bg-purple-light">
                                <el-form :model="register" :rules="rules" ref="register" label-width="120px" >
                                <el-form-item label="Nombre" prop="nombre">
                                    <el-input v-model="register.nombre" style="width: 450px;"></el-input>
                                </el-form-item>
                                <el-form-item label="Cedula" prop="cedula" >
                                    <el-input v-model="register.cedula"></el-input>
                                </el-form-item>
                                <el-form-item label="Telefono" prop="telefono" >
                                    <el-input v-model="register.telefono"></el-input>
                                </el-form-item>
                                <el-form-item label="Aspecto" prop="aspecto" style="text-align: left">
                                    <el-select style="text-align: left" v-model="register.aspecto" placeholder="Aspecto..">
                                    <el-option label="Zone one" value="shanghai"></el-option>
                                    <el-option label="Zone two" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Email" prop="email" >
                                    <el-input v-model="register.email"></el-input>
                                </el-form-item>
                                <el-form-item label="Contraseña" prop="pass">
                                    <el-input type="password" v-model="register.pass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="Confirmar" prop="checkPass">
                                    <el-input type="password" v-model="register.checkPass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item style="text-align: left">
                                    <el-button type="primary" @click="submitForm('register')">Registrase</el-button>
                                    <el-button @click="resetForm('register')">Limpiar</el-button>
                                </el-form-item>
                                </el-form>
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
    export default {
        data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Por favor ingrese la contraseña'));
            } else {
            if (this.register.checkPass !== '') {
                this.$refs.register.validateField('checkPass');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Por favor ingrese la contraseña'));
            } else if (value !== this.register.pass) {
            callback(new Error('Las contraseñas no coinciden!'));
            } else {
            callback();
            }
        };
        return {
            register: {
                nombre: '',
                cedula: '',
                telefono: '',
                aspecto: '',
                email: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                nombre: [
                    { required: true, message: 'Por favor ingrese el nombre', trigger: 'blur' },
                    { min: 5, max: 40, message: 'La longitud debe ser de 3 a 5 caracteres', trigger: 'blur' }
                ],
                cedula: [
                    { required: true, message: 'Ingrese la cedula', trigger: 'blur' },
                    {  min:10, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                telefono: [
                    { required: true, message: 'Ingrese el telefono', trigger: 'blur' },
                    {  min:8, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],

                aspecto: [
                    { required: true, message: 'Por favor, ingrese el aspecto', trigger: 'change' }
                ],
                email: [
                    { required: true, message: 'Ingrese el email', trigger: 'blur' },
                    {  type: 'email', message: 'Ingrese un email valido', trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        };
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
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        }
    }
</script>
<style>
    .el-header{
        background-color: #303133 !important;

    }
    .el-main{
        margin: auto;
        text-align: center;
        padding: 120px;
    }
    .el-footer{
        background-color: #303133 !important;
    }
</style>

