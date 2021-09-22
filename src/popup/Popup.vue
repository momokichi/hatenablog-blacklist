<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Popup</div>
    <div class="w-full">
      <textarea v-model="blackList" class="border border-gray-400 rounded w-full py-1 mt-2" />
    </div>
    <div>
      {{ blackList.split('\n') }}
    </div>

    <button class="btn mt-2" @click="setValue()">
      set
    </button>
  </main>
</template>

<script setup lang="ts">
/* eslint-disable no-console */
const blackList = ref('')

const loadBlackList = async() => {
  try {
    const storage = await browser.storage.local.get('blackList')
    blackList.value = storage.blackList ?? ''
  }
  catch (e) {
    console.error(e)
  }
}
loadBlackList()

function setValue() {
  browser.storage.local.set({ blackList: blackList.value })
}

</script>
