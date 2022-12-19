<template>
  <!-- This is an example component -->
  <div class="h-full">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <div class="w-20">
        <nav
          class="bg-white w-20 justify-between flex flex-col h-full fixed overflow-scroll no-scrollbar"
        >
          <div class="mt-5 mb-10">
            <a href="#">
              <dashboard-logo class="rounded-full w-10 h-10 mb-10 mx-auto"></dashboard-logo>
            </a>
            <div class="overflow-scroll no-scrollbar">
              <div class="mt-10">
                <ul>
                  <nav-bar-link link="/" icon="material-symbols:home"></nav-bar-link>
                  <nav-bar-link
                    link="/"
                    icon="healthicons:i-schedule-school-date-time"
                  ></nav-bar-link>
                  <nav-bar-link link="/" icon="carbon:request-quote"></nav-bar-link>
                  <nav-bar-link link="/" icon="ri:heart-pulse-fill"></nav-bar-link>
                  <nav-bar-link link="/" icon="healthicons:medicines"></nav-bar-link>
                  <nav-bar-link link="/" icon="bxs:injection"></nav-bar-link>
                  <nav-bar-link link="/" icon="mdi:question-mark-circle"></nav-bar-link>
                  <nav-bar-link link="/" icon="entypo:chat"></nav-bar-link>
                </ul>
              </div>
              <div class="mt-20">
                <ul>
                  <nav-bar-link link="/" icon="fa-regular:hospital"></nav-bar-link>
                  <nav-bar-link link="/" icon="ant-design:setting-filled"></nav-bar-link>
                  <nav-bar-link link="/" icon="mdi:user"></nav-bar-link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="px-4 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
            </a>
            <div class="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul
                class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    aria-current="page"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >Services</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="h-full w-auto fixed"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLinkVue from '../../Layout/Common/NavBarLink.vue'
import DashboardLogo from '../../icons/DashboardLogo.vue'
export default {
  components: {
    'nav-bar-link': NavBarLinkVue,
    'dashboard-logo': DashboardLogo,
  },
}
</script>
