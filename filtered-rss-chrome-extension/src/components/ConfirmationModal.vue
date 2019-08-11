<template>
  <transition name="fade">
    <div class="modal vmodal" tabindex="-1" role="dialog" v-if="show">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="cancel()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ confirmationText }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="cancel()"
            >Cancel</button>
            <button type="button" class="btn btn-danger" @click="ok()">Yes</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
  @Component({
    components: {
    }
  })
  export default class ConfirmationModal extends Vue {
    @Prop()
    public show!: boolean;

    @Prop()
    public title!: string;

    @Prop()
    public confirmationText!: string;

    @Emit()
    // tslint:disable-next-line:no-empty
    public cancel(): void {
    }

    @Emit()
    // tslint:disable-next-line:no-empty
    public ok(): void {
    }
  }
</script>

<style lang="scss" scoped>
  .vmodal {
    position: absolute;
    padding-top: 50px;
    top: 0px;
    left: 0px;
    display: block;
    width: 350px;
    max-height: 552px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
