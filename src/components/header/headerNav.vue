<template>
    <div id="header_nav">
        <div class="clearfix content">
          <div class="pull-left clearfix">
            <h1 class="logo pull-left" title="网易云音乐">
              <router-link :to="'/discover'">{{$t("headers.product")}}</router-link>
            </h1>
            <el-menu :default-active="activeId" mode="horizontal" class="pull-left" router>
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    {{ item.navItem }}
              </el-menu-item>
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
      return [
        { name: "/discover", navItem: this.$i18n.t("headers.discover")},
        { name: "/my", navItem: this.$i18n.t("headers.myMusic")}
      ];
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
#header_nav .logo {
  width: 176px;
  height: 60px;
  margin-right: 20px;
}
#header_nav .logo > a {
  display: inline-block;
  width: 176px;
  height: 60px;
  line-height: 60px;
}
#header_nav .content {
  width: 1100px;
  margin: 0 auto;
}
.el-dropdown {
  vertical-align: top;
}
</style>

