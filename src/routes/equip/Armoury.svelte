<script lang="ts">
  //import components
  import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
  import { initializeStores, Modal } from '@skeletonlabs/skeleton';

  //import graphics and icons
  import PrevIcon from "$lib/assets/svg/previous-button.svelte";
  import NextIcon from "$lib/assets/svg/next-button.svelte";
  import OpenFolder from "$lib/assets/svg/open-folder.svelte";
  import ResetIcon from "$lib/assets/svg/anticlockwise-rotation.svelte";
  import WalletFilled from "$lib/assets/svg/wallet_filled.svelte";
  import Save from "$lib/assets/svg/save.svelte";
  import Center from "$lib/assets/svg/horizontal-flip.svelte";
  import Horsechess from "$lib/assets/svg/chess-knight.svelte";

  //set costs and variablses
  let currentTile: number = 0;
  let elemCarousel: HTMLDivElement;
  const unsplashIds = [
    "QmUffzeQVqGRKnaL1uYerKVrhk9Q6jN6ffQYczuEgUp4uk.sz_197722",
    "QmQADbfzjxm9pBmhpuDj9vvCSxU9LtmWSZT7oG8sJVMyaB.sz_169272",
    "QmRyhmU1rzkFGV2aFEyD3q8bQ1T6dtuZeyTYvJsKz6FF1P.sz_201120",
    "QmeHGZgbp9fn3omFMjK37jXagMmr7Z4uTEFgTowLTXofSh.sz_182866",
  ];


  function carouselLeft(): void {
    const x =
      elemCarousel.scrollLeft === 0
        ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
        : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
    elemCarousel.scroll(x, 0);
  }

  function carouselRight(): void {
    const x =
      elemCarousel.scrollLeft ===
      elemCarousel.scrollWidth - elemCarousel.clientWidth
        ? 0 // loop
        : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
    elemCarousel.scroll(x, 0);
  }

  function openGoogle() {
  window.open('https://www.google.com', '_blank');
}
</script>

<!-- Armoury Toolbar -->
<div class="flex flex-row pt-3 pb-3">
  <div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
    <button type="button" class="btn-icon bg-gradient-to-br variant-soft-secondary" style="margin-right: 5px;" on:click={openGoogle}><OpenFolder iconSize={25}/></button>
    <button type="button" class="btn-icon btn-icon-sm bg-gradient-to-br variant-soft-secondary" ><ResetIcon iconSize={20}/></button>
  </div>
  <div style="display: flex; justify-content: center; align-items: center;" class="basis-10/12">
    <button type="button" class="btn-icon btn-icon-sm bg-gradient-to-br variant-soft-secondary" style="margin-right: 5px;"><Center iconSize={20}/></button>
    <button type="button" class="btn-icon btn-icon-sm bg-gradient-to-br variant-soft-secondary" ><Horsechess iconSize={20}/></button>
  </div>
  <div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12">
    <button type="button" class="btn-icon btn-icon-sm bg-gradient-to-br variant-soft-secondary" style="margin-right: 5px;"><WalletFilled iconSize={20}/></button>
    <button type="button" class="btn-icon bg-gradient-to-br variant-soft-secondary" ><Save iconSize={25}/></button>
  </div>
</div>

<!-- Armoury Loadout Layout Body -->
<div class="flex flex-row">
  <div
    style="display: flex; justify-content: center; align-items: center;"
    class="basis-3/12"
  >
    <div
      class="snap-y scroll-py-4 snap-mandatory scroll-smooth flex gap-4 overflow-y-auto px-4 py-10"
    >
      {#each Array.from({ length: 1 }) as _, i}
        <div class="snap-start shrink-0 card py-20 w-40 md:w-40 text-center">
          {i + 1}
        </div>
      {/each}
    </div>
  </div>
  <div
    style="display: flex; justify-content: center; align-items: center;"
    class="basis-6/12"
  >
    <div class="card p-4 grid grid-cols-[auto_1fr_auto] items-center">
      <button
        type="button"
        class="btn-icon variant-ghost-teriar"
        on:click={carouselLeft}
      >
        <PrevIcon />
      </button>
      <div
        bind:this={elemCarousel}
        class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"
      >
        {#each unsplashIds as unsplashId}
          <img
            class="snap-center w-[800px] rounded-container-token"
            src="https://converted-media.jpgstoreapis.com/{unsplashId}.dims_800x800.anim_0.webp"
            alt={unsplashId}
            loading="lazy"
          />
        {/each}
      </div>
      <button
        type="button"
        class="btn-icon variant-ghost-teriary"
        on:click={carouselRight}
      >
        <NextIcon />
      </button>
    </div>
  </div>
  <div
    style="display: flex; justify-content: center; align-items: center;"
    class="basis-3/12"
  >
    <div
      class="snap-y scroll-py-4 snap-mandatory scroll-smooth flex gap-4 overflow-y-auto px-4 py-10"
    >
      {#each Array.from({ length: 1 }) as _, i}
        <div class="snap-start shrink-0 card py-20 w-40 md:w-40 text-center">
          {i + 1}
        </div>
      {/each}
    </div>
  </div>
</div>
