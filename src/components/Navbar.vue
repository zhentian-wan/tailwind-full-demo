<template>
  <header
    class="bg-gray-900 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3"
  >
    <div class="flex justify-between items-center px-4 py-3 sm:p-0">
      <div>
        <img class="h-8" src="/img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="px-2 pt-2 pb-4 sm:flex">
        <a
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >List your property</a
        >
        <a
          href="#"
          class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >Trips</a
        >
        <a
          href="#"
          class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >Messages</a
        >
        <AccountDropdown class="sm:ml-6 hidden sm:block"></AccountDropdown>
      </div>

      <div class="relative px-4 py-5 border-t border-gray-800 sm:hidden">
        <div class="flex">
          <img
            class="h-8 w-8 rounded-full overflow-hidden object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="Your avatar"
          />
          <span class="text-white font-semibold ml-3">Jane Doe</span>
        </div>
        <div class="mt-4">
          <a href="#" class="block text-gray-400 hover:text-white"
            >Account settings</a
          >
          <a href="#" class="block mt-2 text-gray-400 hover:text-white"
            >Support</a
          >
          <a href="#" class="block mt-2 text-gray-400 hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AccountDropdown from "./AccountDropdown";
export default {
  components: {
    AccountDropdown,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
