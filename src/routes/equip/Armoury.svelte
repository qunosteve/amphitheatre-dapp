<script lang="ts">
  //import components
  import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
  import { initializeStores, Modal } from "@skeletonlabs/skeleton";

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
  const rightBaskets = [
    "ITEM0",
    "ITEM1",
    "ITEM2",
    "ITEM3",
    "HORSE",
    "HORSEHARNESS",
  ];
  const leftBaskets = ["HEAD", "BODY", "SHOULDERS", "GLOVES", "LEG", "SPECIAL"];
  const unsplashIds = [
    "QmUffzeQVqGRKnaL1uYerKVrhk9Q6jN6ffQYczuEgUp4uk.sz_197722",
    "QmQADbfzjxm9pBmhpuDj9vvCSxU9LtmWSZT7oG8sJVMyaB.sz_169272",
    "QmRyhmU1rzkFGV2aFEyD3q8bQ1T6dtuZeyTYvJsKz6FF1P.sz_201120",
    "QmeHGZgbp9fn3omFMjK37jXagMmr7Z4uTEFgTowLTXofSh.sz_182866",
  ];

  function hideBaskets(basketId: string) {
    const basketDiv = document.getElementById(basketId);
    if (basketDiv) {
      basketDiv.style.display = "none";
    }
  }

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
    window.open("https://www.google.com", "_blank");
  }
</script>

<!-- Armoury Toolbar -->
<div class="flex justify-center">
  <div class="flex flex-row pt-3 pb-3" style="max-width: 1150px; width: 100%;">
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="basis-1/12"
    >
      <button
        type="button"
        class="btn-icon bg-gradient-to-br variant-ringed-surface"
        style="margin-right: 5px;"
        on:click={openGoogle}><OpenFolder iconSize={30} /></button
      >
      <button
        type="button"
        class="btn-icon btn-icon-sm bg-gradient-to-br variant-ringed-surface rounded 2x1"
        ><ResetIcon iconSize={25} /></button
      >
    </div>
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="basis-10/12"
    >
      <button
        type="button"
        class="btn-icon btn-icon-sm bg-gradient-to-br variant-ringed-surface rounded 2x1"
        style="margin-right: 5px;"><Center iconSize={25} /></button
      >
      <button
        type="button"
        class="btn-icon btn-icon-sm bg-gradient-to-br variant-ringed-surface rounded 2x1"
        ><Horsechess iconSize={25} /></button
      >
    </div>
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="basis-1/12"
    >
      <button
        type="button"
        class="btn-icon btn-icon-sm bg-gradient-to-br variant-ringed-surface rounded 2x1"
        style="margin-right: 5px;"><WalletFilled iconSize={25} /></button
      >
      <button
        type="button"
        class="btn-icon bg-gradient-to-br variant-ringed-surface"
        ><Save iconSize={30} /></button
      >
    </div>
  </div>
</div>
<!-- Armoury Loadout Layout Body -->
<div class="flex justify-center">
  <div class="flex flex-row" style="max-width: 1200px; width: 100%;">
    <div
      style="display: flex; justify-content: center; align-items: center; "
      class="basis-2/12"
      id="leftBaskets"
    >
      <div
        class="snap-y scroll-py-1 snap-mandatory scroll-smooth flex flex-col gap-1 overflow-y-auto px-1 py-1"
      >
        {#each leftBaskets as leftItem, i}
          <div
            class="snap-start shrink-0 card w-40 h-40 md:w-40 md:h-40 rounded-lg"
            id={leftItem}
          >
            {leftItem}
            <!-- You can display the item name inside the div if needed -->
          </div>
        {/each}
      </div>
    </div>
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="basis-8/12"
    >
      <div class="card p-4 grid grid-cols-[auto_1fr_auto] items-center">
        <div class="relative">
          <div
            bind:this={elemCarousel}
            class="snap-x scroll-smooth flex overflow-x-auto"
            style="max-width: 800px; width: 100%;"
          >
          <!-- Left Button -->
            <button
              type="button"
              class="btn-icon z-10 absolute left-0 top-1/2 transform -translate-y-1/2"
              on:click={carouselLeft}
            >
              <PrevIcon />
            </button>
            <!-- Carousel Images -->
            {#each unsplashIds as unsplashId}
              <img
                class="snap-center w-[800px] rounded-container-token"
                src="https://converted-media.jpgstoreapis.com/{unsplashId}.dims_800x800.anim_0.webp"
                alt={unsplashId}
                loading="lazy"
              />
            {/each}
            <!-- Right Button -->
            <button
              type="button"
              class="btn-icon z-10 absolute right-0 top-1/2 transform -translate-y-1/2"
              on:click={carouselRight}
            >
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="basis-2/12"
      id="rightBaskets"
    >
      <div
        class="snap-y scroll-py-1 snap-mandatory scroll-smooth flex flex-col gap-1 overflow-y-auto px-1 py-1"
      >
        {#each rightBaskets as rightItem, i}
          <div
            class="snap-start shrink-0 card w-40 h-40 md:w-40 md:h-40 rounded-lg"
            id={rightItem}
          >
            {rightItem}
            <!-- You can display the item name inside the div if needed -->
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
