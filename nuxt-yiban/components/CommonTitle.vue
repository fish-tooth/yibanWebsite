<template>
    <div class="lp-title" style="margin-bottom: 70px">
        <p class="lp-ch">{{ comTitleCh }}</p>
        <p class="lp-en">{{ comTitleEn }}</p>
      </div>
</template>

<script lang="ts" setup>
// defineOptions({ name: 'CommonTop' })
const props = defineProps({
  comTitleCh: {
    type: String,
    required: true
  },
  comTitleEn: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>

.lp-title {
  margin: 100px auto;
  font-family: sans-serif;
}
.lp-ch {
font-size: 48px;
text-align: center;

}

.lp-en {
font-size: 40px;
text-align: center;
color: rgb(153, 164, 179);
}

/** <1200px */
@media screen and (max-width: 1200px) {
    .lp-ch, .lp-en {
        font-size: 38px;
    }
}

/** <992px */
@media screen and (max-width: 992px) {
    .lp-ch, .lp-en {
        font-size: 30px;
    }
}

</style>