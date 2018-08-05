<template>
    <div id="header_nav">
        <div class="clearfix">
            <div class="pull-left">
            <el-menu :default-active="activeId" mode="horizontal" router>
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    {{ item.navItem }}
                </el-menu-item>
                <!-- <el-menu-item class="el-pagination__rightwrapper"></el-menu-item> -->
            </el-menu>
        </div>
        <div class="pull-right" style="height:60px;line-height:60px;padding-right:20px;">
            <el-dropdown  @command="handleCommand">
                <span class="el-dropdown-link">{{$t("headers.switch_lang")}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh">{{$t("headers.zh_cn")}}</el-dropdown-item>
                    <el-dropdown-item command="en">{{$t("headers.en_us")}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        </div>
        <div class="line"></div>
        
    </div>
</template>
<script>
export default {
  name: "header-nav",
  data() {
    return {
      activeId: this.$route.path
    };
  },
  computed: {
    navList() {
      return [{ name: "/home", navItem: this.$i18n.t("headers.home") }];
    }
  },
  methods: {
    handleCommand(command) {
      console.log(this.$i18n);
      this.$i18n.locale = command;
      console.log(command);
    }
  }
};
</script>
<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
.clearfix {
  *zoom: 1;
}
#header_nav {
  border-bottom: 1px solid #e0e6ed;
}
.el-dropdown {
  vertical-align: top;
}
</style>

