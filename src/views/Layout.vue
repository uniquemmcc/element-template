<template>
  <el-container style="width:100%; height:100%;display:flex;">
    <el-aside style="width:auto;">
  
<sider-menu :list="list" :isCollapse="isCollapse"></sider-menu>

    </el-aside>
    <el-container style="flex:1;" >
      <el-header>
        <div @click="handleClick">Header</div>
        </el-header>
      <el-main>
        <router-view />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import SiderMenu from '_c/SiderMenu'

export default {
  components: {
    SiderMenu
  },
  data(){
    return{
      list: [
                {
                  name: '111',
                  children: [
                                    {
                                        name: '111-111'      
                                    },
                                    {
                                        name: '111-222' ,
                                        children: [
                                            {
                                                name:'111-222-111'
                                            }
                                        ]     
                                    }
                  ]           
                },
                 {
                  name: '222'      
                },
                {
                  name: '333',
                  children: [
                       {
                         name: '333-111'      
                       },
                       {
                         name: '333-222'      
                       },
                       {
                         name: '333-333', 
                         children: [
                             {
                                name: '333-333-111'      
                             },
                             {
                                name: '333-333-222'      
                             },
                             {
                                name: '333-333-333', 
                                children: [
                                    {
                                        name: '333-333-333-111'      
                                    },
                                    {
                                        name: '333-333-333-222'      
                                    }
                                ]     
                             }
                         ]     
                       }
                  ]      
                }

            ],



            isCollapse:false
    
    
    
    }
  },
  mounted(){
    // console.log(this.$router.options.routes[2].children)
    // this.list = this.$router.options.routes[2].children
  },
  methods:{
    handleClick(){
          this.isCollapse=!this.isCollapse
    }
  }
};
</script>

<style>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

