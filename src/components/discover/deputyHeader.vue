<template>
    <div id="deputy_header_discover">
        <ul>
          <li v-for="list in lists" :key="list.id">
            <router-link :to="'/'+list.name" class="link">{{list.title}}</router-link>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "deputyHeader",
  data() {
    return {
      message: "这是副标题",
      lists: [
        {
          id: "recommed",
          name: "recommed",
          title: this.$i18n.t("discover.recommed")
        },
        {
          id: "toplist",
          name: "toplist",
          title: this.$i18n.t("discover.toplist")
        },
        {
          id: "playlist",
          name: "playlist",
          title: this.$i18n.t("discover.playlist")
        },
        {
          id: "djradio",
          name: "djradio",
          title: this.$i18n.t("discover.djradio")
        },
        {
          id: "artist",
          name: "artist",
          title: this.$i18n.t("discover.artist")
        },
        {
          id: "album",
          name: "album",
          title: this.$i18n.t("discover.album")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#deputy_header_discover {
  padding: 10px;
  padding-left: 315px;
  background-color: #42b983;
}
#deputy_header_discover .link {
  color: white;
}
</style>

