<template>
  <section class="controller-sponsor-container">
    <article class="sponsors-content">

    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.controller-sponsor-container{
    width: 100%;
    background: var(--reverse_2);
    padding:2vmax var(--page-padding);
    display: flex;
    align-items: center;
    .sponsors-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        min-height: 7vh;
    }
}
</style>