<template>
 
  <div >
  
      <template v-for="item in parent.children">
      <el-menu-item
        :index="item.name"
        v-if="!item.children"
           :key="item.name"
        :class="item.name===currentIndex?'active':''"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>


            <el-submenu
        v-if="item.children "
         :key="item.name"
        :index="item.name"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
       
       <re-submenu
   
        :parent="item"
  
        :current-index="currentIndex"
      ></re-submenu>
      </el-submenu>
    </template>

  </div>
</template>

<script>
export default {
  name: "ReSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    theKey: {
      type: String,
      default: ""
    },
    currentIndex: {
       type: String,
      default: ""
    }
  }
};
</script>

<style>
.active {
  background: yellowgreen;
}
</style>
