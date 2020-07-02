<template>
  <div class="container d-flex h-100 pb-5 justify-content-center">
    <p class="no-new-items-para">десь нечего видеть, товарищ</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class NoNewItemsMessage extends Vue {}
</script>

<style lang="scss" scoped>
.no-new-items-para {
  padding-top: 150px;
  word-break: break-all;
  white-space: normal;
  color: white;
  font-size: 20px;
}
</style>
